import Containerformulario from './styled.js';
import React from "react";
import { useState } from "react";
import  Mapa  from '../../../commum/map/map';
import Button from '../../../styled/buttonformulario';
import { Link } from 'react-router-dom';
        

export default function Index (props){

    // eslint-disable-next-line
    const [lat, setLat] = useState(["021020202"]);
    // eslint-disable-next-line
    const [long, setLong] = useState(["303030303"]);

    const dados = props.location.state;

    let local = {
        ds_lat: (lat),
        ds_long: (long),
    }

    return(
        <Containerformulario>
                <div className="conteudo">
                    <div className="cont">
                        <div className="titulo-local">Área Localizada</div>
                        <div className="mapa"><Mapa/></div>
                    </div>
                    <Link to={{ pathname:'/formulario/depoimento', state: {dados, local} }}><Button valor="Avançar"/></Link>  
                </div>
        </Containerformulario>
    )
}