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

const DashIssueForm = ({ onClose }) => {
    const { dispatch } = useIssuesContext();
    const { user } = useAuthContext();
    const [error, setError] = useState('');
    const [emptyFields, setEmptyFields] = useState([]);
    const [selectedParRooms, setSelectedParRooms] = useState([]);

    const handleParRoomChange = selectedOptions => {
        setSelectedParRooms(selectedOptions);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Selected Par Rooms:', selectedParRooms);
        if (!user) {
            setError('You must be logged in');
            return;
        }

        const formData = new FormData(event.target);
        const routeChannel = formData.getAll("route");
        const driverChannel = formData.getAll("drivers");
        const roomChannel = formData.getAll("room");
        const data = Object.fromEntries(formData.entries());
        data.route = routeChannel;
        data.drivers = driverChannel;
        data.room = roomChannel;

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

            if (!response.ok) {
                setError(json.error);
                setEmptyFields(json.emptyFields || []);
            }

            if (response.ok) {
                setError(null);
                event.target.reset();
                setEmptyFields([]);
                setSelectedParRooms([]);
                console.log("new issue added", json);

                const issueResponse = await fetch('api/issues', {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });
                const updatedIssues = await issueResponse.json();
                if (issueResponse.ok) {
                    dispatch({ type: 'SET_ISSUES', payload: updatedIssues });
                } else {
                    console.error('failed to fetch updated issues', issueResponse);
                }
                if (typeof onClose === 'function') {
                    onClose(); // Close modal after successful submission
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
                <div className='issue-form__input-box'>
                    <input
                        type='text'
                        name='name'
                        id='issue-form_input-name__id'
                        required
                        className={`${emptyFields.includes('name') ? 'error' : ''} issue-form__input`} 
                        />
                        <span className='issue-form__title-label'>Name</span>
                </div>

                <div className='issue-form__input-box'>
                    <input className='issue-form__input' type='date' required name='dueDate' />
                    <span className='issue-form__title-label'>Due-Date</span>
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

            <div className='issue-form__assignment-container'>
                <label className='issue-form__label'>Assignment</label>
                <div className='issue-form__driver-container'>
                    <label className='issue-form__label-secondary' htmlFor={user.name}>{user.name}</label>
                    <input
                        className='issue-form__input-checkbox'
                        type='checkbox'
                        name='drivers'
                        value={user.name}
                        defaultChecked
                    />
                </div>
            </div>

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

            <div className='issue-form__priority-container'>
                <label className='issue-form__label'>Priority Status</label>
                <input className='issue-form__input' type='checkbox' name='priority' value="high" />
                <label className='issue-form__label' htmlFor='high'>High</label>

                <input className='issue-form__input' type='checkbox' name='priority' value="medium" />
                <label className='issue-form__label' htmlFor='medium'>Medium</label>

                <input className='issue-form__input' type='checkbox' name='priority' value="low" />
                <label className='issue-form__label' htmlFor='low'>Low</label>
            </div>

            <div className='issueForm'>
                <label className='issue-form__label' htmlFor='category'>What category does this issue fall under</label>
                <select id="category" name="category">
                    <option value="stock">STOCK</option>
                    <option value="frx">FRX</option>
                    <option value="rx">RX</option>
                    <option value="asc">ASC</option>
                </select>
            </div>
        </div>
            <div className='issue-form__button-container'>
                <button className='new-task__button' type='submit'>Submit issue</button>
                <button type='button' onClick={onClose} className='task__close-button'>Close</button>
                {error && <div className='error'>{error}</div>}
            </div>
        </form>
    );
};

export default DashIssueForm;
