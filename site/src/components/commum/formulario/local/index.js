import Containerformulario from './styled.js';
import React from "react";
import { useState } from "react";
import  Mapa  from '../../../map/map';



export default function Local (){
    return(
        <Containerformulario>
                <div className="conteudo">
                    <div className="cont">
                        <div className="titulo-local">Área Localizada</div>
                        <div className="mapa"><Mapa/></div>
                    </div>
                </div>
        </Containerformulario>
    )
}