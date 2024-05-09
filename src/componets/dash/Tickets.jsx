import React from 'react';
import IssueDetails from './issueDetails'
import { useIssuesContext } from '../../hooks/useIssuesContext';
import { useEffect } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';

const Tickets = () => {
    const {issues, dispatch} = useIssuesContext()
    const {user} = useAuthContext()

    useEffect(() => {
        const fetchIssues = async () => {
            const response = await fetch('/api/issues/', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if(response.ok) {
                dispatch({type:"SET_ISSUES", payload: json})
                
            }
        }

        if(user){
        fetchIssues()
        }
    }, [dispatch, user])

    return (
        <div className='tickets'>
            <div className='issues'>
                {issues && issues.map((issue) => (
                    <IssueDetails key={issue._id} issue={issue} />
                ))}
            </div>
            
        </div>
        
        
    );
}



export default Tickets;