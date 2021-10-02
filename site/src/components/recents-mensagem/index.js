import { Container } from "./styled";
import { Link } from "react-router-dom";

export default function Mensagem() {
  return (
    <Container>
      <div className="pt1-msg">
        <img src="/assets/images/denuncias-recentes/Perfil.png" alt="" />
      </div>
      <div className="pt2-msg">
        <div className="name-user"> user27562</div>
        <div className="ct-msg">
          <img
            className="setinha"
            src="/assets/images/denuncias-recentes/Setinha.png"
            alt=""
          />
          <div className="caixa-msg">
            <div className="mensagem">
              {" "}
              interesses e que figura no declaração da testemunha ou da parte
              sobre determinado fato, do qual tem conhecimento ou que se
              relacione com seus interesses e que figura no processo como prova
              testemunhal{" "}
            </div>
            <Link to="/denuncia-details" style={{ textDecoration: "none" }}>
              {" "}
              <div className="ver-mais-dt"> Ver mais...</div>{" "}
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
