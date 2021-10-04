import Containerformulario from './styled.js';
import Menu from '../../../components/menu'
import React from "react";
import {Fundo} from '../../../components/commum/background/styled'
import Button from '../../../components/formulario/index'

export default function caracteristicas (){
    return(
        <Fundo height="100vh">
        <Containerformulario>
            <Menu/>
            <div class="titulo">Formulário de denúncia</div>
                <div class="pag">
                    <div class="conteudo">
                        <div class="menu-lateral"> 
                            <div class="textos-lateral"><img src="/assets/images/formulario/seta.svg" alt=""/>Caract. físicas</div>
                            <div class="textos-lateral"><img src="/assets/images/formulario/seta.svg" alt=""/>Vestimentas</div>
                            <div class="textos-lateral"><img src="/assets/images/formulario/seta.svg" alt=""/>Local</div>
                            <div class="textos-lateral"><img src="/assets/images/formulario/seta.svg" alt=""/>depoimento</div>
                        </div>

                        
                            <div class="box">
                                <div class="titulo-box">Tom de pele</div>
                                <div class="imputs">
                                    <div class="input">
                                        <input type="radio" name="" value=""/>
                                        <label for=""> Negra </label>
                                    </div>
                                    <div class="input">
                                        <input type="radio" name="" value=""/>
                                        <label for=""> Branca </label>
                                    </div>
                                    <div class="input">
                                        <input type="radio" name="" value=""/>
                                        <label for=""> Parda </label>
                                    </div>
                                    <div class="input">
                                        <input type="radio" name="" value=""/>
                                        <label for=""> Outra </label>
                                    </div>
                                    <div class="input">
                                        <input type="radio" name="" value=""/>
                                        <label for=""> Não sei </label>
                                    </div>
                                </div>
                            </div>

                            <div class="box">
                                <div class="titulo-box">Cabelo</div>
                                <div class="imputs">
                                    <div class="input">
                                        <input type="radio" name="" value=""/>
                                        <label for=""> Liso </label>
                                    </div>
                                    <div class="input">
                                        <input type="radio" name="" value=""/>
                                        <label for=""> Cacheado </label>
                                    </div>
                                    <div class="input">
                                        <input type="radio" name="" value=""/>
                                        <label for=""> Crespo </label>
                                    </div>
                                    <div class="input">
                                        <input type="radio" name="" value=""/>
                                        <label for=""> Outra </label>
                                    </div>
                                    <div class="input">
                                        <input type="radio" name="" value=""/>
                                        <label for=""> Não sei </label>
                                    </div>
                                </div>
                            </div>

                            <div class="box">
                                <div class="titulo-box">Cor do cabelo</div>
                                <div class="imputs">
                                    <div class="input">
                                        <input type="radio" name="" value=""/>
                                        <label for=""> Preto </label>
                                    </div>
                                    <div class="input">
                                        <input type="radio" name="" value=""/>
                                        <label for=""> Loiro </label>
                                    </div>
                                    <div class="input">
                                        <input type="radio" name="" value=""/>
                                        <label for=""> Ruivo </label>
                                    </div>
                                    <div class="input">
                                        <input type="radio" name="" value=""/>
                                        <label for=""> Outra </label>
                                    </div>
                                    <div class="input">
                                        <input type="radio" name="" value=""/>
                                        <label for=""> Não sei </label>
                                    </div>
                                </div>
                            </div>
                        
                    </div>

                    <div class="conteudo2">
                        <div class="informacoes">Informações complementares</div>
                        <div class="form-2">
                            <div class="textarea"><textarea name="" id="" cols="30" rows="10"></textarea></div>
                            <div class="botao"><Button valor="Avançar"/></div>
                        </div>
                    </div>  
                </div>
        </Containerformulario>
        </Fundo>
    )
}