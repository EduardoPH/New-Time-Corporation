import React from "react";
import Containerformulario from './styled.js';
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import Cookies from "js-cookie";

export default function Index (){

    let denuncia =  Cookies.get('dadosDenuncia') === undefined ? "" : JSON.parse(Cookies.get('dadosDenuncia'))

    const [parteCima, setparteCima] = useState(denuncia.vestimenta === undefined ? "" : JSON.parse(Cookies.get('dadosDenuncia')).vestimenta.parteCima);
    const [parteBaixo, setparteBaixo] = useState(denuncia.vestimenta === undefined ? "" : JSON.parse(Cookies.get('dadosDenuncia')).vestimenta.parteBaixo);
    const [calcado, setcalcado] = useState(denuncia.vestimenta === undefined ? "" : JSON.parse(Cookies.get('dadosDenuncia')).vestimenta.calcado);
    const [complemento, setComplemento] = useState(denuncia.vestimenta === undefined ? "" : JSON.parse(Cookies.get('dadosDenuncia')).vestimenta.complemento);

    const navigation = useHistory()

    function proximatela() {
    
        if(parteCima === '')
            return toast.error('o campo PARTE SUPERIOR deve ser preenchido')

        if(parteBaixo === '')
            return toast.error('o campo PARTE INFERIOR deve ser preenchido')
        
        if(calcado === '')
            return toast.error('o campo CALÇADO deve ser preenchido')
        

        let vestimentas = {
            parteCima: parteCima,
            parteBaixo: parteBaixo,
            calcado: calcado,
            complemento: complemento
        }   
 
        
        let dados = {
            caracteristicas: denuncia.caracteristicas,
            vestimenta: vestimentas,
            local: denuncia.local
        }
        Cookies.set('dadosDenuncia', JSON.stringify(dados))  
        navigation.push('/formulario/local')
    }



    return(
        <Containerformulario>
            <ToastContainer/>
                <div class="pag">
                    <div class="conteudo">

                            <div class="box">
                                <div class="titulo-box">Parte de cima</div>
                                <div class="imputs">
                                    <div class="input">
                                        <input onClick={() => setparteCima("Moletom")} type="radio" name="base1" checked={parteCima === "Moletom" ?  true : false}/>
                                        <label for=""> Moletom </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setparteCima("Camisa")} type="radio" name="base1" checked={parteCima === "Camisa" ?  true : false}/>
                                        <label for=""> Camisa </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setparteCima("Regata")} type="radio" name="base1" checked={parteCima === "Regata" ?  true : false}/>
                                        <label for=""> Regata </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setparteCima("Outra")} type="radio" name="base1" checked={parteCima === "Outra" ?  true : false}/>
                                        <label for=""> Outra </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setparteCima("Não sei")} type="radio" name="base1" checked={parteCima === "Não sei" ?  true : false}/>
                                        <label for=""> Não sei </label>
                                    </div>
                                </div>
                            </div>

                            <div class="box">
                                <div class="titulo-box">Parte de baixo</div>
                                <div class="imputs">
                                    <div class="input">
                                        <input onClick={() => setparteBaixo("Jeans")} type="radio" name="base2"checked={parteBaixo === "Jeans" ?  true : false}/>
                                        <label for=""> Jeans </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setparteBaixo("Moletom")} type="radio" name="base2" checked={parteBaixo === "Moletom" ?  true : false}/>
                                        <label for=""> Moletom </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setparteBaixo("Bermuda")} type="radio" name="base2"checked={parteBaixo === "Bermuda" ?  true : false}/>
                                        <label for=""> Bermuda </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setparteBaixo("Outra")} type="radio" name="base2" checked={parteBaixo === "Outra" ?  true : false}/>
                                        <label for=""> Outra </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setparteBaixo("Não sei")} type="radio" name="base2" checked={parteBaixo === "Não sei" ?  true : false}/>
                                        <label for=""> Não sei </label>
                                    </div>
                                </div>
                            </div>

                            <div class="box">
                                <div class="titulo-box">Calçado</div>
                                <div class="imputs">
                                    <div class="input">
                                        <input onClick={() => setcalcado("Tênis")} type="radio" name="base3" checked={calcado === "Tênis" ?  true : false}/>
                                        <label for=""> Tênis </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setcalcado("Chinelo")} type="radio" name="base3" checked={calcado === "Chinelo" ?  true : false}/>
                                        <label for=""> Chinelo </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setcalcado("Descalço")} type="radio" name="base3" checked={calcado === "Descalço" ?  true : false}/>
                                        <label for=""> Descalço </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setcalcado("Outra")} type="radio" name="base3" checked={calcado === "Outra" ?  true : false}/>
                                        <label for=""> Outra </label>
                                    </div>
                                    <div class="input">
                                        <input onClick={() => setcalcado("Não sei")} type="radio" name="base3" checked={calcado === "Não sei" ?  true : false}/>
                                        <label for=""> Não sei </label>
                                    </div>
                                </div>
                            </div>
                        
                    </div>

                    <div class="conteudo2">
                        <div class="informacoes">Informações complementares</div>
                        <div className="info2">
                            <textarea onChange={ (e) => setComplemento(e.target.value)} value={complemento} name="" id="valor" cols="30" rows="10" placeholder="Área para escrever informações complementares"/>
                            <button  className="btm-avan" onClick={proximatela}>Avançar</button>
                        </div>
                    </div>  
                </div>
        </Containerformulario>
    )
}