import { Conteiners } from "./styled";
import HomeCase from '../HomeCase';

import { useState } from "react";



export default function HomeC() {
    const [eventos, setEventos] = useState([]);


    function SobreSite(){

         

        const apiResponse = [
            {
                titulo: "Apoio" , descricao:"Nos preocupamos com todas as mulheres, por isso trouxemos uma coletânea de frases e apoio psicológico." ,  imagem:"../../../assets/images/home/apoio.svg" 
            },
            {
                titulo: "Estatísticas" , descricao:"Com nossos dados é possível montarmos estatíticas para que assim facilite o levantamento de dados." ,  imagem:"../assets/images/home/estatistica.svg" 
            },
            {
                titulo: "Sistema de Denúncias" , descricao:"Trazemos um sistema de denúncias para as mulhers que sofreram qualquer forma de assédio." ,  imagem:"../assets/images/home/sistema.svg" 
            }
        ]
        setEventos(apiResponse)
    }


    return(
        <Conteiners>
           <div className="caixa-box">
               {eventos.map(item => 
                  <HomeCase titulo={item.titulo}
                  
                  descricao={item.descricao}
                    imagem={item.imagem} />
                )}
           </div>

        </Conteiners>
    )
}