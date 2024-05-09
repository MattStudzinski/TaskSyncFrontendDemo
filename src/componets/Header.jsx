import React from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

const Header = () => {
    const {logout} = useLogout()
    const handleClick = () => {
        logout()
    }
    return (
        <header>
            <div className='container'>
                <Link to="/">
                    <h1>Task Trove</h1>
                </Link>
                <nav>
                    <div>
                        <button onClick={handleClick}>Log out</button>
                    </div>
                    <div>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                        <Link to="/details">Details</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;