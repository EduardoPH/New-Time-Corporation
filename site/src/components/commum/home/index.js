import { Conteiners } from "./styled";

export default function index(props) {
  return (
    <Conteiners>
      <div className="titulo">
        <div className="titu">{props.titulo}</div>
        <div className="imagem">
          <img src={props.imagem} alt="" />
        </div>
      </div>

      <div className="legenda"> {props.legenda} </div>
    </Conteiners>
  );
}
