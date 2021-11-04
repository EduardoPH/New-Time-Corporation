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
    console.log(local)
    function proximaTela() {
        let dados = {
            caracteristicas: denuncia.caracteristicas,
            vestimenta: denuncia.vestimenta,
            local: local
        }
        Cookies.set('dadosDenuncia', JSON.stringify(dados))  
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