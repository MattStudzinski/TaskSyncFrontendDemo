import React from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';


const UserIssueInfo = ({issue, handleCompletionChange}) => {
    const {user} = useAuthContext()

    if(!issue) return null
    const { drivers = [], completionStatus = [] } = issue;
    
    return (
        <section className='modal-card'>
            <div className='modal-card__title-container'>
            <h2 className='modal-card__title'>{issue.name}<p className='modal-card__priority'>{issue.priority}</p></h2>
            <p className='modal-card__description'>{issue.description}</p>
            </div>
            <p>Issue Due By: {new Date(issue.dueDate).toLocaleDateString()}</p>
            <h4>Assigned To:</h4>
            <ul>
                    {drivers.map((driver) => {
                        const driverStatus = completionStatus.find(status => status.driver.toString() === driver._id) || { isComplete: false };
                        return (
                            <li key={driver._id}>
                                {driver.name} - {driverStatus.isComplete ? 'Completed' : 'Not Completed'}
                                
                            </li>
                        );
                    })}
                </ul>
            <p>{issue.category}</p>
        </section>
    );
};

export default UserIssueInfo;