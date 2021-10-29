import React from 'react'
import * as C from './styled.js'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {BoxDetails} from '../../detalhes-denuncia'



export default function App() {
    return (
        <C.Container>
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
        </C.Container> 
    )
}
