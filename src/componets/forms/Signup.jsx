import React from 'react';
import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';
import { Link } from 'react-router-dom';
import illistration from '../../svgs/SVG/signup.svg'


const Signup = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(name, password)
    }

    return (
        <div className='form'>
            <form className='form__form' onSubmit={handleSubmit}>
                <div className='form__input-container'>
                    <h3 className='form__title'>Signup</h3>
                        <p className='form__question'>Already have an account? <Link className='login-form__link' to='/login'>Login</Link></p>
                            <div className='form__input-group'>
                                <input className='form__input'
                                type='name'
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                placeholder=' '
                                />
                                <label className='form__label'>Name</label>
                            </div>

                            <div className='form__input-group'>
                                <input className='form__input'
                                type='password'
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                placeholder=' '
                                />
                                <label className='form__label'>Password</label>
                            </div>

                            <div className='form__button-container'>
                                {error && <div className='form__error'>{error}</div>}
                                <button 
                                className='form__button' 
                                disabled= { isLoading } 
                                >Sign up</button>
                            </div>
                            
                </div>
            </form>
            <img className='form__illistration' src={illistration} alt='Signup drawing'/>
        </div>
    );
};

export default Signup;