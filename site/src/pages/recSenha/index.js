import { Container } from "./styled"
import MenuTop from '../../components/menu/'
import { Link } from "react-router-dom"
export default function Index(){
    return(
        <Container>
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
                        <input placeholder="Digite seu E-mail..."/>
                        <button>ENVIAR</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

