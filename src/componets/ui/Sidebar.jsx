import React from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '../../svgs/SVG/DashboardIcon'
import Completed from '../../svgs/SVG/CompletedTasks'
import Priority from '../../svgs/SVG/Priority';
import Stats from '../../svgs/SVG/Stats';
import AddTask from '../../svgs/SVG/AddTask';
import { useAuthContext } from '../../hooks/useAuthContext';
import {useNavigate} from 'react-router-dom'
import AppIcon from '../../svgs/SVG/AppIcon';
import AdminIcon from '../../svgs/SVG/AdminIcon';
import LogoutIcon from '../../svgs/SVG/LogoutIcon';

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
            <div className='sidebar__container'>
                <Link to="/" className='sidebar__app-link'>
                    <AppIcon />
                    <h1 className='sidebar__app-name'>TaskSync</h1>
                </Link>
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
                    <AdminIcon /><span className='side-nav__link-title'>Admin</span>
                </Link>
                </li>
                
            </ul>

            </div>
            <li className='side-nav__item'>
                    <button onClick={handleLogout} className="logout-button">
                        <LogoutIcon /><span className='side-nav__link-title'>Logout</span>
                    </button>
                </li>
        </nav>
    );
};

export default Sidebar;