export default function index(props) {
    return (
        <Container>
        <div className="item-frase">
            <p1>
                {props.frase}
            </p1>
            <div className="btm-acao">
                <Button type='alterar' height="25px" font="12px" />
                <Button type='excluir' height="25px" font="12px" />
            </div>
        </div>
        </Container>
    )
}