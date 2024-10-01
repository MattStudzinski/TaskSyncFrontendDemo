import React from 'react';

const MobAnalytics = () => {
    return (
        <section className='mobileanalytics'>
            <div className='mobileanalytics__container'>
                <div className='mobileanalytics__link1' to= {'/allissues'}>
                all issues
                </div>
                <div className='mobileanalytics__link2' to= {'/new'}>
                    new
                </div>
                <div className='mobileanalytics__link3' to= {'/priority'}>
                    priority
                </div>
            </div>
        </section>
    );
};

export default MobAnalytics;