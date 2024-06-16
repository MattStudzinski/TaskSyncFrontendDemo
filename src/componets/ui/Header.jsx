import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';

import logo from "../../svgs/logo.png";
import logo2 from '../../svgs/logo2.png'
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
            <img className='logo' src={logo2} alt='Logo' />
        </Link>

        <form action="#" className='search'>
            <input type='text' className='search__input' placeholder='Search Issues' />
            <button className='search__button'>
                <HeaderIcon className="search__icon" />
            </button>
        </form>

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