import React from 'react';

const IssueForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)
        const routeChannel = formData.getAll("route")
        const driverChannel = formData.getAll("driver")
        const data = Object.fromEntries(formData.entries())
        data.route = routeChannel
        data.driver = driverChannel
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit}>
            
            <label>
                Name:
                <input type='text' name='name'/>
            </label>

            <label>
                Date
                <input type='date' name='date'/>
            </label>
            
            <label>
                Description
                <input type='text' name='description'/>
            </label>
            
            <div>
                
            <label>Assignment</label>
                <input 
                type='checkbox' 
                name='driver'
                value="Mathew"/>
                <label htmlFor='Mathew'>Mathew</label>
            
                <input 
                type='checkbox' 
                name='driver'
                value="Brock"/>
                <label htmlFor='Brock'>Brock</label>
            
                <input 
                type='checkbox'
                name='driver'
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
                <select name='par room' multiple>
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
                name='group assignment'
                value='drivers'/>
                <label htmlFor='drivers'>Drivers</label>

                <input
                type='checkbox'
                name='group assignment'
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



            
        </form>
    );
};

export default IssueForm;

//<form>
//TaskTrove


// need to track all assignment, route,