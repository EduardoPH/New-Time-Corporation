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
    async function listarUsu(){
       
        Loading({
            text: "Por Favor Aguarde",
            title: "CARREGANDO",
            theme: "dark",
            topBar: true,
            topBarColor: 'red'
        });
        
        let r = await api.ListarUsu()
        setEventos(r)
        setTimeout(() => {
            Loading();
          }, 100)
    };

    
    useEffect(
        () => {listarUsu() }, [] 
    )
    return(
        <BoxStyled>
            <ToastContainer/>
            <h1>Usuárias</h1>
            <table className="tabela-usuaria">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        <th>CPF</th>
                        <th className="coluna-acao"></th>
                    </tr>
                </thead>
                <tbody>
                    {eventos.map (item => 
                        <tr>
                            <td>{item.nm_usuario}</td>
                            <td>{item.ds_email}</td>
                            <td>{item.ds_telefone}</td>
                            <td>{item.ds_cpf}</td>
                            <td className="coluna-acao"><Link to={{pathname:"/administrador/usuaria/perfil", state:item}}><button>Ver Perfil</button></Link></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </BoxStyled>
    )
}