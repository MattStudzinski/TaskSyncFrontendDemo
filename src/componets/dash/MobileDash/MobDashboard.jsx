import React from 'react';
import MobHeader from './MobHeader';
import MobAnalytics from './MobAnalytics';
import MobCalendar from './MobCalendar';
import MobIssues from './MobIssues';
import MobNav from './MobNav';

const MobDashboard = () => {
    return (
        <div>
            <MobHeader />
            <MobAnalytics />
            <MobCalendar />
            <MobIssues />
            <MobNav />
        </div>
    );
};

export default MobDashboard;