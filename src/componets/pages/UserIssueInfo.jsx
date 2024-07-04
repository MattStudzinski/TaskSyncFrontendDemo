import React from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';


const UserIssueInfo = ({issue, handleCompletionChange, onClose}) => {
    const {user} = useAuthContext()

    if(!issue) return null
    const { drivers = [], completionStatus = [] } = issue;
    
    return (
        <section className='modal-card'>
            <div className='modal-card__title-container'>
                <h2 className='modal-card__title'>{issue.name}<p className='modal-card__priority'>{issue.priority}</p></h2>
                <p className='modal-card__description'>{issue.description}</p>
            </div>
            <p className='modal-card__due-date'>Issue Due By: {new Date(issue.dueDate).toLocaleDateString()}</p>
            <h4 className='modal-card__assigned-title'>Assigned To:</h4>
            <ul className='modal-card__driver-list'>
                    {drivers.map((driver) => {
                        const driverStatus = completionStatus.find(status => status.driver.toString() === driver._id) || { isComplete: false };
                        return (
                            <li className='modal-card__driver-item' key={driver._id}>
                                {driver.name} - {driverStatus.isComplete ? 'Completed' : 'Not Completed'}
                                
                            </li>
                        );
                    })}
                </ul>
            <p className='modal-card__category'>{issue.category}</p>
            <button type='button' onClick={onClose} className='task__close-button__modals'>Close</button>
        </section>
    );
};

export default UserIssueInfo;