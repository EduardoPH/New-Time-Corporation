import { Container } from "./styled";

export default function InfoUsuaria(props) {
    console.log(props.info)
    return (
        <Container>
            <p1 style={{display: props.displayNome}}>Nome :</p1>
            <input style={{display: props.displayNome}} styletype="text" disabled value={props.info.nome}/>
            <p1>Email :</p1>
            <input type="text" disabled value={props.info.email}/>
            <p1>Telefone :</p1>
            <input type="text" disabled value={props.info.tel}/>
            <p1>CPF :</p1>
            <input typpe="text"disabled value={props.info.cpf}/>
            <button style={{display: props.displayButton}}>Alterar suas Informações </button>
        </Container>
    )
}