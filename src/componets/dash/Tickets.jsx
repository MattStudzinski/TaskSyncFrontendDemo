import React, { useEffect } from 'react';
import IssueDetails from './issueDetails';
import { useIssuesContext } from '../../hooks/useIssuesContext';
import { useAuthContext } from '../../hooks/useAuthContext'; // Import useAuthContext
import fetchIssues from '../../fetchIssues';

const Tickets = () => {
    const { issues, dispatch } = useIssuesContext();
    const { user } = useAuthContext();

    useEffect(() => {
        if (user) {
            fetchIssues(dispatch, user.token); // Pass user.token directly
        }
    }, [dispatch, user]);

    // Your component code...

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