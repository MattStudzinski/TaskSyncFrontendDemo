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
        <div className='card-mini'>
        <div className="card-mini__container">
        <p className='card-mini__category'><strong>Category</strong>{issue.category}</p>
            <h4 className='card-mini__name'>{issue.name}</h4>
            <p className='card-mini__date'><strong>Date</strong>{issue.createdAt}</p>
            <ul className='card-mini__driver-list'>
                {driver.map((driver,index) => (
                    <li className='card-mini__drivers' key={index}>{driver}</li>
                    
                    
                ))}
            </ul>
            <p className='card-mini__priority'><strong>Priority</strong>{issue.priority}</p>
            
            <span className='card-mini__delete' onClick={handleClick}>Delete</span>
        </div>
        </div>
    )
}

export default IssueInfo;