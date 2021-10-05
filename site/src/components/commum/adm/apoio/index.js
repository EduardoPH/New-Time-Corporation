import BoxStyled from "./styled";
import ItemFrase from './frase-apoio/';
import Button from '../../../administrador/index';
import { useState, useEffect } from "react";

export default function Index(){

    const [eventos, setEventos] = useState([]);


    function SobreSite(){
    

        const apiResponse = [
            {
               frase: "Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas acima de tudo, seja você sempre." 
            },

            {
               frase: "A coragem não é ausência do medo; é a persistência apesar do medo." 
            },
            {
               frase: "Creia em si, mas não duvide sempre dos outros." 
            }
        ]
        setEventos(apiResponse)
    }
 
    useEffect(
        () => {SobreSite() }, [] 
    )

    return(
    <BoxStyled>
        <h1>Administrar Frases de Apoio</h1>                      
        <div className="lista-apoio">
            {eventos.map(item=> <ItemFrase frase={item.frase}/>)}
        </div>
        <div className="input-frase">
            <input type="text" placeholder="Digite uma nova frase..."/>
            <Button type="adicionar" height="50px" width="15%"/>
        </div>
    </BoxStyled>
    )
}