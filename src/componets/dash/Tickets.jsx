import React from 'react';
import IssueDetails from './issueDetails'
import { useIssuesContext } from '../../hooks/useIssuesContext';
import { useEffect } from 'react';


const Tickets = () => {
    const {issues, dispatch} = useIssuesContext()


    useEffect(() => {
        const fetchIssues = async () => {
            const response = await fetch('/api/issues/')
            const json = await response.json()

            if(response.ok) {
                dispatch({type:"SET_ISSUES", payload: json})
                
            }
        }

        fetchIssues()
        
    }, [dispatch])

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