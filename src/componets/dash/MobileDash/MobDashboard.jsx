import React from 'react';
import MobHeader from './MobHeader';
import MobAnalytics from './MobAnalytics';
import MobCalendar from './MobCalendar';

const MobDashboard = () => {
    return (
        <div>
            <MobHeader />
            <MobAnalytics />
            <MobCalendar />
        </div>
    );
};

export default MobDashboard;