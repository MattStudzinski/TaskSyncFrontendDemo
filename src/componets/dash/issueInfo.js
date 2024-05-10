import React from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useIssuesContext } from '../../hooks/useIssuesContext';
const IssueInfo = ({issue}) => {
    const {dispatch} = useIssuesContext()
    const { driver = [], route = [], room = [] } = issue
    const {user} = useAuthContext()
    const handleClick = async () => {
        if (!user){
            return
        }

        const response = await fetch('/api/issues/' + issue._id, {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if(response.ok) {
            dispatch({type:'DELETE_ISSUE', payload: json})
        }
    }
    return (
        <div className="issue-details">
            <h4>{issue.name}</h4>
            <p><strong>Date</strong>{issue.createdAt}</p>
            <ul>
                {driver.map((driver,index) => (
                    <li key={index}>{driver}</li>
                    
                    
                ))}
            </ul>
            <p><strong>Priority</strong>{issue.priority}</p>
            <p><strong>Category</strong>{issue.category}</p>
            <span onClick={handleClick}>Delete</span>
        </div>
    )
}

export default IssueInfo;