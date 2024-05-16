import React from 'react';
import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';


const Signup = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(name, password)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
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

                <button disabled= { isLoading } >Sign up</button>
                {error && <div className='error'>{error}</div>}
            </form>
        </div>
    );
};

export default Signup;