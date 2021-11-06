import React from 'react'
import * as C from './styled.js'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {BoxDetails} from '../../detalhes-denuncia'



export default function App(props) {

    console.log(props.caracter)

    return (
        <C.Container>
            <div className="titulo-caracter"> Características</div>

            <div className="container-caracter">
                <Carousel showIndicators={false} > 
                    <div className="box-carac">
                        <div className="title-box">
                            Parte superior
                        <BoxDetails  caracter={props.caracter === undefined ? "" : props.caracter.partSuperior} />
                        </div>

                        <div className="title-box">
                            Parte inferior
                        <BoxDetails  caracter={props.caracter === undefined ? "" : props.caracter.partInferior}/>
                        </div>

                        <div className="title-box">
                            Calçado
                        <BoxDetails  caracter={props.caracter === undefined ? "" : props.caracter.calcado}/>
                        </div>
                    </div>

                    <div className="box-carac">
                        <div className="title-box">
                            Tom de pele
                        <BoxDetails caracter={ props.depoimento === undefined ? "" :  props.depoimento.pele} />
                        </div>
                        <div className="title-box">
                            Cabelo
                        <BoxDetails caracter={ props.depoimento === undefined ? "" :  props.depoimento.cabelo} />
                        </div>
                        <div className="title-box">
                            Cor do cabelo
                        <BoxDetails caracter={ props.depoimento === undefined ? "" : props.depoimento.corCabelo} />
                        </div>
                    </div>

                    <div className="box-detalhes">
                        <div className="title-details-caracters"> Características Físicas </div>
                        <div className="box-detalhe"> 
                            {props.caracter === undefined ? "" : props.depoimento.complemento}
                        </div>
                    </div>
                </Carousel>
            </div>
        </C.Container> 
    )
}
