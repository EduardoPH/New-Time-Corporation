import Containerformulario from './styled.js';
import Menu from '../../../components/menu'
import {Fundo} from '../../../components/commum/background/styled'
import React from "react";
import Button from '../../../components/formulario/index'

export default function depoimento (){
    return(
        <Fundo height="100vh">
        <Containerformulario>
            <Menu/>
            <div class="titulo">Formulário de denúncia</div>
            <div class="tudo">
                <div class="pag">
                    <div class="conteudo">
                        <div class="menu-lateral"> 
                            <div class="textos-lateral"><img src="/assets/images/formulario/seta.svg" alt=""/>Caract. físicas</div>
                            <div class="textos-lateral"><img src="/assets/images/formulario/seta.svg" alt=""/>Vestimentas</div>
                            <div class="textos-lateral"><img src="/assets/images/formulario/seta.svg" alt=""/>Local</div>
                            <div class="textos-lateral"><img src="/assets/images/formulario/seta.svg" alt=""/>depoimento</div>
                        </div>  
                        <div class="botao"><Button valor="Avançar"/> </div>  
                    </div>

                    <div class="conteudo2">
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
                </div>

                
        </Containerformulario>
        </Fundo>
    )
}