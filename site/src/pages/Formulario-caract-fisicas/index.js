import Containerformulario from './styled.js';
import Menu from '../../components/menu'
import React from "react";

export default function Estatisticas (){
    return(
        <Containerformulario>
            <Menu/>
            <div class="titulo">Formulário de denúncia</div>
          
            <div class="conteudo">
                <div class="menu-lateral"> 
                    <div class="caracteristicas">Caract. físicas</div>
                    <div class="vestimentas">Vestimentas</div>
                    <div class="local">Local</div>
                    <div class="depoimento">depoimento</div>
                </div>

                <div class="formulario">
                    <div class="box">
                        <div class="tom-de-pele">Tom de pele</div>
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
                    <div class="cabelo">Cabelo</div>
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
                        <div class="cor-do-cabelo">Cor do cabelo</div>
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
            </div>

            <div class="conteudo2">
                <div class="informacoes">Informações complementares</div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Avançar</button>
            </div>  

        </Containerformulario>
    )
}