import { MenuLateralStyled } from "./styled";

export default function MenuLateral(){
    return(
        <MenuLateralStyled>
            <div className="item-menu">
                <img src ="/assets/images/menu/valida.svg" alt=""/>
                Validações
            </div>
            <div className="item-menu">
                <img src ="/assets/images/menu/apoio.svg" alt=""/>
                Novas Frases
            </div>
            <div className="item-menu">
                <img src ="/assets/images/menu/cargo.svg" alt=""/>
                Cargos
            </div>
            <div className="item-menu">
                <img src ="/assets/images/menu/user.svg" alt=""/>
                Usuárias 
            </div>
            <div className="item-menu">
                <img src ="/assets/images/menu/den.svg" alt=""/>
                Denúncias
            </div>
        </MenuLateralStyled>
    )
}