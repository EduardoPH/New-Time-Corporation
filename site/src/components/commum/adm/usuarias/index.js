import { useState, useEffect } from "react";
import BoxStyled from "./styled";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { Loading } from 'react-loading-ui';
import Api from "../../../../services/api";
const api = new Api()

export default function Index(props){
    const [eventos, setEventos] = useState([]);
    const [usuaria, setUsuaria] = useState('');
    async function listarUsu(){
       
        Loading({
            text: "Por Favor Aguarde",
            title: "CARREGANDO",
            theme: "dark",
            topBar: true,
            topBarColor: 'red'
        });
        
        let r = await api.listarDenun()
        setEventos(r)
        setTimeout(() => {
            Loading();
          }, 100)
    };

    async function buscarUsu(){
        let r = await api.buscarUsu(usuaria)
        if(r.erro){
            return toast.error(r.erro)
        } else {
            setEventos(r)
        }
    }
    useEffect(
        () => {listarUsu() }, [] 
    )
    return(
        <BoxStyled>
            <ToastContainer/>
            <h1>Usuárias</h1>
                <div className="pesquisa">
                    <input type="text" placeholder="Pesquisar por usuária..." onChange={e => setUsuaria(e.target.value)}/>
                    <button className="btm-pesquisar" onClick={buscarUsu}><img src="/assets/images/administrador/icons8-search.svg"alt="erro"/></button>
                </div>
            <table className="tabela-usuaria">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        <th>CPF</th>
                        <th>D. Ativa</th>
                        <th className="coluna-acao"></th>
                    </tr>
                </thead>
                <tbody>
                    {eventos.map (item => 
                        <tr>
                            <td>{item.id_usuario_infoc_ntc_usuario.nm_usuario}</td>
                            <td>{item.id_usuario_infoc_ntc_usuario.ds_email}</td>
                            <td>{item.id_usuario_infoc_ntc_usuario.ds_telefone}</td>
                            <td>{item.id_usuario_infoc_ntc_usuario.ds_cpf}</td>
                            <td>{item.bt_ativo === true ? 'Ativa' : 'Inativa'}</td>
                            <td className="coluna-acao"><Link to={{pathname:"/administrador/usuaria/perfil", state:item}}><button>Ver Perfil</button></Link></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </BoxStyled>
    )
}