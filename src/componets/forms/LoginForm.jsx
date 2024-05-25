import React from 'react';
import illistration from '../../svgs/SVG/LoginIllistration.svg'
import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin'
import { Link } from 'react-router-dom';

const LoginForm = () => {
const [name, setName] = useState('')
const [password, setPassword] = useState('')
const {login, error, isLoading} = useLogin()

const handleSubmit = async (e) => {
e.preventDefault()

await login(name, password)

}

    return (
        <div className='login-form'>
            <form className='login-form__form' onSubmit={handleSubmit}>
                <div className='login-form__input-container'>
                <h3 className='login-form__title'>Login</h3>
                <div>Don't have an account yet?<Link to='/signup'> Sign Up</Link></div>
                <label className='login-form__name'>Name:</label>
                <input className='login-form__name-input'
                type='name'
                onChange={(e) => setName(e.target.value)}
                value={name}
                />

                <label className='lofin-form__password'>Password:</label>
                <input className='login-form__password-input'
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                />

                <button 
                className='login-form__button'
                disabled={isLoading}
                >Login</button>
                {error && <div className='error'>{error}</div>}
                </div>
            </form>
            <img className='login-form__illistration' src={illistration} alt='Login Drawing'></img>
        </div>
    );
};

export default LoginForm;