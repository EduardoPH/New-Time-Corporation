import React from "react";  
import Containerformulario from './styled.js';
import { useState } from "react";
import { Link } from 'react-router-dom';
import Button from '../../../styled/buttonformulario';

export default function Caracteristicas (props){
    // eslint-disable-next-line
    const [pele, setPele] = useState([]);
    // eslint-disable-next-line
    const [cabelo, setcabelo] = useState([]);
    // eslint-disable-next-line
    const [corCabelo, setcorCabelo] = useState([]);
    // eslint-disable-next-line
    const [complemento, setComplemento] = useState([]);

    return(
        <Containerformulario>
                <div class="pag">
                    <div class="conteudo">
                        
                            <div class="box">
                                <div class="titulo-box">Tom de pele</div>
                                <div class="imputs">
                                    <div class="input">
                                        <input onClick={() => setPele("Negra")} type="radio" name="base1" value=""/>
                                        <label for=""> Negra </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setPele("Branca")} type="radio" name="base1" value=""/>
                                        <label for=""> Branca </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setPele("Parda")} type="radio" name="base1" value=""/>
                                        <label for=""> Parda </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setPele("Outra")} type="radio" name="base1" value=""/>
                                        <label for=""> Outra </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setPele("não sei")} type="radio" name="base1" value=""/>
                                        <label for=""> Não sei </label>
                                    </div>
                                </div>
                            </div>

                            <div class="box">
                                <div class="titulo-box">Cabelo</div>
                                <div class="imputs">
                                    <div class="input">
                                        <input onClick={() => setcabelo("Liso")} type="radio" name="base2" value=""/>
                                        <label for=""> Liso </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setcabelo("Cacheado")} type="radio" name="base2" value=""/>
                                        <label for=""> Cacheado </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setcabelo("Crespo")} type="radio" name="base2" value=""/>
                                        <label for=""> Crespo </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setcabelo("Outra")} type="radio" name="base2" value=""/>
                                        <label for=""> Outra </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setcabelo("Não sei")} type="radio" name="base2" value=""/>
                                        <label for=""> Não sei </label>
                                    </div>
                                </div>
                            </div>

                            <div class="box">
                                <div class="titulo-box">Cor do cabelo</div>
                                <div class="imputs">
                                    <div class="input">
                                        <input onClick={() => setcorCabelo("Preto")} type="radio" name="base3" value=""/>
                                        <label for=""> Preto </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setcorCabelo("Loiro")} type="radio" name="base3" value=""/>
                                        <label for=""> Loiro </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setcorCabelo("Ruivo")} type="radio" name="base3" value=""/>
                                        <label for=""> Ruivo </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setcorCabelo("Outra")} type="radio" name="base3" value=""/>
                                        <label for=""> Outra </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setcorCabelo("Não sei")} type="radio" name="base3" value=""/>
                                        <label for=""> Não sei </label>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div class="conteudo2">
                        <div class="informacoes">Informações complementares</div>
                        <div className="info2">
                            <textarea value={complemento} onChange={ e => setComplemento(e.target.value)} name="" id="valor" cols="30" rows="10" placeholder="Área para escrever informações complementares"></textarea>
                            <Link to="/formulario/vestimentas"><Button valor="Avançar"/></Link> 
                        </div>
                    </div> 
                </div>
        </Containerformulario>
    )
}