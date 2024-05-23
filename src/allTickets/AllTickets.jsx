import React, { useEffect } from 'react';
import IssueDetails from './issueDetails';
import { useIssuesContext } from '../hooks/useIssuesContext';
import { useAuthContext } from '../hooks/useAuthContext'; 
import fetchIssues from '../fetch/fetchIssues';

const AllTickets = () => {
    const { issues, dispatch } = useIssuesContext();
    const { user } = useAuthContext();

    useEffect(() => {
        if (user) {
            fetchIssues(dispatch, user.token); 
        }
    }, [dispatch, user]);


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



export default AllTickets;