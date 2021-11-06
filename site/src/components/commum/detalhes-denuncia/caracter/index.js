import React from 'react'
import * as C from './styled.js'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import {BoxDetails} from '../../detalhes-denuncia';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default function App(props) {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 1,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };

    console.log(props.caracter)

    return (
        <C.Container>
            <div className="titulo-caracter"> Características</div>

            <div className="container-caracter">
                <Carousel responsive={responsive} > 
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

                    <div className="box-detalhes">
                        <div className="title-details-caracters"> Vestimenta </div>
                        <div className="box-detalhe"> 
                            {props.caracter === undefined ? "" : props.caracter.complemento}
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
                        <div className="title-details-caracters"> Físicas </div>
                        <div className="box-detalhe"> 
                            {props.caracter === undefined ? "" : props.depoimento.complemento}
                        </div>
                    </div>
                </Carousel>
            </div>
        </C.Container> 
    )
}
