import React from 'react'
import * as C from './styled'

export default function App(props) {

    const {msg, nome} = props;

    return (
        <C.Container> 
            <div className="pt1"> 
                <div className="pack-user"> 
                    <img className="img-user" src="/assets/images/denuncia-detalhe/Perfil.png"alt=""/>
                    <div className="user-name"> {nome}</div>
                </div>

            </div>

            <div className="pt2"> 
                <div className="box-msg"> 
                    <img src="/assets/images/denuncia-detalhe/Setinha.svg" alt=""/>
                    <div className="cx-mensagem"> 
                        <div className="msg-denuncia"> {msg} </div>
                    </div>
                </div>
            </div>
        </C.Container>
    )
}

