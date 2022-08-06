import React from 'react'
import Axios from 'axios'

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
        const evento = document.getElementById('evento')
        const pagamento = document.getElementById('pagamento')

        const formData = new FormData()
        formData.append('nomeCandidato', nomeCandidato.value)
        formData.append('evento', evento.value)
        formData.append('numeroInscricao', numeroInscricao())

        for(let i =0; i < pagamento.files.length; i++) {
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
            <form id='form' onSubmit={submitForm} encType='multipart/form-data'>
                <input type='text' name='nomeCandidato' id='nomeCandidato' placeholder='Nome completo' required />
                <select id='evento' name='evento' required >
                    <option value=''>selecione...</option>
                    <option value='MaxTeam Extreme Games 2022'>MaxTeam Extreme Games 2022</option>
                </select>
                <input type='file' id='pagamento'  multiple required />
                <button type='submit'>Upload</button>
                <span id='msg-err-new'></span>
            </form>
        </div>
  )
}