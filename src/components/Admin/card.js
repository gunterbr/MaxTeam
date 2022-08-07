import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal } from 'react-bootstrap'
import '../css/index.css'

export default function Card(props) {
  const userNow = localStorage.getItem('user')
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  const [isClassCheck, setClassCheck] = useState('')

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const BASE_URL = 'https://maxteam-mysql.herokuapp.com/'

  useEffect(() => {
    if (props.deferida === 'no') {
        setIsButtonDisabled(true)
        setClassCheck('danger')
    }
    else if (props.deferida === 'yes') {
      setIsButtonDisabled(true)
      setClassCheck('success')
    }
  }, [props.deferida])

  const handleConfirm = (e) => {
    e.preventDefault()

    document.getElementById(e.target.id.value).innerHTML = 'Aguarde...'
    
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
          setClassCheck('danger')
          document.getElementById(response.data.id).innerHTML = ''
        }
        else if (response.data.status === 'yes') {
          setIsButtonDisabled(true)
          setClassCheck('success')
          document.getElementById(response.data.id).innerHTML = ''
        }
      })
      .catch(function (response) {
        console.log(response)
      })
  }

  return (
    <>
      <div className={'alert alert-'+isClassCheck}>

        <span>Candidato: <strong>{props.candidato}</strong></span>
        <br/>
        <span>Contato: <strong>{props.contato}</strong></span>
        <br/>
        <span>Inscrição: <strong>{props.inscricao}</strong></span>
        <br/>
        <span>Evento: <strong>{props.evento}</strong></span>

        <div className='thisImage'>
          <span>
            Comprovante de pagamento:
            <button className="btn btn-default" onClick={handleShow}>
            <i className="bi bi-eye-fill"></i>
            </button>
          </span>
          
        </div>

        <Modal show={show} onHide={handleClose}>
          <img default-src='none' src={`${BASE_URL}`+props.file} alt={props.originalname} className="img-thumbnail" width="304" height="236"></img>
        </Modal>

        <span id={props.id} className='alert alert-info'></span>

        <form onSubmit={handleConfirm}>
          <input type='hidden' name='id' value={props.id} />
          <input type='hidden' name='inscricao' value={props.inscricao} />
          <button className='btn btn-success' disabled={isButtonDisabled} type='submit' name='deferida' value='yes'>Deferir</button>
        </form>

        <form onSubmit={handleConfirm}>
          <input type='hidden' name='id' value={props.id} />
          <input type='hidden' name='inscricao' value={props.inscricao} />
          <button className='btn btn-danger' disabled={isButtonDisabled} type='submit' name='deferida' value='no'>Indeferir</button>
        </form>

      </div>

    </>
  )
}