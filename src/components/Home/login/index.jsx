import React, { useState } from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Modal, Button} from 'react-bootstrap'
import '../../css/index.css'

const Login = () => {

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

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
            <div className='justify acesso-restrito'>
                <button className="btn btn-secondary" onClick={handleShow}>
                <i className="bi bi-lock-fill"></i>
            </button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Acesso Restrito</Modal.Title>
                </Modal.Header>

                <form className='login' onSubmit={fazerLogin}>
                    <span>
                        <i className="bi bi-person"></i>
                        <input type='text' onChange={inputChange} name='username' id='username' placeholder="Login" required />
                    </span>
                    <span>
                        <i className="bi bi-lock-fill"></i>
                        <input type='password' onChange={inputChange} name='password' id='senha' placeholder="Senha" required />
                    </span>
                    
                <span id='msg-err-login'></span>

                <Modal.Footer>
                    <Button as='input' type="submit" value='Log-in'/>
                </Modal.Footer>

                </form>
            </Modal>
  
        </>
    )
}

export default Login
