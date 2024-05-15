import React from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
import add from "../../svgs/add-circle-svgrepo-com.svg";
import logo from "../../svgs/logo.png";

const Header = () => {
    const {logout} = useLogout()
    const handleClick = () => {
        logout()
    }
    return (
        <header className='header'>
                <Link to="/">
                    <img className='logo' src={logo} alt='Logo' />
                </Link>
                
                    <form action= "#"className='search'>
                        <input type='text' className='search__input' placeholder='Search Issues'/>
                        <button className='search__button'>
                        <img src={add} alt="Add" className="search__svg" />
                        </button>
                    </form>
                    <nav className='user-nav'>

                    <div className='user-nav__logout-box'>
                        <button onClick={handleClick}>Log out</button>
                    </div>

                    <div className='user-nav__login-box'>
                        <Link to="/login"><img src={add} alt="Add" className="user-nav__icon" /></Link>
                    </div>

                    <div className='user-nav__signup-box'>
                        <Link to="/signup"><img src={add} alt="Add" className="user-nav__icon" /></Link>
                    </div>

                    <div className='user-nav__alltickets-box'>
                        <Link to="/alltickets"><img src={add} alt="Add" className="user-nav__icon" /></Link>
                        <span className='user-nav__notification'>3</span>
                    </div>

                    <div className='user-nav__user'>
                        <img src={add} alt='user profile' className='user-nav__user-picture'/>
                        <span className='user-nav__username'>TEC002009740</span>
                    </div>
                </nav>
        </header>
    );
};

export default Header;