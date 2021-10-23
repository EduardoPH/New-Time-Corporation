import Containerformulario from './styled.js';
import React from "react";
import { useState } from "react";
import  Mapa  from '../../../map/map';



export default function Local (){
    return(
        <Containerformulario>
                <div class="conteudo">
                    <div class="conteudo-right">
                        <div className="mapa">
                            <div class="titulo-local">Área Localizada</div>
                            <Mapa width="50em"/>
                        </div>
                    </div>
                </div>
        </Containerformulario>
    )
}