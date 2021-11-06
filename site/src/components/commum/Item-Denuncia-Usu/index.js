import { Container } from "./styled";


export default function ItemDenuncia(props) {
    const item = props.info
    function dataFormatada(){
        var data = new Date(item.data),
            dia  = data.getDate().toString(),
            diaF = (dia.length === 1) ? '0'+dia : dia,
            mes  = (data.getMonth()+1).toString(), 
            mesF = (mes.length === 1) ? '0'+mes : mes,
            anoF = data.getFullYear();
        return diaF+"/"+mesF+"/"+anoF;
    }
    function excluir(id){
        props.ex(id)
    }
    function alterar(denun) {
        props.alt(denun)
    }
    if(props.tipo === false){
        return (
            <Container>
                <div className="lado-esquerdo">
                    <p1>{item.depoimento}</p1>
                    <div className="btms">
                        <button className="alterar" onClick={() => alterar(item)}>Alterar</button>
                        <button className="excluir" onClick={() => excluir(item.id)}>Excluir</button>
                    </div>
                </div>
                <div className="lado-direito">
                    <p1>{dataFormatada()}</p1>
                    <p2> Ver mais...</p2>
                </div>
            </Container>
        )
    } else {
        return(
            <Container>
                <div className="lado-esquerdo">
                    <p1>{item.depoimento}</p1>
                    <div className="btms">
                        <button className="alterar" onClick={() => alterar(item)}>Alterar</button>
                        <button className="excluir" onClick={() => excluir(item.id)}>Excluir</button>
                    </div>
                </div>
                <div className="lado-direito">
                    <p1>{dataFormatada()}</p1>
                    <p2> Ver mais...</p2>
                </div>
            </Container>
        )
    }
}