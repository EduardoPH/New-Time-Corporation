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
  
  const [info, setInfo] = useState();
  const [denun, setDenun] = useState("");
  const [alterar, setAlterar] = useState(false);

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
  
  
  async function ListarValidacoes() {
    Loading({
      text: "Por Favor, Aguarde",
      title: "CARREGANDO",
      theme: "dark",
      topBar: true,
      topBarColor: 'red'
    });

    let r = await api.ListaValidacoes();
    
    if (props.location.state !== undefined) {
      setInfo(props.location.state)
      setDenun(props.location.state.depoimento)
    } else {
      setInfo(r)
      setDenun(r.depoimento)
    }
    Loading()
  }

  console.log(info)

  async function Validar() {
    let r = await api.AtivarDenun(info.id, denun);
    if (r.erro) {
      toast.error(r.erro);
    } else {
      toast.success("Cadastrada com sucesso");
      props.location.state = undefined
      ListarValidacoes()
    }
  }

  const excluir = async () => {
    confirmAlert({
      title: "Remover Denúncia",
      message: `Tem certeza que deseja remover esta denúncia? `,
      buttons: [
        {
          label: "Sim",
          onClick: async () => {
            await api.deletarDen(info.id);
            toast("Denúncia Excluída");
            props.location.state = undefined
            ListarValidacoes()
          },
        },
        { label: "Não" },
      ],
    });
  };
  useEffect(() => {
      ListarValidacoes()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BoxStyled>
      <ToastContainer />
      <h1>Validar Denúncia</h1>

      <div className="box-denuncia">
        <div className="cabecalho">
          <img src="/assets/images/denuncias-recentes/Perfil.png" alt="" />
          
            <div className="informacoes-usuaria">
              <p1>  {info && info.id_usuario_infoc_ntc_usuario.nome} </p1>
              <span>{info && info.id_usuario_infoc_ntc_usuario.email}  </span>
              <span> {info && info.id_usuario_infoc_ntc_usuario.telefone} </span>
              <Link
                to={{
                  pathname: "/administrador/usuaria/perfil",
                  state: info,
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
          <Caracters depoimento={info && info.id_fisico_infoc_ntc_caracteristica_fisica} caracter={info && info.vestimento} className="carateristicas" />
          <div className="btma">
            <Map info={info && info.id_local_infoc_ntc_local} className="mapas" />
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
            Adicionar
          </button>
        </div>
      </div>
    </BoxStyled>
  );
}
