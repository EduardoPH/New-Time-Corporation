
import Button from '../../../../administrador/index';
import BoxStyled from "./styled";

export default function Index(props){
    const info = props.info;
    function Alterar(){
        props.alterar(info)
    }
    function Excluir(){
        props.excluir(info)
    }
    return(
        <BoxStyled>
            <div className="nome-senha">
                <div className="text">
                    <p1>Nome:</p1>
                    <span>{info.nm_administrador}</span>
                </div>
                <button className="btm-alt" onClick={Alterar}>Alterar</button>
            </div>
            
            <div className="nome-senha">
                <div className="text">
                    <p1>Senha:</p1>
                    <span>{info.ds_senha}</span>
                </div>
               <button className="btm-excluir" onClick={Excluir}>Excluir</button>
            </div>
            
        </BoxStyled>
    )
}