import { useEffect, useState } from "react";
import InfoUsuaria from "../../../Info-Usuaria/";
import ItemDenuncia from "../../../Item-Denuncia-Usu";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Api from "../../../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router";
const api = new Api();

export default function Index(props) {
  const navegacao = useHistory();
  const [eventos, setEventos] = useState(ListarDen());
    
  async function ListarDen() {
    let r = await api.denUsu(props.location.state.id_usuario);
    setEventos(r)
  }

  const excluir = async () => {
    confirmAlert({
      title: "Remover Usuaria",
      message: `Tem certeza que deseja remover  ${eventos.id_usuario_infoc_ntc_usuario.nm_usuario}`,
      buttons: [
        {
          label: "Sim",
          onClick: async () => {
            let r = await api.deletarUsu(eventos.id_usuario);
            if (r.erro) {
              toast.error(r.erro);
            } else {
              toast.success("Excluido com sucesso");
              navegacao.push("/administrador/usuaria");
            }
          },
        },
        { label: "Não" },
      ],
    });
  };

  const excluirDenu = async (id) => {
    confirmAlert({
      title: "Remover Usuaria",
      message: `Tem certeza que deseja remover denúncia ${id}`,
      buttons: [
        {
          label: "Sim",
          onClick: async () => {
            let r = await api.deletarDen(id);
            if (r.erro) {
              toast.error(r.erro);
            } else {
              toast.success("Excluido com sucesso");
            }
          },
        },
        { label: "Não" },
      ],
    });
  };

  return (
    <div style={{ width: "100%" }}>
      <ToastContainer />
      <div className="box-infor-user">
        <InfoUsuaria info={eventos} displayButton="none" />
        <div className="denunciasCadastradas">
          {eventos.map((i) => (
            <ItemDenuncia ex={excluirDenu} info={i} />
          ))}
          <button
            className="btm-excluir"
            style={{
              height: "25%",
              background: "red",
              border: "solid",
              color: "white",
              borderRadius: "13px",
              cursor: "pointer",
            }}
            onClick={() => excluir(eventos.id_usuario)}
          >
            Excluir Conta
          </button>
        </div>
      </div>
    </div>
  );
}
