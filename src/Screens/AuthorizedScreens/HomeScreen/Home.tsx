import React from 'react'
import { useLoginSession } from '../../../ContextAPI/LoginSessionContext'
import { Outlet } from 'react-router-dom'
import './Home.css'
import ButtonElement from '../../../Components/ButtonElement/ButtonElement'
function Home() {
    const { logout } = useLoginSession()

    return (
        <>
            <div className='container'>
                <p>In Home Component</p>
                <ButtonElement onClick={logout} type='button' label='Logout' />
            </div>

            <Outlet />
        </>)
}
export default Home