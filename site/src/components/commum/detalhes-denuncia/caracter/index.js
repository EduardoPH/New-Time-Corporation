import React from 'react'
import * as C from './styled.js'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {BoxDetails} from '../../detalhes-denuncia'



export default function App(props) {
    console.log(props.depoimento)

    return (
        <C.Container>
            <div className="titulo-caracter"> Características</div>

            <div className="container-caracter">
                <Carousel showIndicators={false} > 
                    <div className="box-carac">
                        <BoxDetails caracter={props.caracter.partInferior} />
                        <BoxDetails caracter={props.caracter.partSuperior}/>
                        <BoxDetails caracter={props.caracter.calcado}/>
                    </div>

                    <div className="box-carac">
                        <BoxDetails caracter={props.depoimento.pele} />
                        <BoxDetails caracter={props.depoimento.cabelo} />
                        <BoxDetails caracter={props.depoimento.corCabelo} />
                    </div>

                    <div className="box-detalhes">
                        <div className="title-details-caracters"> Características Físicas </div>
                        <div className="box-detalhe"> 
                            {props.depoimento.complemento}
                        </div>
                    </div>
                </Carousel>
            </div>
        </C.Container> 
    )
}
