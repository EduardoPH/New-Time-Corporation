import { Container } from "./styled";
import Menu from '../../components/menu'
import Mensagem from '../../components/recents-mensagem'

export default function Details() {
    return(
        <Container>
            <Menu/>
            <div className="rc-titulo"> Denúncias Recentes </div>
            <div className="rc-conteudo">
                <div className="rc-denuncias"> 
                    <Mensagem/>
                    <Mensagem/>
                    <Mensagem/>
                    <Mensagem/>
                    <Mensagem/>
                </div>
            </div>
        </Container>
    )
}