import React, { useState } from 'react'
import Axios from 'axios'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form } from 'react-bootstrap'
import Phone from './phone'

export default function Inscricao() {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const [isAlert, setAlert] = useState('')

    const BASE_URL = 'https://maxteam-mysql.herokuapp.com/'

    function numeroInscricao() {
        const novoNumero = Math.floor(Math.random() * 100 + 1)
        return novoNumero
    }

    function submitForm(e) {
        e.preventDefault()
        setIsButtonDisabled(true)
        document.getElementById('alert').innerHTML = 'Por favor, aguarde ...'

        const nomeCandidato = document.getElementById('nomeCandidato')
        const nascimento = document.getElementById('nascimento')
        const contato = document.getElementById('contato')
        const evento = document.getElementById('evento')
        const camiseta = document.getElementById('camiseta')
        const sexo = document.getElementById('sexo')
        const categoria = document.getElementById('categoria')
        const pagamento = document.getElementById('pagamento')

        const formData = new FormData()
        formData.append('nomeCandidato', nomeCandidato.value)
        formData.append('nascimento', nascimento.value)
        formData.append('contato', contato.value)
        formData.append('evento', evento.value)
        formData.append('camiseta', camiseta.value)
        formData.append('sexo', sexo.value)
        formData.append('categoria', categoria.value)
        formData.append('numeroInscricao', numeroInscricao())

        for(let i = 0; i < pagamento.files.length; i++) {
                formData.append('files', pagamento.files[i])
        }

        Axios.post(`${BASE_URL}inscricao`, formData)
            .then(function (response) {
                setAlert(response.data.status)
                document.getElementById('alert').innerHTML = response.data.msg
                console.log(response.data)
            })
            .catch(function (response) {
                setAlert('err')
                document.getElementById('alert').innerHTML = response.message
                console.log(response)
            })
    }

  return (
        <>
            <div className='justify eventTitle'>
                <h1>Extreme Games 2022<br/>&#127947;&#127997; &#127947;&#65039;&#8205;&#9792;&#65039;</h1>*
            </div>
            <div className='justify eventTitle alert alert-warning'>
                    Inscrições:<br/>10 a 25 de agosto/2022, até às 18h.
            </div>
            <form id='form' onSubmit={submitForm} encType='multipart/form-data'>
                <span className='full'>
                    <i className="bi bi-person"></i>
                    <input type='text' name='nomeCandidato' id='nomeCandidato' placeholder='Nome completo' required />
                </span>
                <label htmlFor='nascimento'>Data de nascimento:</label>
                <span className='full'>
                    <i className="bi bi-clock-history"></i>
                    <input type='date' name='nascimento' id='nascimento' required />
                </span>
                <span className='full'>
                    <i className="bi bi-whatsapp"></i>
                    <Phone />
                </span>
                <span className='full'>
                    <i className="bi bi-calendar4-event"></i>
                    <select id='evento' name='evento' required >
                        <option value=''>Evento:</option>
                        <option value='MaxTeam Extreme Games 2022'>MaxTeam Extreme Games 2022</option>
                    </select>
                </span>
                <span className='resp50 marginR5'>
                    <i className="bi bi-sort-up-alt"></i>
                    <select id='camiseta' name='camiseta' required >
                        <option value=''>Camiseta:</option>
                        <option value='P'>P</option>
                        <option value='M'>M</option>
                        <option value='G'>G</option>
                    </select>
                </span>
                <span className='resp50'>
                    <i className="bi bi-gender-ambiguous"></i>
                    <select id='sexo' name='sexo' required >
                        <option value=''>Sexo:</option>
                        <option value='F'>F</option>
                        <option value='M'>M</option>
                    </select>
                </span>
                <span className='full'>
                    <i className="bi bi-tags-fill"></i>
                    <select id='categoria' name='categoria' required >
                        <option value=''>Categoria:</option>
                        <option value='Iniciante'>Iniciante</option>
                        <option value='Intermediario'>Intermediario</option>
                        <option value='Master'>Master</option>
                        <option value='Elite'>Elite</option>
                    </select>
                </span>
                <label htmlFor='file'>Comprovante de pagamento:</label>
                <span className='full'>
                    <i className="bi bi-file-image"></i>
                        <Form.Control type="file" size="lg" id='pagamento' multiple required />
                </span>
                <span id='alert' className={'full alert alert-'+isAlert}></span>
                <span>
                
                    <Button as='input' type="submit" value='Confirmar' disabled={isButtonDisabled}/>
                </span>
                
            
            </form>
        </>
  )
}
