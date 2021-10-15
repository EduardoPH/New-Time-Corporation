
import Button from '../../../../administrador/index';
import Container from './styled';
export default function index(props) {
   const infos = props.frase;
   function Teste(){
       props.Alterar(infos)
   }
   function Excluir(){
       props.Excluir(infos.id)
   }
    return (
        <Container>
            <p1>
                {infos.frase}
            </p1>
            <div className="btm-acao">
                <button className="alterar" onClick={Teste}> Alterar </button>
                <button className="excluir" onClick={Excluir}> Excluir </button>
            </div>
        </Container>
    )
}