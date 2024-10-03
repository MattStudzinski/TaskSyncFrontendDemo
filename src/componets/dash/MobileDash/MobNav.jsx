import React from 'react';
import { Link } from 'react-router-dom';
import Priority from '../../../svgs/MobileSVG/MobileAnalytics/Priority';
import New from '../../../svgs/MobileSVG/MobileAnalytics/New';
import Complete from '../../../svgs/MobileSVG/Complete';
import Home from '../../../svgs/MobileSVG/Home';

const MobNav = () => {
    return (
        <section className='mobilenav'>
            <div className='mobilenav__container'>
                <div className='mobilenav__selector'>
                    <Link className='mobilenav__link' to={"/"}><Home fill='black' width='35' height='35' />
                    </Link>
                </div>
                <div className='mobilenav__selector'>
                    <Link className='mobilenav__link' to={"/"}><New fill='black' width='35' height='35' />
                    </Link>
                </div>
                <div className='mobilenav__selector'>
                    <Link className='mobilenav__link' to={"/priority"}><Priority fill= "black" width='35' height='35' />
                    </Link>
                </div>
                <div className='mobilenav__selector'>
                    <Link className='mobilenav__link' to={"complete"}><Complete fill="black" width='35' height='35' /></Link>
                </div>
            </div>
        </section>
    );
};

export default MobNav;