import { useState } from "react";
import { Container } from "./styled"
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import MenuTop from '../../components/commum/menu/';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Api from "../../services/usuario";
const api = new Api()

export default function Index(){

    const [ email, setEmail ] = useState('');
    const navigation = useHistory()
    async function rec() {
        alert('pas')
        let r = await api.recuperacao(email)
        if(r.erro){
            toast.error(r.erro)
        } else {
            navigation.push('/code')
        }
    }
    return(
        <Container>
            <ToastContainer/>
            <MenuTop/>
            <div className="caixaCentral">
            <Link to="/login"><button>Voltar</button></Link>
                <div className="caixa-direita">
                    <div className="tituloVoltar">
                        <h1>Recuperação de senha</h1>
                    </div>
                    <div className="caixa">
                        <div className="text">
                            <span>
                                Esqueceu sua senha?<br/>
                                Não se preocupe.
                            </span>
                            <div className="info">
                            Apenas digite seu email para que possamos enviar um link para que você cadastre sua nova senha.
                            </div>
                        </div>
                        <input onChange={e => setEmail(e.target.value)} placeholder="Digite seu E-mail..."/>
                        <button onClick={rec}>ENVIAR</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

