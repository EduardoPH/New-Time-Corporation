
import Container from './styled';
export default function index(props) {
   const infos = props.frase;

   function Alterar(){
       props.Alterar(infos)
   }
   function Excluir(){
       props.Excluir(infos)
   }
    return (
        <Container>
            <p1>
                {infos.ds_frase}
            </p1>
            <div className="btm-acao">
                <button className="alterar" onClick={Alterar}> Alterar </button>
                <button className="excluir" onClick={Excluir}> Excluir </button>
            </div>
        </Container>
    )
}