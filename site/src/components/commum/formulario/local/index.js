import Containerformulario from './styled.js';
import React from "react";
import  Mapa  from '../../../commum/map/map';
import Button from '../../../styled/buttonformulario';
import { Link } from 'react-router-dom';


export default function Local (){
    return(
        <Containerformulario>
                <div className="conteudo">
                    <div className="cont">
                        <div className="titulo-local">Área Localizada</div>
                        <div className="mapa"><Mapa/></div>
                    </div>
                    <Link to="/formulario/depoimento"><Button valor="Avançar"/></Link>  
                </div>
        </Containerformulario>
    )
}