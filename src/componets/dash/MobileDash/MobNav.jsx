import React from 'react';

const MobNav = () => {
    return (
        <section className='mobilenav'>
            <div className='mobilenav__container'>
                <div className='mobilenav__selector'>
                    <div className='mobilenav__link'>Home</div>
                </div>
                <div className='mobilenav__selector'>
                    <div className='mobilenav__link'>New</div>
                </div>
                <div className='mobilenav__selector'>
                    <div className='mobilenav__link'>Priority</div>
                </div>
                <div className='mobilenav__selector'>
                    <div className='mobilenav__link'>Complete</div>
                </div>
            </div>
        </section>
    );
};

export default MobNav;