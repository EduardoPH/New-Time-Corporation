import Containerformulario from './styled.js';
import React from "react";
import { useState } from "react";

import { useHistory } from 'react-router-dom';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Cookies from 'js-cookie';

import Api from "../../../../services/formulario.js";

const api = new Api();

export default function Depoimento (){
    
    let denuncia =  Cookies.get('dadosDenuncia') === undefined ? "" : JSON.parse(Cookies.get('dadosDenuncia'))

    const [depoimento, setDepoimentomento] = useState(denuncia.complemento === undefined ? "" : JSON.parse(Cookies.get('dadosDenuncia')).complemento);
    
    const navigation = useHistory()

    const cadastrar = async () => {
        if (depoimento.length < 1) {
            toast.error("❌ O campo (Depoimento) deve ser preenchido corretamente.");
        } else {
            let usu = JSON.parse(Cookies.get('usuariaLogada')).idUsu
            let id = denuncia.idDen
            if(denuncia.idDen !== undefined){
                let d = {dados: {... denuncia, depoimento, usu, id} }
                let r = await api.updateDenuncia(JSON.stringify(d));
                if(r.erro){
                    toast.error(r.erro)
                } else {
                    toast.success("💕 Denúncia cadastrada com sucesso")
                    toast.warning("Sua denúncia irá ser analisada por nossa equipe, Voltaremos para as denúncias")
                    setTimeout(() => navigation.push('/formulario'), 3500);
                    Cookies.remove('dadosDenuncia')
                }
            } else {
                let d = {dados: {... denuncia, depoimento, usu} }
                let r = await api.cadastrarDenuncia(JSON.stringify(d));
                if(r.erro){
                    toast.error(r.erro)
                } else {
                    toast.success("💕 Denúncia cadastrada com sucesso")
                    toast.warning("Sua denúncia irá ser analisada por nossa equipe, Voltaremos para as denúncias")
                    setTimeout(() => navigation.push('/formulario'), 3500);
                    Cookies.remove('dadosDenuncia')
                }
            }
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