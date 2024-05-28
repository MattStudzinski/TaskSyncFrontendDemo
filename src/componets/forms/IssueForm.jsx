import React from 'react';
import { useState } from 'react';
import { useIssuesContext } from '../../hooks/useIssuesContext';
import { useAuthContext } from '../../hooks/useAuthContext';

const IssueForm = () => {

    const {dispatch} = useIssuesContext()
    const {user} = useAuthContext()
    const[error, setError] = useState('')
    const [emptyFields, setEmptyFields] = useState([])

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
            const response = await fetch('/api/issues', {
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
            dispatch({type:"CREATE_ISSUE", payload: json})
            }// the payload is what i just created
            
        } catch (error) {
            setError('Failed to submit the form. Please try again later.');
            console.error('Error submitting form data:', error);
        }
    };
    

    return (
        <form onSubmit={handleSubmit}>
            
            <label>
                Name:
                <input 
                type='text' 
                name='name'
                className={emptyFields.includes('name') ? 'error' : ''}/>
            </label>

            <label>
                Due-Date
                <input type='date' name='dueDate'/>
            </label>
            
            <label>
                Description
                <input 
                type='text' 
                name='description'
                className={emptyFields.includes('description') ? 'error' : ''}
                />
            </label>
            
            <div>
                
            <label>Assignment</label>
                <input 
                type='checkbox' 
                name='drivers'
                value="Mathew"/>
                <label htmlFor='Mathew'>Mathew</label>
            
                <input 
                type='checkbox' 
                name='drivers'
                value="Brock"/>
                <label htmlFor='Brock'>Brock</label>
            
                <input 
                type='checkbox'
                name='drivers'
                value="Kate"/>
                <label htmlFor='Kate'>Kate</label>

            </div>
            
            <div>
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
            </div>
            
            {/* par room is going to need to be pulled from something, i do not
            want to hard code all that */}
            <label>
                Par Room
                <select name='room' multiple>
                {/* will want to map through a list of par rooms */}
                <option value="DRMP1" >DRMP1</option>
                <option value="PN-P1" >PN-P1</option>
                </select>
            </label>
            
            <div>
                <label>Priority Status</label>
                <input
                type='checkbox'
                name='priority'
                value="high"/>
                <label htmlFor='high'>High</label>

                <input
                type='checkbox'
                name='priority'
                value="medium"/>
                <label htmlFor='medium'>Medium</label>

                <input
                type='checkbox'
                name='priority'
                value="low"/>
                <label htmlFor='low'>Low</label>
            </div>
            
            <div>
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
            </div>
            
            <div className='issueForm'>
                <label htmlFor='category'>What category does this issue fall under</label>
                <select id="category" name="category">
                    <option value="stock">STOCK</option>
                    <option value="frx">FRX</option>
                    {/* need to make a file for pulling data */}
                </select>
            </div>

            
            <button type='submit'>Submit issue</button>
            {error && <div className='error'>{error}</div>}
        </form>
    );
};

export default IssueForm;

//<form>
//TaskTrove


// need to track all assignment, route,