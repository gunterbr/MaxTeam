import React from 'react'
import Logo from '../img/logoMaxTeam.png'
import { useHistory } from 'react-router'

const Admin = () => {
    const history = useHistory()
    
    return (
        <>
            <img src={Logo} alt="Logo" />
            <button onClick={() => {
                localStorage.clear()
                history.push('/home')
            }}>Log out</button>
        </>
    )
}

export default Admin