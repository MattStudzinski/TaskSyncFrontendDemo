import React from 'react';
// import Tickets from '../../issuedetails/Tickets';
import IssueForm from '../forms/IssueForm';
import DashIssues from './DashIssues';
import Analytics from './Analytics';
import Sidebar from '../ui/Sidebar';
import Calendar from './Calendar';

const Dashboard = () => {
    return (
        <div className='content'>
            <Sidebar />
        <main className='dashboard-view'>
            <Analytics />
            <nav className='Dash-nav'>
                <div>
                    title
                </div>
                <div>
                    add task
                </div>
                <nav>
                    <div>
                        new issues
                    </div>
                    <div>
                        issues by priority
                    </div>
                    <div>
                        completed issues
                    </div>
                </nav>
            </nav>

            <DashIssues />
            </main>
            <Calendar />
        </div>
    );
};

export default Dashboard;