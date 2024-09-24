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
        <div className='form'>
            <form className='form__form' onSubmit={handleSubmit}>
                <div className='form__input-container'>
                <h3 className='form__title'>Login</h3>
                <p className='form__question'>Don't have an account yet? <Link className='login-form__link' to='/signup'>Sign Up</Link></p>
                
                <div className='form__input-group'>
                <input  className='form__input'
                type='name' 
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder=' '
                />

                <label className='form__label'>Name</label>
                </div>

                <div className='form__input-group'>
                <input 
                className='form__input'
                type='password' 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder=' '
                />
                
                <label className='form__label'>Password</label>
                </div>
                <div className='form__demo-container'>
                    <h3 className='form__demo-title'>Demo Login:</h3>
                    <p className='form__demo-login'>Name: Demo</p>
                    <p className='form__demo-login'>Passowrd: Demo123!</p>
                </div>
                
                <div className='form__button-container'>
                {error && <div className='form__error'>{error}</div>}
                
                <button 
                className='form__button'
                disabled={isLoading}
                >Login</button>
                </div>
                </div>
                
            </form>
            <img className='form__illistration' src={illistration} alt='Login Drawing'></img>
        </div>
    );
};

export default LoginForm;