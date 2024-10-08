import React from 'react';
import { useState } from 'react';
import { useIssuesContext } from '../../hooks/useIssuesContext';
import { useAuthContext } from '../../hooks/useAuthContext';
import Select from 'react-select';

const parRoomOptions = [
    { value: 'DRMP1', label: 'DRMP1' },
    { value: 'PN-P1', label: 'PN-P1' },
    { value: 'WICP1', label: 'WICP1' },
    { value: 'STP1', label: 'STP1' },
    { value: 'LSP2', label: 'LSP2' },
    { value: 'KSCP3', label: 'KSCP3' },
    { value: 'EM-P4', label: 'EM-P4' },
    { value: 'ESTP1', label: 'ESTP1' },
    { value: 'ARLP2', label: 'ARLP2' },
    { value: 'CCP2', label: 'CCP2' },
    { value: 'SH-P1', label: 'SH-P1' },
    { value: 'HPP1', label: 'HPP1' },
];

const IssueForm = ({onClose}) => {

    const {dispatch} = useIssuesContext()
    const {user} = useAuthContext()
    const[error, setError] = useState('')
    const [emptyFields, setEmptyFields] = useState([])
    const [selectedParRooms, setSelectedParRooms] = useState([])

    const handleParRoomChange = selectedOptions => {
        setSelectedParRooms(selectedOptions)
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault()

        if(!user){
            setError('You must be logged in')
            return
        }

        const formData = new FormData(event.target)
        const routeChannel = formData.getAll("route")
        const driverChannel = formData.getAll("drivers")
        const data = Object.fromEntries(formData.entries())
        data.route = routeChannel
        data.drivers = driverChannel
        console.log(data)

        console.log(emptyFields, 'empty')
        try {
            const response = await fetch('https://task-sync-backend-demo-a723755d492a.herokuapp.com/api/issues', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }
            });

            console.log("request data", data)

            const json = await response.json();

            if(!response.ok){
                setError(json.error)
                setEmptyFields(json.emptyFields || [])
            }
            
            // Reset the form
            if(response.ok){
            setError(null)
            event.target.reset();
            setEmptyFields([])
            console.log("new issue added", json)
            const issuesResponse = await fetch('api/issues', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const updatedIssues = await issuesResponse.json()
            if(issuesResponse.ok) {
                dispatch({ type: 'SET_ISSUES', payload: updatedIssues })
            } else {
                console.error('Failed to fetch updated issues', issuesResponse)
            }
            }
            
        } catch (error) {
            setError('Failed to submit the form. Please try again later.');
            console.error('Error submitting form data:', error);
        }
    };
    

    return (
        <form className='issue-form' onSubmit={handleSubmit}>
            <div className='issue-form__form-container'>
            <div className='issue-form__title-container'>
                <div className='issue-form__input-box-name'>
                    <input
                        type='text'
                        name='name'
                        id='issue-form_input-name__id'
                        required
                        className={`${emptyFields.includes('name') ? 'error' : ''} issue-form__input`} 
                        />
                        <span className='issue-form__title-label'>Name</span>
                </div>

                <div className='issue-form__input-box-calendar'>
                    <input className='issue-form__input-calendar' type='date' required name='dueDate' />
                    <span className='issue-form__title-label-calendar'>Due:</span>
                </div>
            </div>
            
            <div className='issue-form__input-box'>
                    <textarea
                    required
                        name='description'
                        className={`${emptyFields.includes('description') ? 'error' : ''} issue-form__textarea`}
                    />
                    <label className='issue-form__title-textarea'>Description</label>
            </div>
            
            
            <div className='issue-form__assignment-select-container'>
            <section className='issue-form__assigned-container'>
            <label className='issue-form__label'>Assign to:</label>
            <div className='issue-form__driver-container'>
                
                <label className='issue-form__label' htmlFor='Mathew'>Mathew
                <input 
                className='issue-form__input-checkbox'
                type='checkbox' 
                name='drivers'
                value="Mathew"/>
                </label>
                

                <label className='issue-form__label' htmlFor='Brock'>Brock
                <input 
                className='issue-form__input-checkbox'
                type='checkbox' 
                name='drivers'
                value="Brock"/>
                </label>


                <label className='issue-form__label' htmlFor='Kate'>Kate
                <input 
                className='issue-form__input-checkbox'
                type='checkbox'
                name='drivers'
                value="Kate"/>
                </label>

                </div>
                </section>

                <section className='issue-form__select-container'>
                
                    <Select
                        name='room'
                        options={parRoomOptions}
                        value={selectedParRooms}
                        onChange={handleParRoomChange}
                        isMulti
                        classNamePrefix='react-select'
                        className='issue-form__select'
                        placeholder='Par Rooms...'
                    />
                
            </section>

                </div>
            
            {/* <div>
                <label>Route</label>
                <input 
                type='checkbox'
                name='route'
                value="1"/>
                <label htmlFor='1'>1</label>

                <input
                type='checkbox'
                name='route'
                value="2"/>
                <label htmlFor='2'>2</label>

                <input 
                type='checkbox'
                name='route'
                value="3"/>
                <label htmlFor='3'>3</label>
            </div> */}
            
            {/* par room is going to need to be pulled from something, i do not
            want to hard code all that */}

            <section className='issue-form__priority-container'>
                <label className='issue-form__label'>Priority Status</label>

                <div className='issue-form__priority-selectors'>

                <label className='issue-form__label' htmlFor='low'>Low
                    <input className='issue-form__input-checkbox' type='checkbox' name='priority' value="low" />
                </label>


                <label className='issue-form__label' htmlFor='medium'>Medium
                    <input className='issue-form__input-checkbox' type='checkbox' name='priority' value="medium" />
                </label>


                <label className='issue-form__label' htmlFor='high'>
                    High
                    <input className='issue-form__input-checkbox' type='checkbox' name='priority' value="high" />
                </label>
                </div>

                
            </section>
            
            {/* <div>
                <label>Group assignment</label>
                <input
                type='checkbox'
                name='groupassignment'
                value='drivers'/>
                <label htmlFor='drivers'>Drivers</label>

                <input
                type='checkbox'
                name='groupassignment'
                value="warehouse"/>
                <label htmlFor='warehouse'>Warehouse</label>
            </div> */}
            
            <div className='issue-form__category-seletor'>
                <label className='issue-form__label-category' htmlFor='category'>What category does this issue fall under</label>
                <select id="category" name="category" className='issue-form__select-category'>
                    <option value="stock">STOCK</option>
                    <option value="frx">FRX</option>
                    <option value="rx">RX</option>
                    <option value="asc">ASC</option>
                </select>
            </div>
        </div>
            <div className='issue-form__button-container'>
                <button className='new-task__button' type='submit'>Submit issue</button>
                <button type='button' onClick={onClose} className='task__close-button__modals'>Close</button>
                {error && <div className='error'>{error}</div>}
            </div>
        </form>
    );
};

export default IssueForm;

//<form>
//TaskTrove


// need to track all assignment, route,