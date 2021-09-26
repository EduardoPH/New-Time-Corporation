import Containerformulario from './styled.js';
import Menu from '../../../components/menu'
import React from "react";

export default function vestimentas (){
    return(
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
                                <div class="titulo-box">Parte de cima</div>
                                <div class="imputs">
                                    <div class="input">
                                        <input type="radio" name="" value=""/>
                                        <label for=""> Moletom </label>
                                    </div>
                                    <div class="input">
                                        <input type="radio" name="" value=""/>
                                        <label for=""> Camisa </label>
                                    </div>
                                    <div class="input">
                                        <input type="radio" name="" value=""/>
                                        <label for=""> Regata </label>
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
                                <div class="titulo-box">Parte de baixo</div>
                                <div class="imputs">
                                    <div class="input">
                                        <input type="radio" name="" value=""/>
                                        <label for=""> Jeans </label>
                                    </div>
                                    <div class="input">
                                        <input type="radio" name="" value=""/>
                                        <label for=""> Moletom </label>
                                    </div>
                                    <div class="input">
                                        <input type="radio" name="" value=""/>
                                        <label for=""> Bermuda </label>
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
                                <div class="titulo-box">Calçado</div>
                                <div class="imputs">
                                    <div class="input">
                                        <input type="radio" name="" value=""/>
                                        <label for=""> Tênis </label>
                                    </div>
                                    <div class="input">
                                        <input type="radio" name="" value=""/>
                                        <label for=""> Chinelo </label>
                                    </div>
                                    <div class="input">
                                        <input type="radio" name="" value=""/>
                                        <label for=""> Descalço </label>
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
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                            <button>Avançar</button>
                        </div>
                    </div>  
                </div>
        </Containerformulario>
    )
}