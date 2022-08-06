import React, { useState } from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router'

const Login = () => {
    const [ body, setBody ] = useState({})
    const { push } = useHistory()

    const BASE_URL = 'https://maxteam-mysql.herokuapp.com/'

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
        
        Axios.post(`${BASE_URL}login`, body)
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
            <form id='form-login' onSubmit={fazerLogin}>
                <input type='text' onChange={inputChange} name='username' required />
                <input type='password' onChange={inputChange} name='password' required />
                <button type='submit'>Log-in</button>
                <span id='msg-err-login'></span>
            </form>
        </>
    )
}

export default Login
