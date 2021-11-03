import Containerformulario from './styled.js';
import React from "react";
import { useState } from "react";
import  Mapa  from '../../map/map';
import Button from '../../../styled/buttonformulario';
import { Link } from 'react-router-dom';
        

export default function Index (props){

    // eslint-disable-next-line
    const [lat, setLat] = useState("021020202");
    // eslint-disable-next-line
    const [long, setLong] = useState("303030303");

    const dados = props.location.state;

    const [local, setLocal] = useState() 
    console.log(local)
    function dadosLocal(localizacao){
    
        let r = {
            ds_lat : localizacao.lat,
            ds_long: localizacao.lng,
            ds_cidade: localizacao.cidade,
            ds_bairro: localizacao.bairro
        }
        if(local === undefined){
            setLocal(r) 
        } else{
            return   
        }
    }
    
    return(
        <Containerformulario>
                <div className="conteudo">
                    <div className="cont">
                        <div className="titulo-local">Área Localizada</div>
                        <div className="mapa"><Mapa loca={dadosLocal}/></div>
                    </div>
                    <Link to={{ pathname:'/formulario/depoimento', state: { dados, local} }}><Button valor="Avançar"/></Link>  
                </div>
        </Containerformulario>
    )
}