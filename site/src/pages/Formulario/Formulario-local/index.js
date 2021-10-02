import Containerformulario from './styled.js';
import Menu from '../../../components/menu'
import React from "react";
import  Mapa  from '../../../components/map/map';

export default function Local (){
    return(
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
                        <div class="botao"><button>Avançar</button></div>
                    </div>
                    <div class="conteudo-right">
                        <div class="titulo-local">Área Localizada</div>
                        <div class="mapa"><Mapa /></div>
                    </div>
                </div>

        </Containerformulario>
    )
}