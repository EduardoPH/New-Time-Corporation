import Containerformulario from './styled.js';
import React from "react";
import { useState } from "react";
import  Mapa  from '../../../map/map';



export default function Local (){
    return(
        <div>
                <div class="conteudo">
                    <div class="conteudo-right">
                        <div class="titulo-local">Área Localizada</div>
                    <Mapa/>
                    </div>
                </div>
        </div>
    )
}