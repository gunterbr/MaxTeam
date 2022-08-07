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
          nascimento={val.nascimento}
          idade={val.idade}
          contato={val.contato}
          inscricao={val.numeroInscricao}
          evento={val.evento}
          camiseta={val.camiseta}
          sexo={val.sexo}
          categoria={val.categoria}
          deferida={val.deferida}
          file={val.path}
          originalname={val.originalname}
        />
      ))}
    </>
  )
}

export default Load