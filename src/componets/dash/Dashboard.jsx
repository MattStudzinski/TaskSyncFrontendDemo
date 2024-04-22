import React from 'react';
import Tickets from './Tickets';
import IssueForm from '../forms/IssueForm';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <h2>Home</h2>
            <Tickets />
            <IssueForm />
        </div>
    );
};

export default Dashboard;