import React from 'react';
// import Tickets from '../../issuedetails/Tickets';
import IssueForm from '../forms/IssueForm';
import DashIssues from './DashIssues';
import Analytics from './Analytics';


const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Analytics />
            <DashIssues />
            <IssueForm />
        </div>
    );
};

export default Dashboard;