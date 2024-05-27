import React from 'react';

const Analytics = () => {
    return (
        <section className='analytics'>
            <div className='analytics__open-issues'>
                <div >
                    Open Issues
                </div>
                <p className='analytics__box-text'>hello</p>
            </div>
            <div className='analytics__new-issues'>
                <div>
                    new issues
                </div>
                <p className='analytics__box-text'>hello</p>
            </div>
            <div className='analytics__priority-issues'>
                <div>
                    High Priority
                </div>
                <p className='analytics__box-text'>hello</p>
            </div>
        </section>
    );
};

export default Analytics;