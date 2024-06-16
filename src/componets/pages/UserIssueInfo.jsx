import React from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';


const UserIssueInfo = ({issue, handleCompletionChange}) => {
    const {user} = useAuthContext()

    if(!issue) return null
    const { drivers = [], completionStatus = [] } = issue;
    
    return (
        <div>
            <h2>{issue.name}</h2>
            <p>{issue.description}</p>
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
        </div>
    );
};

export default UserIssueInfo;