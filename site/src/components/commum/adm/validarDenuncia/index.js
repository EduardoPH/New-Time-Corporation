import BoxStyled from "./styled";

import { useState, useEffect } from "react";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Link } from "react-router-dom";

import { Loading } from "react-loading-ui";

import Caracters from "../../../../components/commum/detalhes-denuncia/caracter/";
import Map from "../../../../components/commum/map/map";

import Api from "../../../../services/adm.js";
const api = new Api();

export default function Index(props) {
  const [evento, setEvento] = useState({});
  const [denun, setDenun] = useState("");
  const [alterar, setAlterar] = useState(false);

  async function ListarValidacoes() {
    Loading({
      text: "Por Favor Aguarde",
      title: "CARREGANDO",
      theme: "dark",
      topBar: true,
      topBarColor: "red",
    });
    let r = await api.ListaValidacoes();
    console.log(r)
    setEvento(r)
    console.log(evento)
    Loading();
  }

  const excluir = async () => {
    confirmAlert({
      title: "Remover Denúncia",
      message: `Tem certeza que deseja remover esta denúncia `,
      buttons: [
        {
          label: "Sim",
          onClick: async () => {
            await api.deletarDen(evento[0].id_denuncia);
            toast("Denúncia Apagada");
          },
        },
        { label: "Não" },
      ],
    });
  };

  async function Validar() {
    let r = await api.AtivarDenun(evento[0].id_denuncia, denun);

    if (r.erro) {
      toast.error(r.erro);
    } else {
      toast.success("Cadastrada com sucesso");
    }

  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect( ListarValidacoes() ,[]);
  return (
    <BoxStyled>
      <ToastContainer />
      <h1>Validar Denúncia</h1>
      <div className="box-denuncia">
        <div className="cabecalho">
          <img src="/assets/images/denuncias-recentes/Perfil.png" alt="" />
            <div className="informacoes-usuaria">
              <p1>   {evento.id_usuario_infoc_ntc_usuario.nome} </p1>
              <span> {evento.id_usuario_infoc_ntc_usuario.email} </span>
              <span> {evento.id_usuario_infoc_ntc_usuario.telefone} </span>
              <Link
                to={{
                  pathname: "/administrador/usuaria/perfil",
                  state: evento,
                }}
              >
                <button> Perfil</button>
              </Link>
            </div>
        </div>
        <Carousel responsive={responsive}>
          <textarea
            value={denun}
            disabled={alterar === false ? true : false}
            onChange={(e) => setDenun(e.target.value)}
          />
          <Caracters className="carateristicas" />
          <div className="map">
            <Map className="mapas" />
          </div>
        </Carousel>
        <div className="btms-acoes">
          <button className="alt" onClick={() => setAlterar(!alterar)}>
            Alterar
          </button>
          <button className="excluir" onClick={() => excluir()}>
            Excluir
          </button>
          <button className="adicionar" onClick={() => Validar()}>
            adicionar
          </button>
        </div>
      </div>
    </BoxStyled>
  );
}
