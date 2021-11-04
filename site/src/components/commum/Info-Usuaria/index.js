import { useState } from "react";
import { Container } from "./styled";
export default function InfoUsuaria(props) {

    const[ habilitar ] = useState(false);


    
    return (
        <Container>
            <p1 style={{display: props.displayNome}}>Nome :</p1>
            <input style={{display: props.displayNome}} styletype="text" disabled value={props.info.nome}/>
            <p1>Email :</p1>
            <input type="text" disabled={habilitar === true? false : true}  value={props.info.email}/>
            <p1>Telefone :</p1>
            <input type="text" disabled={habilitar === true? false : true}  value={props.info.telefone}/>
            <p1>CPF :</p1>
            <input typpe="text"disabled={habilitar === true? false : true}  value={props.info.cpf}/>
        </Container>
    )
}