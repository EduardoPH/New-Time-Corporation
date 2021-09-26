import { Container } from "./styled";
import { Pag1, Pag2 } from "./conteudo";
import Menu from "../../components/menu";
import {MenuLeft} from '../../components/details-denuncia'

export default function Pag(){
    return(
        <Container>
            <Menu/>
            <div className="dt-base">
                <div className="titulo"> Denúncia </div>
                <div className="dt-conteudo"> 
                    
                    <div className="pt-menuLeft"> 
                        <MenuLeft/>
                    </div>

                    <div className="pt2-body">
                        <Pag1/> 
                        <Pag2/>
                   </div>
                </div>
            </div>
        </Container>
    )
}