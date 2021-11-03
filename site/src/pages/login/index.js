import Container from './styled.js';
import 'react-toastify/dist/ReactToastify.css';
import Menu from '../../components/commum/menu';

import Cookies from 'js-cookie';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import {Fundo} from '../../components/styled/background/styled';
import { Inputs, Buttons } from '../../components/styled/buttonlogin-cadastro/index.js';

import Api from '../../services/usuario.js';
const api = new Api();

export default function Login(){
    
    const navigation = useHistory();

    let usuariaLogada = Cookies.get('usuariaLogada')
    if( usuariaLogada !== undefined ){
        navigation.push('/perfil')
    }
    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');
    
    async function login(){

        let r = await api.login(email, senha);
        if(r.erro){
            toast.error(r.erro)
        } else {
            Cookies.set('usuariaLogada', JSON.stringify(r))
            navigation.push('/perfil')
        }
    }
    return(
        <Fundo height="100vh">
            <ToastContainer/>
        <Container>
            <Menu/>
            <div className="caixa">
                <div className="esquerda">
                    <div className="imgPC"><img src="/assets/images/login/imgPC.svg" alt=""/></div>
                    <div className="Tit">Protegemos sua Privacidade</div>
                    <div className="Tit">Faça login ou cadastre para realizar uma denuncia</div>
                </div>
                <div className="direita">
                    <div className="login">
                        <div className="ti">Login</div>
                        <div className="inputs">
                            <Inputs value={email} valor={ valor => setEmail(valor)} place="Digite seu email..."/>
                            <Inputs value={senha} valor={ valor => setSenha(valor)} place="Digite sua senha..."/>
                        </div>
                        <div className="lado">
                            <Link to='/recuperacao'><div className="bot2">Esqueci minha senha</div></Link>
                            <div className="bot1"> <Buttons clicado={login} valor="Entra" width="13em"/> </div>
                        </div>
                    </div>
                    <div className="nao-possui">
                        <div className="np">Não Possui uma conta?</div>
                        <Link to = "/cadastro"><div className="botC"><Buttons valor="Cadastrar" width="24em"/></div></Link>
                    </div>
                </div>
            </div>
        </Container>
        </Fundo>
    )
}