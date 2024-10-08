import React from 'react';
import CategoryIcon from '../ui/CategoryIcon';
import PriorityIcons from '../ui/PriorityIcons';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useIssuesContext } from '../../hooks/useIssuesContext';
const AdminPageIssues = ({issue, onClick}) => {
    const {dispatch} = useIssuesContext()
    const {  room = [] } = issue
    const {user} = useAuthContext()
    
    const handleClick = async (e) => {
        if (!user){
            return
        }
        e.stopPropagation()
        const response = await fetch('https://tasksyncbackend-01eb2bc18fab.herokuapp.com/api/issues/' + issue._id, {
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

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString()
    }

    return (
        
            <div className="card-mini__container" onClick={() => onClick(issue)}>

            <div className='card-mini__category-container'>
                <p className='card-mini__category'><CategoryIcon category={issue.category} /></p>
            </div>
            <div className='card-mini__title-container'>
                <h4 className='card-mini__name'>{issue.name}</h4>
                <p className='card-mini__description'>{issue.description.length > 20
                    ? `${issue.description.slice(0,70)}...`
                    : issue.description
                }</p>
            </div>


            <p className='card-mini__date'><strong>Due:</strong>{formatDate(issue.dueDate)}</p>
            

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
            
            <ul className='card-mini__drivers-admin-ul'>
                {issue.drivers.map(driver => 
                
                <li className='card-mini__drivers-admin-li' key = {driver._id}>
                    {driver.name} : {
                        issue.completionStatus.find(status => status.driver._id === driver._id)?.isComplete
                            ? 'Complete'
                            : "incomplete"
                    }
                </li>
                )}
            </ul>
            <span className='card-mini__delete' onClick={handleClick}>Finalize Completion</span>
            <PriorityIcons priority={issue.priority} />
            
        </div>
        
    )
}

export default AdminPageIssues;