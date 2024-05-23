import React from 'react';
import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin'

const LoginForm = () => {
const [name, setName] = useState('')
const [password, setPassword] = useState('')
const {login, error, isLoading} = useLogin()

const handleSubmit = async (e) => {
e.preventDefault()

await login(name, password)

}

    return (
        <div>
            <form className='login' onSubmit={handleSubmit}>
                <h3>Login</h3>

                <label>Name:</label>
                <input
                type='name'
                onChange={(e) => setName(e.target.value)}
                value={name}
                />

                <label>Password:</label>
                <input
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                />

                <button disabled={isLoading}>Login</button>
                {error && <div className='error'>{error}</div>}
            </form>
            
        </div>
    );
};

export default LoginForm;