import React from 'react';
import illistration from '../../svgs/SVG/LoginIllistration.svg'
import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin'
import { Link } from 'react-router-dom';

const MobileLogin = () => {
const [name, setName] = useState('')
const [password, setPassword] = useState('')
const {login, error, isLoading} = useLogin()

const handleSubmit = async (e) => {
e.preventDefault()

await login(name, password)

}

    return (
        <div className='mobileform'>
            <form className='mobileform__form' onSubmit={handleSubmit}>
                <div className='mobileform__input-container'>
                <h3 className='mobileform__title'>Login</h3>
                <p className='mobileform__question'>Don't have an account yet? <Link className='login-form__link' to='/signup'>Sign Up</Link></p>
                
                <div className='mobileform__input-group'>
                <input  className='mobileform__input'
                type='name' 
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder=' '
                />

                <label className='mobileform__label'>Name</label>
                </div>

                <div className='mobileform__input-group'>
                <input 
                className='mobileform__input'
                type='password' 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder=' '
                />
                
                <label className='mobileform__label'>Password</label>
                </div>
                <div className='mobileform__demo-container'>
                    <h3 className='mobileform__demo-title'>Demo Login:</h3>
                    <p className='mobileform__demo-login'>Name: Demo</p>
                    <p className='mobileform__demo-login'>Passowrd: Demo123!</p>
                </div>
                
                <div className='mobileform__button-container'>
                {error && <div className='mobileform__error'>{error}</div>}
                
                <button 
                className='mobileform__button'
                disabled={isLoading}
                >Login</button>
                </div>
                </div>
                
            </form>
        </div>
    );
};

export default MobileLogin;