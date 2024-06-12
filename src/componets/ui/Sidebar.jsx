import React from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '../../svgs/SVG/DashboardIcon'
import Completed from '../../svgs/SVG/CompletedTasks'
import Priority from '../../svgs/SVG/Priority';
import Stats from '../../svgs/SVG/Stats';
import AddTask from '../../svgs/SVG/AddTask';

const Sidebar = () => {
    return (
        <nav className='sidebar'>
            <ul className='side-nav'>
            
                <li className='side-nav__item'>
                    <Link to="/admin" className='side-nav__link' >
                        <Dashboard /> 
                        <span className='side-nav__link-title'>Dashboard</span>
                    </Link>
                </li>
            
                <li className='side-nav__item'>
                    <Link to="/complete" className='side-nav__link' >
                        <Completed /> <span className='side-nav__link-title'>Completed tasks </span>
                    </Link>
                </li>
            
                <li className='side-nav__item'>
                    <Link to="/priority" className='side-nav__link' >
                        <Priority /> <span className='side-nav__link-title'>Priority tasks</span>
                    </Link>
                </li>
            
                <li className='side-nav__item'>
                    <Link to="/" className='side-nav__link' >
                        <Stats /> <span className='side-nav__link-title'>Analytics</span>
                    </Link>
                </li>
            
                <li className='side-nav__item'>
                    <Link to="/" className='side-nav__link' >
                        <AddTask/> <span className='side-nav__link-title'>New Task</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;