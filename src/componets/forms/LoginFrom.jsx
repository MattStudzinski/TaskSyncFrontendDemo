import React from 'react';

const LoginFrom = () => {
    return (
        <div>
            <form>
                <label>
                    Username:
                    <input 
                    type='text' 
                    name='username'/>
                </label>

                <label>
                    Password:
                    <input 
                    type='text' 
                    name='password' />
                </label>
            </form>
        </div>
    );
};

export default LoginFrom;