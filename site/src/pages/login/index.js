import Container from './styled.js'
import Menu from '../../components/menu'



export default function Login(){
    return(

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
                            <input type = "text" placeholder="Digite seu Email..."/>
                            <input type = "text" placeholder="Digite sua Senha..."/>
                        </div>
                        <div className="lado">
                            <div className="bot1"><button>Esqueci minha senha</button></div>
                            <div className="bot2"><button>Entrar</button></div>
                        </div>
                    </div>
                    <div className="casoJa">
                        <div className="np">Não Possui uma conta?</div>
                        <div className="botC">Cadastre-se</div>
                    </div>
                </div>
            </div>
        
        
        
        
        
        
        </Container>
    )
}