import Containerformulario from './styled.js';
import Menu from '../../../components/menu'
import {Fundo} from '../../../components/commum/background/styled'
import React from "react";
import  Mapa  from '../../../components/map/map';
import Button from '../../../components/formulario/index';
import { Link } from 'react-router-dom';


export default function Local (){
    return(
        <Fundo height="100vh">
        <Containerformulario>
            <Menu/>
                <div class="titulo">Formulário de denúncia</div>
                <div class="conteudo">
                    <div class="conteudo-left">
                        <div class="menu-lateral"> 
                            <div class="textos-lateral"><img src="/assets/images/formulario/seta.svg" alt=""/>Caract. físicas</div>
                            <div class="textos-lateral"><img src="/assets/images/formulario/seta.svg" alt=""/>Vestimentas</div>
                            <div class="textos-lateral"><img src="/assets/images/formulario/seta.svg" alt=""/>Local</div>
                            <div class="textos-lateral"><img src="/assets/images/formulario/seta.svg" alt=""/>depoimento</div>
                        </div>
                        <Link to="/formulario4"><div class="botao"><Button valor="Avançar"/></div></Link>
                    </div>
                    <div class="conteudo-right">
                        <div class="titulo-local">Área Localizada</div>
                        <div class="mapa"><Mapa /></div>
                    </div>
                </div>

        </Containerformulario>
        </Fundo>
    )
}