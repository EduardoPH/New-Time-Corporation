
import Button from '../../../../administrador/index';
import BoxStyled from "./styled";

export default function Index(props){
    return(
        <BoxStyled>
            <div className="nome-senha">
                <div className="text">
                    <p1>Nome:</p1>
                    <span>{props.info.nome}</span>
                </div>
                <Button type="alterar" height="27px" width="6em" font="0.8em"/>
            </div>
            
            <div className="nome-senha">
                <div className="text">
                    <p1>Senha:</p1>
                    <span>{props.info.senha}</span>
                </div>
                <Button type="excluir" height="27px" width="6em" font="0.8em"/>
            </div>
            
        </BoxStyled>
    )
}