import React from 'react';
import { Link } from 'react-router-dom';
import BoxRemove from '../../svgs/SVG/BoxRemove';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul className='side-nav'>
            
                <li className='side-nav__item'>
                    <Link to="/" className='side-nav__link' >
                        <BoxRemove />
                    </Link>
                </li>
            
                <li className='side-nav__item'>
                    <Link to="/" className='side-nav__link' >
                        item 2
                    </Link>
                </li>
            
                <li className='side-nav__item'>
                    <Link to="/" className='side-nav__link' >
                        item 3
                    </Link>
                </li>
            
                <li className='side-nav__item'>
                    <Link to="/" className='side-nav__link' >
                        item 4
                    </Link>
                </li>
            
                <li className='side-nav__item'>
                    <Link to="/" className='side-nav__link' >
                        item 5
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;