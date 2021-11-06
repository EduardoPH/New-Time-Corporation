import Containerformulario from './styled.js';
import React from "react";
import { useState } from "react";
import  Mapa  from '../../map/map';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Index (props){

    const navigation = useHistory()

    let denuncia =  Cookies.get('dadosDenuncia') === undefined ? "" : JSON.parse(Cookies.get('dadosDenuncia'))

    const [local, setLocal] = useState(denuncia.local === undefined ? "" : JSON.parse(Cookies.get('dadosDenuncia')).local) 
    
    function dadosLocal(localizacao){
        let r = {
            id: denuncia.local === undefined ? "" :  denuncia.local.id,
            lat : localizacao.lat,
            lgn: localizacao.lng,
            cidade: localizacao.cidade,
            bairro: localizacao.bairro
        }
        if(local === '' || local.lat !== localizacao.lat){
            setLocal(r) 
        } else{
            return   
        }
    }

    function proximaTela() {
        
        let r = {
            caracteristicas:{
                id: denuncia.caracteristicas === undefined ? "" : denuncia.caracteristicas.id ,
                pele: denuncia.caracteristicas === undefined ? "" : denuncia.caracteristicas.pele ,
                cabelo: denuncia.caracteristicas === undefined ? "" : denuncia.caracteristicas.cabelo ,
                corCabelo: denuncia.caracteristicas === undefined ? "" : denuncia.caracteristicas.corCabelo ,
                complemento: denuncia.caracteristicas === undefined ? "" : denuncia.caracteristicas.complemento 
            },
            vestimenta:{
                id: denuncia.vestimenta === undefined ? "" :  denuncia.vestimenta.id,
                parteCima: denuncia.vestimenta === undefined ? "" :  denuncia.vestimenta.parteCima,
                parteBaixo: denuncia.vestimenta === undefined ? "" : denuncia.vestimenta.parteBaixo,
                calcado:  denuncia.vestimenta === undefined ? "" : denuncia.vestimenta.calcado,
                complemento: denuncia.vestimenta === undefined ? "" : denuncia.vestimenta.complemento
            },
            local: local,
            complemento: denuncia.complemento === undefined ? "" : denuncia.complemento,
            idDen: denuncia.idDen === undefined ? "" : denuncia.idDen
        }
        Cookies.set('dadosDenuncia', JSON.stringify(r))  
        navigation.push('/formulario/depoimento')
    }

    return(
        <Containerformulario>
                <div className="conteudo">
                    <div className="cont">
                        <div className="titulo-local">Área Localizada</div>
                        <div className="mapa"><Mapa  info={local && denuncia.local } loca={dadosLocal}/></div>
                    </div>
                    <button className="btm-avan" onClick={proximaTela}>Avançar</button>  
                </div>
        </Containerformulario>
    )
}