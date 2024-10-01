import React from 'react';

const MobAnalytics = () => {
    return (
        <section className='mobileanalytics'>
            <div className='mobileanalytics__container'>
                <div className='mobileanalytics__link' to= {'/allissues'}>
                all issues
                </div>
                <div className='mobileanalytics__link' to= {'/new'}>
                    new
                </div>
                <div className='mobileanalytics__link' to= {'/priority'}>
                    priority
                </div>
            </div>
        </section>
    );
};

export default MobAnalytics;