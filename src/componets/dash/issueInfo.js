import React from 'react';
import { useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useIssuesContext } from '../../hooks/useIssuesContext';
import CategoryIcon from '../ui/CategoryIcon';
import PriorityIcons from '../ui/PriorityIcons';



const IssueInfo = ({issue, onClick}) => {
    const {issues,dispatch} = useIssuesContext()
    const { drivers = [], completionStatus = [], room = [] } = issue
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

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString()
    }

    
    
    return (
        <>
        <div className="card-mini__container" onClick={() => onClick(issue)}>
            <p >
                <CategoryIcon category={issue.category} className='primary'/>
            </p>
        <div className='card-mini__title-container'>
            <h4 className='card-mini__name'>{issue.name}</h4>
            <p className='card-mini__description'>{issue.description.length > 20
            ? `${issue.description.slice(0,70)}...`
            : issue.description
            }</p>
            </div>
            <p className='card-mini__date'><strong>Due: </strong>{formatDate(issue.dueDate)}</p>
            <ul className='card-mini__driver-list'>
                {drivers.map((driver, index) => {
                    const driverStatus = completionStatus.find(status => status.driver.toString() === driver._id) || { isComplete: false };
                    return (
                        <li className='card-mini__drivers' key={index}>
                            
                            {driver.name === user.name && (
                                <input className='card-mini__completion-input'
                                    type='checkbox'
                                    checked={driverStatus.isComplete}
                                    onClick={(e) => e.stopPropagation()}
                                    onChange={() =>  handleCompletionChange(driver._id, !driverStatus.isComplete)}
                                />
                            )}
                        </li>
                    );
                })}
            </ul>
            <ul className='card-mini__parroom-list'>
            {room.slice(0, 3).map((room, index) => {
                return (
                    <li key={index}>
                        {room}
                    </li>
                )
            })}
            {room.length > 3 && (
                <li className='card-mini__ellipsis'>...</li>
            )}
            </ul>

            
            <PriorityIcons priority={issue.priority} />
        </div>
        
        </>
    )
}

export default IssueInfo;