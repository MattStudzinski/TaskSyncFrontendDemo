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
            <section className='grid-test'>
                <div className='row'>
                    <div className='col-1-of-2'>
                        col-1-of-2
                    </div>
                    <div className='col-1-of-2'>
                        col-1-of-2
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;