import Containerformulario from './styled.js';
import React from "react";
import { useState } from "react";

export default function Depoimento (){
    const [complemento, setComplemento] = useState([]);


    return(
        <Containerformulario>
            <div class="conteudo2">
                <textarea value={complemento} onChange={ e => setComplemento(e.target.value)} name="" id="valor" cols="30" rows="10" placeholder="Aqui você pode descrever o ocorrido."></textarea>
            </div>   
        </Containerformulario>
    )
}