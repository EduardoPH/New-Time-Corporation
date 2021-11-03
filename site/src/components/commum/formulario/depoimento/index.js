import Containerformulario from './styled.js';
import React from "react";
import { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Cookies from 'js-cookie';

import Api from "../../../../services/formulario.js";

const api = new Api();

export default function Depoimento (props){
    const [depoimento, setDepoimentomento] = useState("");

    const dados = props.location.state;
    console.log(dados)
  
    const pele = dados.dados.caracteristicas["ds_caractPele"];
    const cabelo = dados.dados.caracteristicas["ds_cabelo"];
    const corCabelo = dados.dados.caracteristicas["ds_corcabelo"];
    const complementoC = dados.dados.caracteristicas["ds_complemento"];

    const inferior = dados.dados.vestimentas["ds_partebaixo"];
    const superior = dados.dados.vestimentas["ds_partecima"];
    const calcado = dados.dados.vestimentas["ds_calcado"];
    const complementoV = dados.dados.vestimentas["ds_complemento"];
    
    const tipoVestimenta = "teste";
    
    const latitude = dados.local.ds_lat;
    const longitude = dados.local.ds_long;
    const bairro = dados.local.ds_bairro;
    const cidade = dados.local.ds_cidade;

    const infoCookie = Cookies.get('usuariaLogada')
    const convert = JSON.parse(infoCookie)

    const idusu = convert["idUsu"]
    console.log(idusu)

    const cadastrar = async () => {

        if (pele.length < 1) {
            toast.error("❌ O campo (Tom de pele) deve ser preenchido corretamente.");
        }
        if (cabelo.length < 1) {
            toast.error("❌ O campo (Cabelo) deve ser preenchido corretamente.");
        } 
        if (corCabelo.length < 1) {
            toast.error("❌ O campo (Cor do cabelo) deve ser preenchido corretamente.");
        } 
        if (inferior.length < 1) {
            toast.error("❌ O campo (Parte de cima) deve ser preenchido corretamente.");
        } 
        if (superior.length < 1) {
            toast.error("❌ O campo (Parte de baixo) deve ser preenchido corretamente.");
        } 
        if (calcado.length < 1) {
            toast.error("❌ O campo (Calçado) deve ser preenchido corretamente.");
        } 
        if (depoimento.length < 1) {
            toast.error("❌ O campo (Depoimento) deve ser preenchido corretamente.");
        } else {
            let r = await api.cadastrarDenuncia( tipoVestimenta, inferior, superior, calcado, complementoV,
                                                pele, cabelo, corCabelo, complementoC,
                                                latitude, longitude, bairro, cidade,
                                                idusu, depoimento );

            toast.success("💕 Denúncia cadastrada com sucesso");
        }
    }

    return(
        <Containerformulario>
        <ToastContainer/>
            <div class="conteudo2">
                <textarea value={depoimento} onChange={ e => setDepoimentomento(e.target.value)} name="" id="valor" cols="30" rows="10" placeholder="Aqui você pode descrever o ocorrido."></textarea>
                <button onClick={cadastrar} valor="Enviar">Enviar</button>
            </div>   
        </Containerformulario>
    )
}