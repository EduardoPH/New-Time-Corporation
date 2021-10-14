import Menu from '../../components/menu/index';
import { Container, MenuLateralStyled, BoxStyled } from './styled';

import Frase from '../../components/commum/adm/validarDenuncia/'

export default function Administrador(){
    return(
        <Container>
            <Menu/>
            <div className="boxs">
                <MenuLateralStyled>
                    <div className="item-menu">
                        <img src ="/assets/images/menu/valida.svg" alt=""/>
                        Validações
                    </div>
                    <div className="item-menu" o >
                        <img src ="/assets/images/menu/apoio.svg" alt=""/>
                        Novas Frases
                    </div>
                    <div >
                        <img src ="/assets/images/menu/cargo.svg" alt=""/>
                        Cargos
                    </div>
                    <div >
                        <img src ="/assets/images/menu/user.svg" alt=""/>
                        Usuárias 
                    </div>
                    <div className="item-menu" >
                        <img src ="/assets/images/menu/den.svg" alt=""/>
                        Denúncias
                    </div>
                </MenuLateralStyled>
                
                    <div className="box-direita">
                        <BoxStyled>
                            <Frase/>
                        </BoxStyled>
                    </div>
            </div>
        </Container>
    )
}