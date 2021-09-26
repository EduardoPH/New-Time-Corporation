import Containerformulario from './styled.js';
import Menu from '../../../components/menu'
import React from "react";

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
                        <input type="text" placeholder="Buscar localização"></input>
                        <div class="mapa"><img src="/assets/images/formulario/Mapa.svg"/></div>
                    </div>
                </div>

        </Containerformulario>
    )
}