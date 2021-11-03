import Containerformulario from './styled.js';
import { useState } from "react";
import React from "react";
import { useHistory } from 'react-router-dom';
import Button from '../../../styled/buttonformulario';
import Cookies from 'js-cookie';
import { toast, ToastContainer } from 'react-toastify';

export default function Caracteristicas (props){

    const navigation = useHistory();
    const [pele, setPele] = useState(Cookies.get('dadosDenuncia') === undefined ? "" : JSON.parse(Cookies.get('dadosDenuncia')).caracteristicas.pele);
    const [cabelo, setcabelo] =  useState(Cookies.get('dadosDenuncia') === undefined ? "" : JSON.parse(Cookies.get('dadosDenuncia')).caracteristicas.cabelo);
    const [corCabelo, setcorCabelo] =  useState(Cookies.get('dadosDenuncia') === undefined ? "" : JSON.parse(Cookies.get('dadosDenuncia')).caracteristicas.corCabelo);
    const [complemento, setComplemento] =  useState(Cookies.get('dadosDenuncia') === undefined ? "" : JSON.parse(Cookies.get('dadosDenuncia')).caracteristicas.complemento);;
    
    let caracteristicas = {
        pele: pele,
        cabelo: cabelo,
        corCabelo: corCabelo,
        complemento: complemento
    }
    
    function proximaTela() {
        if(pele === '')
            return toast.error('o campo PELE deve ser preenchido')

        if(cabelo === '')
            return toast.error('o campo CABELO deve ser preenchido')
        
        if(corCabelo === '')
            return toast.error('o campo COR DE CABELO deve ser preenchido')
        
        Cookies.set('dadosDenuncia', JSON.stringify({caracteristicas: caracteristicas}))    
        navigation.push('/formulario/vestimentas')
    }

    return(
        <Containerformulario>
            <ToastContainer/>
                <div class="pag">
                    <div class="conteudo">
                            <div class="box">
                                <div class="titulo-box">Tom de pele</div>
                                <div class="imputs">
                                    <div class="input">
                                        <input onClick={() => setPele("Negra")} type="radio" name="base1" checked={pele === "Negra" ? true : false}/>
                                        <label for=""> Negra </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setPele("Branca")} type="radio" name="base1" checked={pele === "Branca" ?  true : false}/>
                                        <label for=""> Branca </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setPele("Parda")} type="radio" name="base1" checked={pele === "Parda" ?  true : false}/>
                                        <label for=""> Parda </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setPele("Outra")} type="radio" name="base1" checked={pele === "Outra" ?  true : false}/>
                                        <label for=""> Outra </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setPele("Não sei")} type="radio" name="base1" checked={pele === "Não sei" ?  true : false}/>
                                        <label for=""> Não sei </label>
                                    </div>
                                </div>
                            </div>

                            <div class="box">
                                <div class="titulo-box">Cabelo</div>
                                <div class="imputs">
                                    <div class="input">
                                        <input onClick={() => setcabelo("Liso")} type="radio" name="base2" checked={cabelo === "Liso" ?  true : false}/>
                                        <label for=""> Liso </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setcabelo("Cacheado")} type="radio" name="base2" value="" checked={cabelo === "Cacheado" ?  true : false}/>
                                        <label for=""> Cacheado </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setcabelo("Crespo")} type="radio" name="base2" value="" checked={cabelo === "Crespo" ?  true : false}/>
                                        <label for=""> Crespo </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setcabelo("Outra")} type="radio" name="base2" value="" checked={cabelo === "Outra" ?  true : false}/>
                                        <label for=""> Outra </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setcabelo("Não sei")} type="radio" name="base2" value="" checked={cabelo === "Não sei" ?  true : false}/>
                                        <label for=""> Não sei </label>
                                    </div>
                                </div>
                            </div>

                            <div class="box">
                                <div class="titulo-box">Cor do cabelo</div>
                                <div class="imputs">
                                    <div class="input">
                                        <input onClick={() => setcorCabelo("Preto")} type="radio" name="base3" checked={corCabelo === "Preto" ?  true : false}/>
                                        <label for=""> Preto </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setcorCabelo("Loiro")} type="radio" name="base3" checked={corCabelo === "Loiro" ?  true : false}/>
                                        <label for=""> Loiro </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setcorCabelo("Ruivo")} type="radio" name="base3" checked={corCabelo === "Ruivo" ?  true : false}/>
                                        <label for=""> Ruivo </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setcorCabelo("Outra")} type="radio" name="base3" checked={corCabelo === "Outra" ?  true : false}/>
                                        <label for=""> Outra </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setcorCabelo("Não sei")} type="radio" name="base3" checked={corCabelo === "Não sei" ?  true : false}/>
                                        <label for=""> Não sei </label>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div class="conteudo2">
                        <div class="informacoes">Informações complementares</div>
                        <div className="info2">
                            <textarea value={complemento} onChange={ e => setComplemento(e.target.value)} name="" id="valor" cols="30" rows="10" placeholder="Área para escrever informações complementares"></textarea>
                            <button  className="btm-avan" onClick={proximaTela} >Avançar</button> 
                        </div>
                    </div> 
                </div>
        </Containerformulario>
    )
}