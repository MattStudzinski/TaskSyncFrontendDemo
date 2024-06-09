import React, { useContext } from 'react';
// import Tickets from '../../issuedetails/Tickets';
import DashIssues from './DashIssues';
import Analytics from './Analytics';
import Sidebar from '../ui/Sidebar';
import Calendar from './Calendar';
import { IssueFilterContext } from '../context/FilterContext';
import ModalControllerDash from '../modals/ModalControllerDash';


const Dashboard = () => {
    const {setFilter} = useContext(IssueFilterContext)

    return (
        <div className='content'>
            <Sidebar />
        <main className='dash-view'>
            <div className='dash-view__analytics-container'>
            <Analytics />
            <div className='dash-nav'>
                <div className='dash-nav__header'>
                    <h2 className='dash-nav__title'>
                        My Tasks
                    </h2>
                    <div className='dash-nav__addbutton'>
                        <ModalControllerDash />
                    </div>
                </div>
                <nav className='dash-nav__filters'>
                    <div className='dash-nav__filters-selector'onClick={() => setFilter('date')}>
                        New Assigned
                    </div>
                    <div className='dash-nav__filters-selector' onClick={() => setFilter('priority')}>
                        Priority
                    </div>
                    <div className='dash-nav__filters-selector' onClick={() => setFilter('completed')}>
                        completed
                    </div>
                </nav>
                <DashIssues />
            </div>
            </div>
            <div className='dash-view__calendar-container'>
            <Calendar />
            <div className='somethingelse'>something else here</div>
            </div>
            </main>
            
        </div>
    );
};

export default Dashboard;