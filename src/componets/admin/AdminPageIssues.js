import React from 'react';
import CategoryIcon from '../ui/CategoryIcon';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useIssuesContext } from '../../hooks/useIssuesContext';
const AdminPageIssues = ({issue}) => {
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
        <p className='card-mini__category'><CategoryIcon category={issue.category} /></p>
            <h4 className='card-mini__name'>{issue.name}</h4>
            <p className='card-mini__date'><strong>Date</strong>{issue.createdAt}</p>
            <ul>
                {issue.drivers.map(driver => 
                
                <li key = {driver._id}>
                    {driver.name} : {
                        issue.completionStatus.find(status => status.driver._id === driver._id)?.isComplete
                            ? 'Complete'
                            : "incomplete"
                    }
                </li>
                )}
            </ul>
            <p className='card-mini__priority'><strong>Priority</strong>{issue.priority}</p>
            
            <span className='card-mini__delete' onClick={handleClick}>Delete</span>
        </div>
        </div>
    )
}

export default AdminPageIssues;