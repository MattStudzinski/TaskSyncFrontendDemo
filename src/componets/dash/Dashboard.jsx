import React, { useContext } from 'react';
// import Tickets from '../../issuedetails/Tickets';
import IssueForm from '../forms/IssueForm';
import DashIssues from './DashIssues';
import Analytics from './Analytics';
import Sidebar from '../ui/Sidebar';
import Calendar from './Calendar';
import { IssueFilterContext } from '../context/FilterContext';

const Dashboard = () => {
    const {setFilter} = useContext(IssueFilterContext)

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
                    <div onClick={() => setFilter('date')}>
                        new issues
                    </div>
                    <div onClick={() => setFilter('priority')}>
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