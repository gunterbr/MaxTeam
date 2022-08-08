import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../css/index.css'

const Instrutor = () => {

    return (
        <>
            <div className='instrutor'>
                <h2>
                    Olá. Seja bem-vindo(a).
                </h2>
                    <br/>
                <h3>
                    Antes de realizar sua inscrição, fique atento às instruções:
                </h3>
                    <br/>
                <h5>
                    1) Todos os campos são obrigatórios;
                </h5>
                    <br/>
                <h5>
                    2) Aperte em CONFIRMAR APENAS UMA VEZ. Logo após o registro ser concluído você receberá um aviso na tela;
                </h5>
                    <br/>
                <h5>
                    3) Você deve nos enviar o comprovante no formato de imagem. Pode ser um print &#128521;
                </h5>
                    <br/>
                <h5>
                    4) Vamos receber sua inscrição e no prazo de 24h enviaremos a confirmação no telefone cadastrado.
                </h5>
                    <br/><br/>
                <div className="alert alert-warning" role="alert">
                    <h6 className='textCenter'>
                    PIX (CPF)
                        <br/>
                    02197579258
                        <br/><br/>
                    BANCO DO BRASIL
                        <br/>
                    Ag: 3783-4 | C/c: 22498-7
                        <br/><br/>
                    Maxuel Alencar Barros
                    </h6>
                </div>
                
            </div>
        </>
    )
}

export default Instrutor
