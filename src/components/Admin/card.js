import React, { useEffect, useState } from 'react'
import Axios from 'axios'

export default function Card(props) {
  const userNow = localStorage.getItem('user')
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  const [isDeferida, setDeferida] = useState('')

  const BASE_URL = 'https://maxteam-mysql.herokuapp.com/'

  useEffect(() => {
    if (props.deferida === 'no') {
        setIsButtonDisabled(true)
        setDeferida('Inscrição indeferida(rejeitada)')
    }
    else if (props.deferida === 'yes') {
      setIsButtonDisabled(true)
      setDeferida('Inscrição deferida(aceita)')
    }
  }, [props.deferida])

  const handleConfirm = (e) => {
    e.preventDefault()
    
    const formData = ({
      id: e.target.id.value,
      numeroInscricao: e.target.inscricao.value,
      deferida: e.target.deferida.value,
      responsavel: userNow
    })

    Axios.put(`${BASE_URL}confirmar`, formData)
      .then(function (response) {
        console.log(response.data)
        if (response.data.status === 'no') {
          setIsButtonDisabled(true)
          setDeferida('Inscrição indeferida(rejeitada)')
        }
        else if (response.data.status === 'yes') {
          setIsButtonDisabled(true)
          setDeferida('Inscrição deferida(aceita)')
        }
      })
      .catch(function (response) {
        console.log(response)
      })
  }

  return (
    <>
      <div>

        <span>Candidato: {props.candidato}</span>
        <span>Inscrição: {props.inscricao}</span>
        <span>Evento: {props.evento}</span>
        <img default-src='none' src={`${BASE_URL}`+props.folder+props.file} alt={props.originalname}></img>
        <span>{isDeferida}</span>

        <form onSubmit={handleConfirm}>
          <input type='hidden' name='id' value={props.id} />
          <input type='hidden' name='inscricao' value={props.inscricao} />
          <button disabled={isButtonDisabled} type='submit' name='deferida' value='yes'>Deferir</button>
        </form>

        <form onSubmit={handleConfirm}>
          <input type='hidden' name='id' value={props.id} />
          <input type='hidden' name='inscricao' value={props.inscricao} />
          <button disabled={isButtonDisabled} type='submit' name='deferida' value='no'>Indeferir</button>
        </form>

      </div>

    </>
  )
}