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
            <div class="titulo">Formulário de Denúncia</div>
            <BrowserRouter>
                <div className="conteudo">
                    <div className="boxs">
                        <div className="conteudo-esquerda">
                            <div class="menu-lateral">
                                <Link to="/caracteristicas/">
                                    <div className="item-menu">
                                        <img src="" alt=""/>
                                        > Caract. Físicas
                                    </div>
                                </Link>
                                <Link to="/vestimentas/">
                                    <div className="item-menu"  >
                                        <img src ="" alt=""/>
                                        > Vestimentas
                                    </div>
                                </Link>
                                <Link to="/local/">
                                    <div div className="item-menu">
                                        <img src ="" alt=""/>
                                        > Local
                                    </div>
                                </Link>
                                <Link to="/administrador/usuaria">
                                    <div div className="item-menu">
                                        <img src ="" alt=""/>
                                        > Depoimento
                                    </div>
                                </Link>
                            </div>
                            <div class="botao"><Button valor="Avançar"/></div>
                        </div>
                        
                            <div className="conteudo-direita">
                                
                                <div>
                                    <Switch>
                                        <Route path="/caracteristicas/" exact={true} component={caracteristicas}/>
                                        <Route path="/vestimentas/" exact={true} component={vestimentas}/>
                                        <Route path="/local/" exact={true} component={local}/>
                                        <Route path="/depoimento/" exact={true} component={depoimento}/>
                                    </Switch>
                                </div>
                            </div>
                    </div>
                </div>
            </BrowserRouter>
        </Container>
        </Fundo>
    )
}