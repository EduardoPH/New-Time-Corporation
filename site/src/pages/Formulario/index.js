import Menu from '../../components/menu/index';
import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Link, useHistory } from "react-router-dom";
import { Container } from './styled';
import {Fundo} from '../../components/commum/background/styled'
import Button from '../../components/formulario/';

import caracteristicas from '../../components/commum/formulario/caracteristicas'
import vestimentas from '../../components/commum/formulario/vestimentas'
import local from '../../components/commum/formulario/local'
import depoimento from '../../components/commum/formulario/depoimento'

export default function Administrador(){
    return(
        <Fundo height="100vh">
        <Container>
            <Menu/>
            <div className="pag2">
            <div class="titulo">Formulário de Denúncia</div>
            <BrowserRouter>
                <div className="conteudo">
                    <div className="boxs">
                        <div className="conteudo-esquerda">
                            <div class="menu-lateral">
                                <Link to="/formulario">
                                    <div className="item-lateral">
                                        <div className="textos-lateral"> Caracteristicas <br/> Físicas </div>
                                        <img width="35px" src="/assets/images/formulario/face.png" alt=""></img>
                                    </div>
                                </Link>
                                <Link to="/formulario/vestimentas">
                                    <div className="item-lateral">
                                        <div className="textos-lateral"> Vestimentas </div>
                                        <img width="40px" src="/assets/images/formulario/shirt.png" alt=""></img>
                                    </div>
                                </Link>
                                <Link to="/formulario/local">
                                    <div className="item-lateral">
                                        <div div className="textos-lateral"> Local </div>
                                        <img width="60px" style={{"margin-top":"-11px", "margin-bottom":"-11px"}} src="/assets/images/formulario/location.svg" alt=""></img>
                                    </div>
                                </Link>
                                <Link to="/formulario/depoimento">
                                    <div className="item-lateral">
                                        <div div className="textos-lateral"> Depoimento </div>
                                        <img width="40px" src="/assets/images/formulario/depoimento.svg" alt=""></img>
                                    </div>
                                </Link>
                            </div>
                            
                        </div>
                        
                            <div className="conteudo-direita">
                                <Switch>
                                    <Route path="/formulario" exact={true} component={caracteristicas}/>
                                    <Route path="/formulario/vestimentas" exact={true} component={vestimentas}/>
                                    <Route path="/formulario/local" exact={true} component={local}/>
                                    <Route path="/formulario/depoimento" exact={true} component={depoimento}/>
                                </Switch>
                            </div>
                    </div>
                </div>
            </BrowserRouter>
            </div>
        </Container>
        </Fundo>
    )
}