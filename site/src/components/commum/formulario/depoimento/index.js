import Containerformulario from './styled.js';
import React from "react";
import { useState } from "react";
import Button from '../../../formulario';
import { Link } from 'react-router-dom';

export default function Depoimento (){
    const [complemento, setComplemento] = useState([]);


    return(
        <Containerformulario>
            <div class="conteudo2">
                <textarea value={complemento} onChange={ e => setComplemento(e.target.value)} name="" id="valor" cols="30" rows="10" placeholder="Aqui você pode descrever o ocorrido."></textarea>
                <Button valor="Enviar"/>
            </div>   
        </Containerformulario>
    )
}