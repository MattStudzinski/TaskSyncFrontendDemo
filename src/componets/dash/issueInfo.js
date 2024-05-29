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

        const response = await fetch(`/api/issues/${issue._id}/drivers/${driverId}/complete`, {
            method: "PATCH",
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({isComplete})
        })
        const json = await response.json()

        if(response.ok) {
            dispatch({type:'UPDATE_ISSUE', payload: json})
        }
    }
    return (
        
        <div className="card-mini__container">
        <p className='card-mini__category'><strong>Category</strong>{issue.category}</p>
            <h4 className='card-mini__name'>{issue.name}</h4>
            <p className='card-mini__date'><strong>Date</strong>{issue.createdAt}</p>
            <ul className='card-mini__driver-list'>
                {drivers.map((driver,index) => {
                    const driverStatus = completionStatus.find(status => status.driver.toString() === driver._id) || { isComplete: false }
                    return (
                    <li className='card-mini__drivers' key={index}>
                        {driver.name}
                        <input
                        type='checkbox'
                        checked={driverStatus.isComplete}
                        onChange={() => handleCompletionChange(driver._id, !driverStatus.isComplete)}></input>
                    </li>
                    )
                })}
            </ul>
            <p className='card-mini__priority'><strong>Priority</strong>{issue.priority}</p>
            
        </div>
        
    )
}

export default IssueInfo;