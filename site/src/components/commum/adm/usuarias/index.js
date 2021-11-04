import BoxStyled from "./styled";

import { Link } from "react-router-dom"
import { Loading } from 'react-loading-ui';
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

import Api from "../../../../services/adm.js";
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

    console.log(eventos)
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
                            <td>{item.nome}</td>
                            <td>{item.email}</td>
                            <td>{item.telefone}</td>
                            <td>{item.cpf}</td>
                            <td className="coluna-acao"><Link to={{pathname:"/administrador/usuaria/perfil", state:item}}><button>Ver Perfil</button></Link></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </BoxStyled>
    )
}