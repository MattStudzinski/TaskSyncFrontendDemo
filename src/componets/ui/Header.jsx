import React from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';

import logo from "../../svgs/logo.png";
import HeaderIcon from '../../svgs/HeaderIcon'

const Header = () => {
    const {logout} = useLogout()
    const handleClick = () => {
        logout()
    }
    return (
        <header className='header'>
                <Link to="/dashboard">
                    <img className='logo' src={logo} alt='Logo' />
                </Link>
                
                    <form action= "#"className='search'>
                        <input type='text' className='search__input' placeholder='Search Issues'/>
                        <button className='search__button'>
                        <HeaderIcon className="search__icon" />
                        </button>
                    </form>
                <nav className='user-nav'>

                    
                    <button className='user-nav__box' onClick={handleClick}>Log out</button>
                    
                    <Link to="/login" className='user-nav__box'>
                        <HeaderIcon  />
                    </Link>

                    <Link to="/signup" className='user-nav__box'>
                    <HeaderIcon  />
                    </Link>

                    <Link to="/alltickets" className='user-nav__box'>
                        <HeaderIcon  />   
                        <span className='user-nav__notification'>3</span>
                    </Link>

                    <div className='user-nav__box'>
                        <HeaderIcon alt='user profile' className='user-nav__user-picture'/>
                        <span className='user-nav__username'>TEC002009740</span>
                    </div>
                </nav>
        </header>
    );
};

export default Header;