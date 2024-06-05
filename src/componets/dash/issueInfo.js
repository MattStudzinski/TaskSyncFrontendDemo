import React from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useIssuesContext } from '../../hooks/useIssuesContext';
const IssueInfo = ({issue}) => {
    const {dispatch} = useIssuesContext()
    const { drivers = [], completionStatus = [] } = issue
    const {user} = useAuthContext()

    const handleCompletionChange = async (driverId, isComplete) => {
        if (!user){
            return
        }
    try {
        const response = await fetch(`/api/issues/${issue._id}/drivers/${driverId}/complete`, {
            method: "PATCH",
            body: JSON.stringify({isComplete}),
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': 'application/json'
            },
        })

            const updatedIssue = await response.json();

            if (!response.ok) {
                console.error('Error updating issue completion:', updatedIssue.error);
                return;
            }

            console.log('Issue completion updated', updatedIssue);

            // Update the state with the updated issue
            dispatch({ type: 'UPDATE_ISSUE', payload: updatedIssue });
        } catch (error) {
            console.error('Failed to update issue completion:', error);
        }
    };
    return (
        
        <div className="card-mini__container">
        <p className='card-mini__category'><strong>Category</strong>{issue.category}</p>
            <h4 className='card-mini__name'>{issue.name}</h4>
            <p className='card-mini__date'><strong>Date</strong>{issue.createdAt}</p>
            <ul className='card-mini__driver-list'>
                {drivers.map((driver, index) => {
                    const driverStatus = completionStatus.find(status => status.driver.toString() === driver._id) || { isComplete: false };
                    return (
                        <li className='card-mini__drivers' key={index}>
                            {driver.name}
                            {driver.name === user.name && (
                                <input
                                    type='checkbox'
                                    checked={driverStatus.isComplete}
                                    onChange={() => handleCompletionChange(driver._id, !driverStatus.isComplete)}
                                />
                            )}
                        </li>
                    );
                })}
            </ul>
            <p className='card-mini__priority'><strong>Priority</strong>{issue.priority}</p>
            
        </div>
        
    )
}

export default IssueInfo;