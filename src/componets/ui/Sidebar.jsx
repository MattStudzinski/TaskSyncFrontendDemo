import React from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '../../svgs/SVG/DashboardIcon'
import Completed from '../../svgs/SVG/CompletedTasks'
import Priority from '../../svgs/SVG/Priority';
import Stats from '../../svgs/SVG/Stats';
import AddTask from '../../svgs/SVG/AddTask';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul className='side-nav'>
            
                <li className='side-nav__item'>
                    <Link to="/" className='side-nav__link' >
                        <Dashboard /> 
                        <p className='side-nav__link-title'>Dashboard</p>
                    </Link>
                </li>
            
                <li className='side-nav__item'>
                    <Link to="/" className='side-nav__link' >
                        <Completed /> <p className='side-nav__link-title'>Completed </p>
                    </Link>
                </li>
            
                <li className='side-nav__item'>
                    <Link to="/" className='side-nav__link' >
                        <Priority /> <p className='side-nav__link-title'>Priority Tasks</p>
                    </Link>
                </li>
            
                <li className='side-nav__item'>
                    <Link to="/" className='side-nav__link' >
                        <Stats /> <p className='side-nav__link-title'>Analytics</p>
                    </Link>
                </li>
            
                <li className='side-nav__item'>
                    <Link to="/" className='side-nav__link' >
                        <AddTask/> <p className='side-nav__link-title'>New Task</p>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;