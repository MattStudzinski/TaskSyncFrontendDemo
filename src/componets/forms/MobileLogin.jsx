import React from 'react';
import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin'
import { Link } from 'react-router-dom';
import LoginPassword from '../../svgs/SVG/LoginPassword';
import LoginUsername from '../../svgs/SVG/LoginUsername';
import WavingRobot from '../../png/WavingRobot.png'

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
            <img src={WavingRobot} alt='greeting' className='mobileform__img' />
            <form className='mobileform__form' onSubmit={handleSubmit}>
                <div className='mobileform__input-container'>
                <h3 className='mobileform__title'>Welcome Back</h3>
                <p className='mobileform__question'>Login to your account</p>
                
                <div className='mobileform__input-group'>
                <input  className='mobileform__input'
                type='name' 
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder=' '
                />
                <label className='mobileform__label'>Name</label>
                <div className='mobileform__icon'><LoginUsername /></div>
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
                <div className='mobileform__icon'><LoginPassword /></div>
                </div>
                
                    <h3 className='mobileform__demo-title'>Demo Login:</h3>
                    <div className='mobileform__demo-container'>
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
                <p className='mobileform__newAccount'>Don't have an account? <Link className='login-form__link' to='/signup'>Sign up</Link></p>
                </div>
                
            </form>
        </div>
    );
};

export default MobileLogin;