import React from "react"
import Logo from '../img/logoMaxTeam.png'
import Inscricao from './inscricao/index'
import Login from './login/index'
import Instrutor from './instrutor/index'
import Corpy from "./corpright"
import '../css/index.css'

const Home = () => {

    return (
        <>
        <div id='container'>
            <div id='home'>

                <Login />

                <div className='justify'>
                    <img src={Logo} alt="Logo MaxTeam" />
                </div>
                <Corpy />
                
                <Inscricao />
            
            </div>
            <div id='instrucoes'>
                <Instrutor />
            </div>
        </div>
        </>
    )
}

export default Home
