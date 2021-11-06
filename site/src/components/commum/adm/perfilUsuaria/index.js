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
  
  const [usuario, setUsuario] = useState('');
  const [denuncias, setDenuncias] = useState([]);
  const [id] = useState(props.location.state.idUsu)

  
  async function ListarD(){
    Loading({
      text: "Por Favor, Aguarde",
      title: "CARREGANDO",
      theme: "dark",
      topBar: true,
      topBarColor: 'red'
    });

    let r = await api.BuscarDenuncia(id);
    setDenuncias(r)

    Loading()
  }
  async function buscarUsu() {
    let r = await api.BuscarUsu(id)
    setUsuario(r)
  }

  const excluir = async (id) => {
    confirmAlert({
      title: "Remover Usuaria",
      message: `Tem certeza que deseja remover  ${usuario.nome}?`,
      buttons: [
        {
          label: "Sim",
          onClick: async () => {
            let r = await api.deletarUsu(id);
            if (r.erro) {
              toast.error(r.erro);
            } else {
              toast.success("Excluído com sucesso");
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
      title: "Remover Usuária",
      message: `Tem certeza que deseja remover denúncia?`,
      buttons: [
        {
          label: "Sim",
          onClick: async () => {
            let r = await api.deletarDen(id);
            if (r.erro) {
              toast.error(r.erro);
            } else {
              toast.success("Excluído com sucesso");
            }
            ListarD(); 
          },
        },
        { label: "Não" },
      ],
    });
  };

  function alterarDenun(denun) {
    navegacao.push({
      pathname: "/administrador",
      state: {...denun, id_usuario_infoc_ntc_usuario: usuario }
    })
  } 

  useEffect( () => {
    ListarD(); buscarUsu()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div style={{ width: "100%" }}>
      <ToastContainer />
      <div className="box-infor-user" style={{maxHeight: '80vh'}}>
        <InfoUsuaria info={usuario} displayButton="none" />
        <div className="denunciasCadastradas">
            {denuncias.map((i) => (
                  <ItemDenuncia ex={excluirDenu} alt={alterarDenun} info={i} />
              ))}
          <button
            className="btm-excluir"
            style={{
              height: "5em",
              width: '100%',
              background: "red",
              border: "solid",
              color: "white",
              borderRadius: "13px",
              cursor: "pointer",
            }}
            onClick={() => excluir(usuario.idUsu)}
          >
            Excluir Conta
          </button>
        </div>
      </div>
    </div>
  );
}
