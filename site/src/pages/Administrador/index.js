import Menu from '../../components/menu/index';
import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Container, MenuLateralStyled, BoxStyled } from './styled';

import ValidarDenuncia from '../../components/commum/adm/validarDenuncia/';
import apoio from '../../components/commum/adm/apoio/';
import cargos from '../../components/commum/adm/cargos/';
import listaDenuncia from '../../components/commum/adm/listaDenuncia/';
import perfilUsuaria from '../../components/commum/adm/perfilUsuaria/';
import usuarias from '../../components/commum/adm/usuarias/';

export default function Administrador(props){
    const [eventos, setEventos] = useState([
        {
            nome: "ludiarne",
            email: "luane@gamil.com",
            tel: "11 9999-9999",
            cpf: "6545645464",
            data: "22020-25-25",
            denuncia: "Os conceitos de Indústria Cultural e Cultura de Massa foram cunhados pela famosa Escola de Frankfurt, na Alemanha. ... A Cultura de Massa é produzida pela Indústria Cultural, ou seja, um conjunto de grandes empresas que pertencem à classe dominante que tem por objetivo produzir cultur"
        },
        {
            nome: "ludiarne2",
            email: "luane@gamil.com",
            tel: "11 9999-9999",
            cpf: "6545645464",
            data: "22020-25-25",
            denuncia: "Os conceitos de Indústria Cultural e Cultura de Massa foram cunhados pela famosa Escola de Frankfurt, na Alemanha. ... A Cultura de Massa é produzida pela Indústria Cultural, ou seja, um conjunto de grandes empresas que pertencem à classe dominante que tem por objetivo produzir cultur"
        },
        {
            nome: "ludiarn3e",
            email: "luane@gamil.com",
            tel: "11 9999-9999",
            cpf: "6545645464",
            data: "22020-25-25",
            denuncia: "Os conceitos de Indústria Cultural e Cultura de Massa foram cunhados pela famosa Escola de Frankfurt, na Alemanha. ... A Cultura de Massa é produzida pela Indústria Cultural, ou seja, um conjunto de grandes empresas que pertencem à classe dominante que tem por objetivo produzir cultur"
        }
    ]);
    
    return(
        <Container>
            <Menu/>
            <BrowserRouter>
                <div className="boxs">
                    <MenuLateralStyled>
                        <Link to="/administrador">
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
                    </MenuLateralStyled>
                    
                        <div className="box-direita">
                            
                            <BoxStyled>
                                <Switch>
                                    <Route path="/administrador" exact={true} render={() =><ValidarDenuncia info={eventos[0]}/>} />
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