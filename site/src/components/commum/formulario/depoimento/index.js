import Containerformulario from './styled.js';
import React from "react";
import { useState } from "react";

export default function Depoimento (){
    const [complemento, setComplemento] = useState([]);


    return(
        <Containerformulario>
            <div class="tudo">
                <div class="pag">
                    <div class="conteudo2">
                        <div class="textarea"><textarea value={complemento} onChange={ e => setComplemento(e.target.value)} name="" id="valor" cols="30" rows="10" placeholder="Aqui é onde vc pode descrever o ocorrido aconteceu."></textarea></div>
                    </div>
                </div>
                </div>        
        </Containerformulario>
    )
}