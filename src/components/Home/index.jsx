import React from 'react'
import Logo from '../img/logoMaxTeam.png'
import Inscricao from './inscricao'
import Login from './login'

const Home = () => {

    return (
        <>
            <img src={Logo} alt="Logo" />
            <Login />
            <Inscricao />
        </>
    )
}

export default Home
