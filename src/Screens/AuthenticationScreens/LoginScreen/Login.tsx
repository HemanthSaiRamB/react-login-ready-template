import React from 'react'
import ButtonElement from '../../../Components/ButtonElement/ButtonElement'
import './Login.css'
import useLogin from './loginHook'
function Login() {
    const { username, password, handleChange, handleLogin } = useLogin()
    return (
        <div className='container'>
            <div className='inputElement'>
                <label>Username</label>
                <input type='text' value={username} onChange={handleChange} name='username' />
            </div>
            <div className='inputElement'>
                <label>Password</label>
                <input type='password' value={password} onChange={handleChange} name='password' />
            </div>
            <ButtonElement onClick={handleLogin} type='button' label='Login' />
        </div>)
}
export default Login