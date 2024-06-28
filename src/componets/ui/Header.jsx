import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';

import Logo from '../../svgs/SVG/Logo';

import HeaderIcon from '../../svgs/HeaderIcon'

const Header = () => {
    const {logout} = useLogout()
    const [dropdownOpen, setDropdownOpen] = useState(false)
    
    const handleClick = () => {
        logout()
    }

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen)
    }
    return (
        <header className='header'>
        <Link to="/" className='user-nav__logo-box'>
            <Logo />
        </Link>

        

        <nav className='user-nav'>
            <div className='user-nav__box' onClick={toggleDropdown}>
                <HeaderIcon alt='user profile' className='user-nav__user-picture' />
                <span className='user-nav__username'>TEC002009740</span>
            

            {dropdownOpen && (
                <div className='dropdown-menu'>
                    <button className='dropdown-menu__item' onClick={handleClick}>
                        Log out
                    </button>
                    <Link to="/admin" className='dropdown-menu__item'>
                        Admin Page
                    </Link>
                </div>
            )}
            </div>
        </nav>
    </header>
);
};

export default Header;