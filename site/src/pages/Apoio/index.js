import ContainerApoio from './styled.js';
import Menu from '../../components/menu'
import React, {useState, useEffect} from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Caixa from '../../components/commum/item-carrossel'


export default function Apoio (){

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
        <ContainerApoio>
            <Menu/>
            <div class="oi">
            <div class="titulo">ligue 180 - violência doméstica / 100 - direitos humanos</div>
            
            <div class="carrousel1">
                <Carousel autoPlay infiniteLoop>
                    {eventos.map(i => <Caixa frase = {i.frase} cgrafico = {false}/>)}
                </Carousel>
                </div>
            </div>
        </ContainerApoio>



    )
}
