import React from 'react'
import Logo from '../img/logoMaxTeam.png'
import { useHistory } from 'react-router'
import Load from './load'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

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