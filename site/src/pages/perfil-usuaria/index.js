import { Container } from "./styled";
import Menu from "../../components/menu";
export default function PerfilUsuaria() {
  return (
    <Container>
      <Menu />
      <div className="corpo-central">
        <h1>Perfil da Usuária</h1>
        <div className="box">
          <div className="cabecalho">
            <div className="infos-usuarias">
              <img src="/assets/images/denuncias-recentes/Perfil.png" alt="" />
              <p1>Usuária 5456486</p1>
            </div>
            <h2>Denúncias</h2>
            <button> Sair da Conta </button>
          </div>
          <div className="parte-final-box">
            <div className="informas">
              <p1>Email :</p1>
              <input type="text" disabled value="teste@gamil" />
              <p1>Telefone :</p1>
              <input type="text" disabled value="teste@gamil" />
              <p1>CPF :</p1>
              <input typpe="text" disabled value="teste@gamil" />
              <button>Alterar suas Informações </button>
            </div>
            <div className="denunciasCadastradas">
              <div className="item-denun">
                <div className="lado-esquerdo">
                  <p1>
                    HHiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiidddddddddd
                  </p1>

                  <div className="btms">
                    <button className="alterar">Alterar</button>
                    <button className="excluir">excluir</button>
                  </div>
                </div>
                <div className="lado-direito">
                  <p1>45/465/654</p1>
                  <p2> Ver mais...</p2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
