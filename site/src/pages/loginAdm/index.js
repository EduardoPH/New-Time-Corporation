import Container from "./styled";
import Menu from '../../components/commum/menu/'
import { Fundo } from "../../components/styled/background/styled";



export default function Index() {
    return(
        <Fundo height="100vh">
            <Container>
            <Menu/>
                <div className="inferior">
                    <div className="box-Login">
                        <h1>LOGIN ADMINISTRATIVO</h1>
                        <p1>NOME:</p1>
                        <input type="text" />
                        <p1>SENHA:</p1>
                        <input type="password"/>
                        <button>ENTRAR</button>
                    </div>
                </div>
                
            </Container>
        </Fundo>
    )
}