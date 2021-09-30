import { Container } from "./styled";
import { Pag1, Pag2, Pag3} from "./conteudo";
import Menu from "../../components/menu";
import {MenuLeft} from '../../components/details-denuncia'

export default function Pag(){
    return(
        <Container>
            <Menu  className="menu"/>
            <div className="dt-base">
                <div className="titulo"> Denúncia </div>
                <div className="dt-conteudo"> 
                    
                    <div className="pt-menuLeft"> 
                        <MenuLeft/>
                    </div>

                    <div className="pt2-body">
                        <Pag1/> 
                        <Pag2/>
                        <Pag3/>
                   </div>
                </div>
            </div>
        </Container>
    )
}