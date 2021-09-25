import { Container } from "./styled";
import { Pag1, Pag2 } from "./conteudo";
import Menu from "../../components/menu";

export default function Pag(){
    return(
        <Container>
            <Menu/>
            <div className="dt-base">
                <div className="titulo"> Denúncia </div>
                <div className="dt-conteudo"> 
                   <Pag1/> 
                </div>
            </div>
        </Container>
    )
}