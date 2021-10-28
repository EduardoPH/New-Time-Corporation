import { Container } from "./styled";

export default function ItemDenuncia(props) {
    const info = props.info
    console.log(info)
    function dataAtualFormatada(){
        var data = new Date(info.dt_cadastro),
            dia  = data.getDate().toString(),
            diaF = (dia.length == 1) ? '0'+dia : dia,
            mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
            mesF = (mes.length == 1) ? '0'+mes : mes,
            anoF = data.getFullYear();
        return diaF+"/"+mesF+"/"+anoF;
    }
    return (
        <Container>
            <div className="lado-esquerdo">
                <p1>{info.ds_depoimento}</p1>
                <div className="btms">
                    <button className="alterar">Alterar</button>
                    <button className="excluir">excluir</button>
                </div>
            </div>
            <div className="lado-direito">
                <p1>{dataAtualFormatada()}</p1>
                <p2> Ver mais...</p2>
            </div>
        </Container>
    )
}