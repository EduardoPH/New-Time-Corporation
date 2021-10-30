import { useState } from "react";
import { Container } from "./styled";
export default function InfoUsuaria(props) {
    console.log(props)
    const[ nome ] = useState(props);
    const[ email ] = useState(props);
    const[ telefone ] = useState(props);
    const[ cpf ] = useState(props);
    const[ habilitar, setHabiltar] = useState(false);

    function alterarDados(){
        setHabiltar(!habilitar)
    }
    return (
        <Container>
            <p1 style={{display: props.displayNome}}>Nome :</p1>
            <input style={{display: props.displayNome}} styletype="text" disabled value={nome}/>
            <p1>Email :</p1>
            <input type="text" disabled={habilitar === true? false : true}  value={email}/>
            <p1>Telefone :</p1>
            <input type="text" disabled={habilitar === true? false : true}  value={telefone}/>
            <p1>CPF :</p1>
            <input typpe="text"disabled={habilitar === true? false : true}  value={cpf}/>
            <button onClick={() => alterarDados()} style={{display: props.displayButton}}>{habilitar === false ? "Alterar suas Informações" : "Confirmar Alteração"} </button>
        </Container>
    )
}