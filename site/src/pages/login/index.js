import Container from './styled.js'
import Menu from '../../components/menu'
import {Fundo} from '../../components/commum/background/styled'
import { Link } from "react-router-dom";
import { Inputs, Buttons } from '../../components/login-cadastro/index.js';



export default function Login(){
    return(
        <Fundo height="100vh">
        <Container>
            <Menu/>
            <div className="caixa">
                <div className="esquerda">
                    <div className="imgPC"><img src="/assets/images/login/imgPC.svg" alt=""/></div>
                    <div className="Tit">Protegemos sua Privacidade</div>
                </div>
                <div className="direita">
                    <div className="login">
                        <div className="ti">Login</div>
                        <div className="inputs">
                            <Inputs place="Digite seu email..."/>
                            <Inputs place="Digite sua senha..."/>
                        </div>
                        <div className="lado">
                            <div className="bot2">Esqueci minha senha</div>
                            <div className="bot1"> <Buttons valor="Entar" width="13em"/> </div>
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