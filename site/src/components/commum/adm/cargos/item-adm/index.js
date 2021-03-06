
import BoxStyled from "./styled";

export default function Index(props){
    const info = props.info;
    function Alterar(){
        props.alterar(info)
    }
    function Excluir(){
        if(info.nome === 'master')
            return props.excluir('0')
        props.excluir(info)
    }

    return(
        <BoxStyled>
            <div className="nome-senha">
                <div className="text">
                    <p1>Nome:</p1>
                    <span>{info.nome}</span>
                </div>
                <button className="btm-alt" onClick={Alterar}>Alterar</button>
            </div>
            
            <div className="nome-senha">
                <div className="text">
                    <p1>Senha:</p1>
                    <span>{info.senha}</span>
                </div>
               <button className="btm-excluir" disabled={info.id === 9 ? true : false}onClick={Excluir}>Excluir</button>
            </div>
            
        </BoxStyled>
    )
}