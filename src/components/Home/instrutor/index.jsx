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
                    <strong>PIX (CPF)</strong>
                        <br/>
                    02197579258
                        <br/><br/>
                    <strong>BANCO DO BRASIL</strong>
                        <br/>
                    Ag: 3783-4 | C/c: 22498-7
                    </h6>
                </div>
                <div className="alert alert-success" role="alert">
                    <h6 className='textCenter'>
                    <strong>
                    MAXTEAM EXTREME GAMES 2022
                    </strong>
                    <br/>
                    O maior evento CrossFit do Sul do Estado
                        <br/><br/>
                    <i className="bi bi-calendar-check-fill"></i> 23 e 24 de setembro de 2022
                    <br/>
                    <i className="bi bi-geo-alt-fill"></i> BR 210 - Praça de Society, Centro
                        <br/>
                    <h6 className='textCenter'>
                        <strong>CAROEBE/RORAIMA</strong>
                    </h6>
                    <span className='container-social'>
                    <a href="tel:9584057707" id='telefone' data-telegram="telefone"><i className="bi bi-telephone"></i></a>
                    <a href="https://wa.me/?text=Gostaria%20de%20mais%20informações%20sobre%20o%20MaxTeam%20Extreme%20Games%202022"
                    id='whatsapp' data-telegram="whatsapp">
                        <i className="bi bi-whatsapp"></i>
                    </a>
                    </span>
                        <br/><br/>
                    Organizador:
                    <br />
                    <strong>MAXSUEL ALENCAR BARROS</strong>
                    </h6>
                </div>
                
            </div>
        </>
    )
}

export default Instrutor
