import Menu from '../../components/menu/index';
import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
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
                                    <div className="item-menu">
                                        <img src="../assets/images/formulario/seta.svg" alt="" />
                                        Caract. Físicas
                                    </div>
                                </Link>
                                <Link to="/formulario/vestimentas">
                                    <div className="item-menu" >
                                        <img src="../assets/images/formulario/seta.svg" alt="" />
                                        Vestimentas
                                    </div>
                                </Link>
                                <Link to="/formulario/local">
                                    <div div className="item-menu">
                                        <img src="../assets/images/formulario/seta.svg" alt="" />
                                        Local
                                    </div>
                                </Link>
                                <Link to="/formulario/depoimento">
                                    <div div className="item-menu">
                                        <img src="../assets/images/formulario/seta.svg" alt="" />
                                        Depoimento
                                    </div>
                                </Link>
                            </div>
                            <div class="botao"><Button valor="Avançar"/></div>
                        </div>
                        
                            <div className="conteudo-direita">
                                
                                <div>
                                    <Switch>
                                        <Route path="/formulario" exact={true} component={caracteristicas}/>
                                        <Route path="/formulario/vestimentas" exact={true} component={vestimentas}/>
                                        <Route path="/formulario/local" exact={true} component={local}/>
                                        <Route path="/formulario/depoimento" exact={true} component={depoimento}/>
                                    </Switch>
                                </div>
                            </div>
                    </div>
                </div>
            </BrowserRouter>
            </div>
        </Container>
        </Fundo>
    )
}