import InfoUsuaria from "../../Info-Usuaria/";
import ItemDenuncia from "../../Item-Denuncia-Usu";

import { Loading } from 'react-loading-ui';
import { useHistory } from "react-router";
import { confirmAlert } from "react-confirm-alert";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";


import "react-confirm-alert/src/react-confirm-alert.css";
import "react-toastify/dist/ReactToastify.css";

import Api from "../../../../services/adm.js";
const api = new Api();

export default function Index(props) {
  
  const navegacao = useHistory();
  
  const [usuario, setUsuario] = useState();
  const [denuncias, setDenuncias] = useState([]);
  const [id, setId] = useState(props.location.state.idUsu)
  
   async function ListarD(){
    let r = await api.BuscarDenuncia(props.location.state.idUsu);
    setDenuncias(r)
  }

  async function buscarUsu() {
    let r = await api.BuscarUsu(props.location.state.idUsu)
    setUsuario(r)
  }


  const excluir = async () => {
    confirmAlert({
      title: "Remover Usuaria",
      message: `Tem certeza que deseja remover  ${usuario.id_usuario_infoc_ntc_usuario.nm_usuario}`,
      buttons: [
        {
          label: "Sim",
          onClick: async () => {
            let r = await api.deletarUsu(usuario.id_usuario);
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

  useEffect( () => {

  })


  return (
    <div style={{ width: "100%" }}>
      <ToastContainer />
      <div className="box-infor-user">
        <InfoUsuaria info={usuario} displayButton="none" />
        <div className="denunciasCadastradas">
            {denuncias.map((i) => (
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
            onClick={() => excluir(usuario.id_usuario)}
          >
            Excluir Conta
          </button>
        </div>
      </div>
    </div>
  );
}
