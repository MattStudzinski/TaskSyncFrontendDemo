import React from 'react';

const IssueForm = () => {

    const handleSubmit = () => {

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
            <label>
                Assignment
                <input type='radio' name='assignemnt'/>
            </label>
            <label>
                Driver Route
                <input type='radio' name='delivery route'/>
            </label>
            <label>
                Par Room
                <input type='text' name='par room'/>
            </label>
            <label>
                Priority
                <input type='radio' name='priority'/>
            </label>
            <label>
                Group assignment
                <input type='radio' name='group assignment'/>
            </label>
            <label>
                Categories
                <input type='radio' name='categories'/>
            </label>

            
            <button>submit your issue here</button>
        </form>
    );
};

export default IssueForm;

//<form>
