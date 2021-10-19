import BoxStyled from "./styled";
import Button from '../../../administrador/index';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Index(props){
    const [eventos, setEventos] = useState([]);
    const [item, setItem] = useState({});
    const [denun, setDenun] = useState('')
    const notificacao = () => toast.success("Denúncia Cadastrada com sucesso!");

    const excluir = async(id) =>{
        confirmAlert({
            title: 'Remover Denúncia',
            message: `Tem certeza que deseja remover esta denúncia ${item.nome}`,
            buttons:[
                {
                    label: 'Sim',
                    onClick: async () => {
                        alert('apagou ' + item.nome)
                    }
                },
                {label: 'Não'}
            ]
        })
    }
    
    useEffect(() => {
        const r = [
            {
                id: "1",
                nome: "ludiarne",
                email: "luane@gamil.com",
                tel: "11 9999-9999",
                cpf: "6545645464",
                data: "22020-25-25",
                denuncia: "Os conceitos de Indústria Cultural e Cultura de Massa foram cunhados pela famosa Escola de Frankfurt, na Alemanha. ... A Cultura de Massa é produzida pela Indústria Cultural, ou seja, um conjunto de grandes empresas que pertencem à classe dominante que tem por objetivo produzir cultur"
            },
            {
                id: "2",
                nome: "ludiarne2",
                email: "luane@gamil.com",
                tel: "11 9999-9999",
                cpf: "6545645464",
                data: "22020-25-25",
                denuncia: "Os conceitos de Indústria Cultural e Cultura de Massa foram cunhados pela famosa Escola de Frankfurt, na Alemanha. ... A Cultura de Massa é produzida pela Indústria Cultural, ou seja, um conjunto de grandes empresas que pertencem à classe dominante que tem por objetivo produzir cultur"
            },
            {
                id: "3",
                nome: "ludiarn3e",
                email: "luane@gamil.com",
                tel: "11 9999-9999",
                cpf: "6545645464",
                data: "22020-25-25",
                denuncia: "Os conceitos de Indústria Cultural e Cultura de Massa foram cunhados pela famosa Escola de Frankfurt, na Alemanha. ... A Cultura de Massa é produzida pela Indústria Cultural, ou seja, um conjunto de grandes empresas que pertencem à classe dominante que tem por objetivo produzir cultur"
            }
        ];

        if(props.location.state !== undefined)
            r.unshift(props.location.state);

        setEventos(r);
        setItem(r[0]);
        setDenun(r[0].denuncia);

    }, []);

    return(
        <BoxStyled>
            <ToastContainer/>
            <h1>Validar Denúncia</h1>
            
            <div className="box-denuncia">
                <div className="cabecalho">
                    < img src="/assets/images/denuncias-recentes/Perfil.png" alt=""/>
                    <div className="informacoes-usuaria">
                        <p1>   {item.nome} </p1>
                        <span> {item.email} </span>
                        <span> {item.tel} </span>
                        <Link to={{pathname:"/administrador/usuaria/perfil", state:item}}><button > Perfil</button></Link>
                    </div>
                </div>
                <textarea value={denun}  onChange={  e => setDenun(e.target.value)}/>
                <div className="btms-acoes">
                    <Button type="alterar" width="16em"/> 
                    <button className="excluir" onClick={() => excluir(item.id)}>Excluir</button>
                    <button className="adicionar" onClick={ notificacao}> adicionar</button>
                </div>
            </div>
        </BoxStyled>
    )
}