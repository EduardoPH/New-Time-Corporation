import { Container } from "./styled";

export default function ItemDenuncia(props) {
    return (
        <Container>
            <div className="lado-esquerdo">
                <p1>{props.descricao}</p1>
                <div className="btms">
                    <button className="alterar">Alterar</button>
                    <button className="excluir">excluir</button>
                </div>
            </div>
            <div className="lado-direito">
                <p1>{props.data}</p1>
                <p2> Ver mais...</p2>
            </div>
        </Container>
    )
}