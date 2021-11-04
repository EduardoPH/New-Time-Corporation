import Container from "./styled";
import Menu from '../../components/commum/menu/'

import Cookies from 'js-cookie';
import { useState } from "react";
import { useHistory } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import { Fundo } from "../../components/styled/background/styled";

import 'react-toastify/dist/ReactToastify.css';


import Api from "../../services/adm.js";
const api = new Api()

export default function Index() {
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const navigation = useHistory();

    let admlogado = Cookies.get('admlogado')
    if( admlogado !== undefined ){
        navigation.push('/administrador')
    }

    let masterlogado = Cookies.get('masterlogado')
    if( masterlogado !== undefined ){
        navigation.push('/administrador')
    }

    async function Logar() {
        let r = await api.LoginAdm(nome, senha);
        if(r.erro){
            toast.error(r.erro)
        } else {
            if(r.id_administrador === 9){
                Cookies.set('masterlogado', JSON.stringify(r))
                navigation.push('/administrador')
            } else {
                Cookies.set('admlogado', JSON.stringify(r))
                navigation.push('/administrador')
            }
        }
    }

    return(
        <Fundo height="100vh">
            <ToastContainer/>
            <Container>
            <Menu/>
                <div className="inferior">
                    <div className="box-Login">
                        <h1>LOGIN ADMINISTRATIVO</h1>
                        <p1>NOME:</p1>
                        <input className="inp" onChange={e => setNome(e.target.value)} type="text" />
                        <p1>SENHA:</p1>
                        <input className="inp" onChange={e => setSenha(e.target.value)} type="password"/>
                        <button className="inp" onClick={Logar}>ENTRAR</button>
                    </div>
                </div>
                
            </Container>
        </Fundo>
    )
}