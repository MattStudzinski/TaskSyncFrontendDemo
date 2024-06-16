import React from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useIssuesContext } from '../../hooks/useIssuesContext';
import CategoryIcon from '../ui/CategoryIcon';


const IssueInfo = ({issue, onClick}) => {
    const {issues,dispatch} = useIssuesContext()
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
            console.log(updatedIssue,"this is what the patch is grabbing")

            if (!response.ok) {
                console.error('Error updating issue completion:', updatedIssue.error);
                return;
            }

            console.log('Issue completion updated', updatedIssue);


            // Update the state with the updated issue
            dispatch({ type: 'UPDATE_ISSUE', payload: updatedIssue });
            console.log("this is after the update state change", updatedIssue)
        } catch (error) {
            console.error('Failed to update issue completion:', error)
        }
    };

    
    return (
        
        <div className="card-mini__container" >
        <p >
            <CategoryIcon category={issue.category} />
        </p>
        <div className='card-mini__title-container'>
            <h4 className='card-mini__name'>{issue.name}</h4>
            <p>{issue.description}</p>
            </div>
            <p className='card-mini__date'><strong>Due:</strong>{(issue.dueDate)}</p>
            <ul className='card-mini__driver-list'>
                {drivers.map((driver, index) => {
                    const driverStatus = completionStatus.find(status => status.driver.toString() === driver._id) || { isComplete: false };
                    console.log(driverStatus,"this is driver status")
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
            <p className='card-mini__priority'>{issue.priority}</p>
            
        </div>
        
    )
}

export default IssueInfo;