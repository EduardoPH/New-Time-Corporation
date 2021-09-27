import { Pag, Caracteristicas, Map} from "./styled";
import {BoxDetails} from '../../components/details-denuncia'

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import App from '../../components/map/MyLocation';
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
                        <div className="msg-denuncia"> declaração da testemunha ou da parte sobre determinado fato, do qual tem conhecimento ou que se relacione com seus interesses e que figura no processo como prova testemunhal. </div>
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
                <Carousel> 
                    <div className="box-carac">
                        <BoxDetails/>
                        <BoxDetails/>
                        <BoxDetails/>
                    </div>

                    <div className="box-carac">
                        <BoxDetails/>
                        <BoxDetails/>
                        <BoxDetails/>
                    </div>

                    <div className="box-detalhes">
                        <div className="title-details-caracters"> Características Físicas </div>
                        <div className="box-detalhe"> 
                        aqui será escrito informações complementares, ex: tatuagem, cicatriz, etc...
                        </div>
                    </div>
                </Carousel>
            </div>
        </Caracteristicas>
    )
}

function Pag3Map() {
    return(
        <Map> 
            
        </Map>
    )
}

export {Pag1, Pag2}