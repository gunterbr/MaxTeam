import React, { useState } from 'react'
import Axios from 'axios'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import Phone from './phone'

export default function Inscricao() {

    const BASE_URL = 'https://maxteam-mysql.herokuapp.com/'

    function numeroInscricao() {
        const novoNumero = Math.floor(Math.random() * 100 + 1)
        return novoNumero
    }

    function submitForm(e) {
        e.preventDefault()
        document.getElementById('msg-err-new').innerHTML = 'Por favor, aguarde ...'

        const nomeCandidato = document.getElementById('nomeCandidato')
        const contato = document.getElementById('contato')
        const evento = document.getElementById('evento')
        const pagamento = document.getElementById('pagamento')

        const formData = new FormData()
        formData.append('nomeCandidato', nomeCandidato.value)
        formData.append('contato', contato.value)
        formData.append('evento', evento.value)
        formData.append('numeroInscricao', numeroInscricao())

        for(let i = 0; i < pagamento.files.length; i++) {
                formData.append('files', pagamento.files[i])
        }

        Axios.post(`${BASE_URL}inscricao`, formData)
            .then(function (response) {
                document.getElementById('msg-err-new').innerHTML = response.data
                console.log(response.data)
            })
            .catch(function (response) {
                document.getElementById('msg-err-new').innerHTML = response.message
                console.log(response)
            })
    }

  return (
        <div>
            <div className='justify eventTitle'>
                <h1>MaxTeam Extreme Games 2022</h1>
            </div>
            <div className='justify eventTitle'>
                <h6>Por favor, leia as intruções antes de realizar sua inscrição!</h6>
            </div>
            <form id='form' onSubmit={submitForm} encType='multipart/form-data'>
                <span>
                    <i className="bi bi-person"></i>
                    <input type='text' name='nomeCandidato' id='nomeCandidato' placeholder='Nome completo' required />
                </span>
                <span>
                    <i className="bi bi-whatsapp"></i>
                    <input type='tel' name='contato' id='contato' placeholder='(00) 90000-0000 ' maxLength='14' required
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault()
                            }
                        }}
                    />
                    <Phone />
                </span>
                <span>
                    <i className="bi bi-calendar4-event"></i>
                    <select id='evento' name='evento' required >
                        <option value=''>Evento:</option>
                        <option value='MaxTeam Extreme Games 2022'>MaxTeam Extreme Games 2022</option>
                    </select>
                </span>
                <span>
                    <i className="bi bi-file-image"></i>
                    <input type='file' id='pagamento' multiple required />
                </span>
                <Button as='input' type="submit" value='Confirmar'/>
                <span id='msg-err-new'></span>
            
            </form>
        </div>
  )
}