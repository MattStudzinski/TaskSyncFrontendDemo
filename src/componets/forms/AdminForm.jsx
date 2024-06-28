import React from 'react';
import { useState } from 'react';
import { useIssuesContext } from '../../hooks/useIssuesContext';
import { useAuthContext } from '../../hooks/useAuthContext';
import Select from 'react-select'

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

const drivers = ['Mathew', 'Brock', 'Kate']

const AdminForm = () => {

    const {dispatch} = useIssuesContext()
    const {user} = useAuthContext()
    const[error, setError] = useState('')
    const [emptyFields, setEmptyFields] = useState([])
    const [selectedParRooms, setSelectedParRooms] = useState([]);

    const handleParRoomChange = selectedOptions => {
        setSelectedParRooms(selectedOptions);
    };

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log('Selected Par Rooms:', selectedParRooms);
        if(!user){
            setError('You must be logged in')
            return
        }

        const formData = new FormData(event.target)
        const routeChannel = formData.getAll("route")
        const driverChannel = formData.getAll("drivers")
        const roomChannel = formData.getAll("room")
        const data = Object.fromEntries(formData.entries())
        data.route = routeChannel
        data.drivers = driverChannel
        data.room = roomChannel

        
        try {
            const response = await fetch('/api/issues', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }
            });

            

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
            setSelectedParRooms([])
            console.log("new issue added", json)
            
            const issueResponse = await fetch ('api/issues', {
                headers: {
                    'Authorization' : `Bearer ${user.token}`
                }
            })
            const updatedIssues = await issueResponse.json()
            if(issueResponse.ok) {
                dispatch({ type: 'SET_ISSUES', payload: updatedIssues})
            } else {
                console.error('failed to fetch updated issues', issueResponse)
            }
            }
            
        } catch (error) {
            setError('Failed to submit the form. Please try again later.');
            console.error('Error submitting form data:', error);
        }
    };
    
    

    return (
        <form className='issue-form' onSubmit={handleSubmit}>
            <div className='issue-form__title-container'>
                <label className='issue-form__label'>
                    Name:
                    <input  
                    type='text' 
                    name='name'
                    className={`${emptyFields.includes('name') ? 'error' : ''} issue-form__name`}/>
                </label>
                <label className='issue-form__label'>
                Due-Date
                <input className='issue-form__input' type='date' name='dueDate'/>
            </label>
            
            
                
            </div>
            
            <label className='issue-form__label'>
                    Description
                    <textarea 
                    name='description'
                    className={`${emptyFields.includes('description') ? 'error' : ''} issue-form__textarea`}
                    />
                </label>
            
            <div className='issue-form__assignment-container'>
                
            <label className='issue-form__label'>Assignment</label>

                <div className='issue-form__driver-container'>
                <label className='issue-form__label-secondary' htmlFor='Mathew'>Mathew</label>
                <input className='issue-form__input'
                type='checkbox' 
                name='drivers'
                value="Mathew"/>
                
                
                
                <label className='issue-form__label-secondary' htmlFor='Brock'>Brock</label>
                <input className='issue-form__input'
                type='checkbox' 
                name='drivers'
                value="Brock"/>
                
                
                
                <label className='issue-form__label-secondary' htmlFor='Kate'>Kate</label>
                <input className='issue-form__input'
                type='checkbox'
                name='drivers'
                value="Kate"/>
                </div>
                

            </div>
            
            {/* <div>
                <label className='issue-form__label' >Route</label>
                <input className='issue-form__input'
                type='checkbox'
                name='route'
                value="1"/>
                <label className='issue-form__label' htmlFor='1'>1</label>

                <input className='issue-form__input'
                type='checkbox'
                name='route'
                value="2"/>
                <label className='issue-form__label' htmlFor='2'>2</label>

                <input className='issue-form__input'
                type='checkbox'
                name='route'
                value="3"/>
                <label className='issue-form__label' htmlFor='3'>3</label>
            </div> */}
            
            <label className='issue-form__label'>
                    Par Room:
                    <Select
                        name='room'
                        options={parRoomOptions}
                        value={selectedParRooms}
                        onChange={handleParRoomChange}
                        isMulti
                        className='issue-form__select'
                    />
                </label>
            
            <div>
                <label className='issue-form__label'>Priority Status</label>
                <input className='issue-form__input'
                type='checkbox'
                name='priority'
                value="high"/>
                <label className='issue-form__label' htmlFor='high'>High</label>

                <input className='issue-form__input'
                type='checkbox'
                name='priority'
                value="medium"/>
                <label className='issue-form__label' htmlFor='medium'>Medium</label>

                <input className='issue-form__input'
                type='checkbox'
                name='priority'
                value="low"/>
                <label className='issue-form__label' htmlFor='low'>Low</label>
            </div>
            
            {/* <div>
                <label className='issue-form__label'>Group assignment</label>
                <input className='issue-form__input'
                type='checkbox'
                name='groupassignment'
                value='drivers'/>
                <label className='issue-form__label' htmlFor='drivers'>Drivers</label>

                <input className='issue-form__input'
                type='checkbox'
                name='groupassignment'
                value="warehouse"/>
                <label className='issue-form__label' htmlFor='warehouse'>Warehouse</label>
            </div> */}
            
            <div className='issueForm'>
                <label className='issue-form__label' htmlFor='category'>What category does this issue fall under</label>
                <select id="category" name="category">
                    <option value="stock">STOCK</option>
                    <option value="frx">FRX</option>
                    <option value="rx">RX</option>
                    <option value="asc">ASC</option>
                    {/* need to make a file for pulling data */}
                </select>
            </div>

            
            <button type='submit'>Submit issue</button>
            {error && <div className='error'>{error}</div>}
        </form>
    );
};

export default AdminForm;