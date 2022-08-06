import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Card from './card'

const Load = () => {
  const [list, setList] = useState([])

  const BASE_URL = 'https://maxteam-mysql.herokuapp.com/'

  useEffect(() => {
    Axios.get(`${BASE_URL}getInscritos/`).then((response) => {
      setList(response.data)
    })
  },[])

  return (
    <>
      {list.map((val) => (
        <Card
          key={val.idinscricao}
          id={val.idinscricao}
          candidato={val.nomeCandidato}
          inscricao={val.numeroInscricao}
          evento={val.evento}
          deferida={val.deferida}
          file={val.path}
          originalname={val.originalname}
        />
      ))}
    </>
  )
}

export default Load