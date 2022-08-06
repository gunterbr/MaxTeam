import React from 'react'
import Logo from '../img/logoMaxTeam.png'
import { useHistory } from 'react-router'
import Load from './load'

const Admin = () => {
    const history = useHistory()
    
    return (
        <>
            <img src={Logo} alt="Logo" />
            <button onClick={() => {
                localStorage.clear()
                history.push('/home')
            }}>Log out</button>

            <Load />
        </>
    )
}

export default Admin