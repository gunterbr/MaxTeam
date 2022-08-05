import React, { useState } from 'react'
import Axios from 'axios'
import Logo from '../img/logoMaxTeam.png'
import { useHistory } from 'react-router'
import Inscricao from './inscricao'

const Home = () => {
    const [ body, setBody ] = useState({})
    const { push } = useHistory()

    const inputChange = ({ target }) => {
        const { name, value } = target
        setBody({
            ...body,
            [name]: value
        })
    }

    const fazerLogin = (e) => {
        e.preventDefault()
        document.getElementById('msg-err-login').innerHTML = 'check'
        Axios.post('https://maxteam-mysql.herokuapp.com/login', body)
            .then(({ data }) => {
                localStorage.setItem('auth', '"yes"')
                localStorage.setItem('user', body.username)
                push('/admin')
            })
            .catch(({ response }) => {
                document.getElementById('msg-err-login').innerHTML = response.data
            })
    }

    return (
        <>
            <img src={Logo} alt="Logo" />
            <form id='form-login' onSubmit={fazerLogin}>
                <input type='text' onChange={inputChange} name='username' required />
                <input type='password' onChange={inputChange} name='password' required />
                <button type='submit'>Log-in</button>
                <span id='msg-err-login'></span>
            </form>
            <Inscricao />
        </>
    )
}

export default Home
