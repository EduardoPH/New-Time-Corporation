
import Button from '../../../../administrador/index';
import Container from './styled';
export default function index(props) {
    
    return (
        <Container>
            <p1>
                {props.frase.frase}
            </p1>
            <div className="btm-acao">
                <Button type='alterar'  height="25px" font="12px" />
                <Button type='excluir' height="25px" font="12px" />
            </div>
        </Container>
    )
}