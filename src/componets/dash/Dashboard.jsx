import React from 'react';
// import Tickets from '../../issuedetails/Tickets';
import IssueForm from '../forms/IssueForm';
import DashIssues from './DashIssues';
import Tickets from '../../issuedetails/Tickets';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <h2>Home</h2>
            <DashIssues />
            <Tickets />
            <IssueForm />
        </div>
    );
};

export default Dashboard;