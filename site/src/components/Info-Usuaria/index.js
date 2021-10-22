import { useState } from "react";
import { Container } from "./styled";

export default function InfoUsuaria(props) {
    const[ nome, setNome ] = useState(props.info.nm_usuario);
    const[ email, setEmail ] = useState(props.info.ds_email);
    const[ telefone, setTelefone ] = useState(props.info.ds_tel);
    const[ cpf, setCpf ] = useState(props.info.ds_cpf);
    const[ habilitar, setHabiltar] = useState(false);

    function alterarDados(){

    }
    return (
        <Container>
            <p1 style={{display: props.displayNome}}>Nome :</p1>
            <input style={{display: props.displayNome}} styletype="text" disabled value={nome}/>
            <p1>Email :</p1>
            <input type="text" disabled value={email}/>
            <p1>Telefone :</p1>
            <input type="text" disabled value={telefone}/>
            <p1>CPF :</p1>
            <input typpe="text"disabled value={cpf}/>
            <button onClick={alterarDados, setHabiltar(!habilitar)} style={{display: props.displayButton}}>{habilitar === false ? "Alterar suas Informações" : "Confirmar Alteração"} </button>
        </Container>
    )
}