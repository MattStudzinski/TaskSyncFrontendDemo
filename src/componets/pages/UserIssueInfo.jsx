import React from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';


const UserIssueInfo = ({issue, handleCompletionChange, onClose}) => {
    const {user} = useAuthContext()

    if(!issue) return null
    const { drivers = [], completionStatus = [], room = [] } = issue;
    
    return (
        <section className='modal-card'>
            <section className='modal-card__card-info'>
            <div className='modal-card__title-container'>
                <h2 className='modal-card__title'>{issue.name}
                    <div className='modal-card__subtitle-container'>
                        <p className='modal-card__priority'>{issue.priority}</p>
                        <p className='modal-card__category'>{issue.category}</p>
                    </div>
                </h2>
                
                <p className='modal-card__due-date'>Due: {new Date(issue.dueDate).toLocaleDateString()}</p>
                <p className='modal-card__description'>{issue.description}</p>
            </div>

            <h4 className='modal-card__parroom-title'>Rooms Affected:</h4>
            <ul className='modal-card__par-rooms'>
                {room.map((room, index) => {
                    return (
                        <li className='modal-card__par-li' key={index}>
                            {room}
                        </li>
                    )
                })}
            </ul>
            
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
            
            </section>
            <button type='button' onClick={onClose} className='task__close-button__modals'>Close</button>
        </section>
    );
};

export default UserIssueInfo;