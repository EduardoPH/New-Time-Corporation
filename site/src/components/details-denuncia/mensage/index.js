import React from 'react'
import * as C from './styled'

export default function App() {
    return (
        <C.Container> 
            <div className="pt1"> 
                <div className="pack-user"> 
                    <img className="img-user" src="/assets/images/denuncia-detalhe/Perfil.png"alt=""/>
                    <div className="user-name"> User 275625</div>
                </div>

            </div>

            <div className="pt2"> 
                <div className="box-msg"> 
                    <img src="/assets/images/denuncia-detalhe/Setinha.svg" alt=""/>
                    <div className="cx-mensagem"> 
                        <div className="msg-denuncia"> declaração da testemunha ou da parte sobre determinado fato, do qual tem conhecimento ou que se relacione com seus interesses e que figura no processo como prova testemunhal. </div>
                    </div>
                </div>
            </div>
        </C.Container>
    )
}

