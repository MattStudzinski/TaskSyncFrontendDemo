import React, { useEffect } from 'react';
import AdminPageIssues from './AdminPageIssues';
import { useIssuesContext } from '../../hooks/useIssuesContext';
import { useAuthContext } from '../../hooks/useAuthContext'; 
import fetchIssues from '../../fetchIssues';

const AdminDash = () => {
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
                    <AdminPageIssues key={issue._id} issue={issue} />
                ))}
            </div>
            
        </div>
        
        
    );
}



export default AdminDash;