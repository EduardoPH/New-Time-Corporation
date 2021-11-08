import Menu from '../../components/commum/menu/index';

import Cookies from 'js-cookie';
import { useHistory } from "react-router";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Container, MenuLateralStyled, BoxStyled } from './styled';

import ValidarDenuncia from '../../components/commum/adm/validarDenuncia/';
import apoio from '../../components/commum/adm/apoio/';
import cargos from '../../components/commum/adm/cargos/';
import listaDenuncia from '../../components/commum/adm/listaDenuncia/';
import perfilUsuaria from '../../components/commum/adm/perfilUsuaria/';
import usuarias from '../../components/commum/adm/usuarias/';

export default function Administrador(){
    const navigation = useHistory()
    const sair = () => {Cookies.remove('admlogado');Cookies.remove('masterlogado'); navigation.push("/")}
    return(
        <Container>
            <Menu/>
            <BrowserRouter>
                <div className="boxs">
                    <MenuLateralStyled>
                        <Link to="/administrador/">
                            <div className="item-menu">
                                <img src ="/assets/images/menu/valida.svg" alt=""/>
                                Validações
                            </div>
                        </Link>
                        <Link to="/administrador/frases/apoio">
                            <div className="item-menu"  >
                                <img src ="/assets/images/menu/apoio.svg" alt=""/>
                                Novas Frases
                            </div>
                        </Link>
                        <Link to="/administrador/cargo">
                            <div div className="item-menu">
                                <img src ="/assets/images/menu/cargo.svg" alt=""/>
                                Cargos
                            </div>
                        </Link>
                        <Link to="/administrador/usuaria">
                            <div div className="item-menu">
                                <img src ="/assets/images/menu/user.svg" alt=""/>
                                Usuárias 
                            </div>
                        </Link>
                        <Link to="/administrador/denuncia">
                            <div className="item-menu" >
                                <img src ="/assets/images/menu/den.svg" alt=""/>
                                Denúncias
                            </div>
                        </Link>
                        <div className="item-menu" onClick={sair}>
                            <img src ="/assets/images/menu/Exit.svg" alt=""/>
                            SAIR
                        </div>
                    </MenuLateralStyled>
                        <div className="box-direita">
                            <BoxStyled>
                                <Switch>
                                    <Route path="/administrador/" exact={true} component={ValidarDenuncia} />
                                    <Route path="/administrador/frases/apoio" exact={true} component={apoio} />
                                    <Route path="/administrador/cargo" exact={true} component={cargos} />
                                    <Route path="/administrador/usuaria/perfil" exact={true} component={perfilUsuaria} />
                                    <Route path="/administrador/denuncia" exact={true} component={listaDenuncia} />
                                    <Route path="/administrador/usuaria" exact={true} component={usuarias} />
                                </Switch>
                            </BoxStyled>
                        </div>
                </div>
            </BrowserRouter>
        </Container>
    )
}