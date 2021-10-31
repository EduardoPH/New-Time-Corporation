import { Container,Container2 } from "./styled"


export default function Index (props){
    if(props.cgrafico === true){
    return(
        <Container >
        <div class="centro">
            <div class="subT">{props.titulo}</div>
            <div class="porc-img">
                <img src="/assets/images/estatisticas/porcentagem 2.svg" alt=""/>
            </div>
        </div>
        <div className="grafico">
            {props.grafico}
        </div>
    </Container> 

    )} else if(props.cgrafico === false){
        return (<Container2>
                   <div class="frases"> {props.frase} </div>
               </Container2>
    )
    }
}