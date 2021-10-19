import Containerformulario from './styled.js';
import React from "react";
import { useState } from "react";


export default function Vestimentas (props){
    const [parteCima, setparteCima] = useState([]);
    const [parteBaixo, setparteBaixo] = useState([]);
    const [calcado, setcalcado] = useState([]);
    const [complemento, setComplemento] = useState([]);

    return(
        <Containerformulario>
                <div class="pag">
                    <div class="conteudo">

                            <div class="box">
                                <div class="titulo-box">Parte de cima</div>
                                <div class="imputs">
                                    <div class="input">
                                        <input onClick={() => setparteCima("Moletom")} type="radio" name="base1" value=""/>
                                        <label for=""> Moletom </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setparteCima("Camisa")} type="radio" name="base1" value=""/>
                                        <label for=""> Camisa </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setparteCima("Regata")} type="radio" name="base1" value=""/>
                                        <label for=""> Regata </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setparteCima("Outra")} type="radio" name="base1" value=""/>
                                        <label for=""> Outra </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setparteCima("Não sei")} type="radio" name="base1" value=""/>
                                        <label for=""> Não sei </label>
                                    </div>
                                </div>
                            </div>

                            <div class="box">
                                <div class="titulo-box">Parte de baixo</div>
                                <div class="imputs">
                                    <div class="input">
                                        <input onClick={() => setparteBaixo("Jeans")} type="radio" name="base2" value=""/>
                                        <label for=""> Jeans </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setparteBaixo("Moletom")} type="radio" name="base2" value=""/>
                                        <label for=""> Moletom </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setparteBaixo("Bermuda")} type="radio" name="base2" value=""/>
                                        <label for=""> Bermuda </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setparteBaixo("Outra")} type="radio" name="base2" value=""/>
                                        <label for=""> Outra </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setparteBaixo("Não sei")} type="radio" name="base2" value=""/>
                                        <label for=""> Não sei </label>
                                    </div>
                                </div>
                            </div>

                            <div class="box">
                                <div class="titulo-box">Calçado</div>
                                <div class="imputs">
                                    <div class="input">
                                        <input onClick={() => setcalcado("Tênis")} type="radio" name="base3" value=""/>
                                        <label for=""> Tênis </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setcalcado("Chinelo")} type="radio" name="base3" value=""/>
                                        <label for=""> Chinelo </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setcalcado("Descalço")} type="radio" name="base3" value=""/>
                                        <label for=""> Descalço </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setcalcado("Outra")} type="radio" name="base3" value=""/>
                                        <label for=""> Outra </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setcalcado("Não sei")} type="radio" name="base3" value=""/>
                                        <label for=""> Não sei </label>
                                    </div>
                                </div>
                            </div>
                        
                    </div>

                    <div class="conteudo2">
                        <div class="informacoes">Informações complementares</div>
                        <div class="form-2">
                        <div class="textarea"><textarea value={complemento} onChange={ e => setComplemento(e.target.value)} name="" id="valor" cols="30" rows="10"></textarea></div>
                        </div>
                        <div>{parteCima}</div>
                        <div>{parteBaixo}</div>
                        <div>{calcado}</div>
                        <div>{complemento}</div>
                    </div>  
                </div>
        </Containerformulario>
    )
}