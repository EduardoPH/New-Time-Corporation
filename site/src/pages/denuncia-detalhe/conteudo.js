import { Pag, Caracteristicas } from "./styled";
import {BoxDetails} from '../../components/details-denuncia'

function Pag1(){
    return(
        <Pag>
            <div className="pt1"> 
                <div className="pack-user"> 
                    <img className="img-user" src="/assets/images/denuncia-detalhe/Perfil.png"alt=""/>
                    <div className="user-name"> User 275625</div>
                </div>

                <div className="btn-voltar"> 
                    <button> Voltar </button>
                </div>
            </div>

            <div className="pt2"> 
                <div className="box-msg"> 
                    <img src="/assets/images/denuncia-detalhe/Setinha.svg" alt=""/>
                    <div className="cx-mensagem"> 
                        <div className="msg-denuncia"> fgcfgggcfg </div>
                    </div>
                </div>
            </div>
        </Pag>
    )
}

function Pag2(){
    return(
        <Caracteristicas>
            <div className="titulo-caracter"> Características</div>
            <div className="container-caracter">
                <div className="box-carac">
                    <BoxDetails/>
                </div>
            </div>
        </Caracteristicas>
    )
}

export {Pag1, Pag2}