import React from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '../../svgs/SVG/DashboardIcon'
import Completed from '../../svgs/SVG/CompletedTasks'
import Priority from '../../svgs/SVG/Priority';
import Stats from '../../svgs/SVG/Stats';
import AddTask from '../../svgs/SVG/AddTask';
import { useAuthContext } from '../../hooks/useAuthContext';
import {useNavigate} from 'react-router-dom'

const Sidebar = () => {

    const {dispatch} = useAuthContext()
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('user')
        dispatch({ type: 'LOGOUT' })
        navigate('/login')
    }


    return (
        <nav className='sidebar'>
            <ul className='side-nav'>
            
                <li className='side-nav__item'>
                    <Link to="/" className='side-nav__link' >
                        <Dashboard /> 
                        <span className='side-nav__link-title'>Dashboard</span>
                    </Link>
                </li>
            
                <li className='side-nav__item'>
                    <Link to="/complete" className='side-nav__link' >
                        <Completed /> <span className='side-nav__link-title'>Completed </span>
                    </Link>
                </li>
            
                <li className='side-nav__item'>
                    <Link to="/priority" className='side-nav__link' >
                        <Priority /> <span className='side-nav__link-title'>Priority</span>
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

                <li className='side-nav__item'>
                <Link to="/admin" className='side-nav__link'>
                    <span className='side-nav__link-title'>Admin</span>
                </Link>
                </li>

                <li className='side-nav__item'>
                    <button onClick={handleLogout} className="logout-button">
                        <span className='side-nav__link-title'>Logout</span>
                    </button>
                </li>
                
            </ul>
        </nav>
    );
};

export default Sidebar;