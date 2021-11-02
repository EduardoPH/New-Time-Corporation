
import Container from "./styled.js";
import Menu from "../../components/commum/menu";

import "react-toastify/dist/ReactToastify.css";

import Cookies from "js-cookie";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Fundo } from "../../components/styled/background/styled";
import { Inputs, Buttons } from "../../components/styled/buttonlogin-cadastro/index.js";

import Api from "../../services/usuario.js";
const api = new Api();

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");

  const navigation = useHistory();

  function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  async function cadastrar() {
    let r = await api.cadastro(nome, email, senha, telefone, cpf);

    if (r.erro) {
      toast.error(r.erro);
    } else {
      Cookies.set("usuariaLogada", JSON.stringify(r));
      navigation.push('/perfil')
    }
  }
  return (
    <Fundo height="100vh">
      <ToastContainer />
      <Container>
        <Menu />
        <div className="conteudo">
          <div className="left-conteudo">
            <div className="imagem">
              <img src="../assets/images/cadastro/img-cadastro.svg" alt="" />
            </div>
            <div className="textos">
              <div className="titulo">No Cadastro:</div>
              <div className="texto-1">
                Mantemos seus dados totalmente seguros
              </div>
              <div className="texto-2">
                Geramos uma identidade anônima para você
              </div>
              <div className="texto-3">
                Mantemos de forma discreta nossas Ligações, não precise se
                preocupar, pois ligaremos como uma empresa a oferecer um
                contrato de serviço
              </div>
            </div>
          </div>
          <div className="formulario">
            <div className="titulo-form">Cadastro</div>
            <Inputs
              value={nome}
              valor={(valor) => setNome(valor)}
              place="Digite seu nome de Usuário..."
            />
            <div
              className="gerar-nome"
              onClick={() => setNome("usuaria" + numeroAleatorio(0, 999))}
            >
              Gerar nome de Usuário
            </div>
            <Inputs
              value={telefone}
              valor={(valor) => setTelefone(valor)}
              place="Digite seu numero para contato..."
            />
            <Inputs
              value={email}
              valor={(valor) => setEmail(valor)}
              place="Digite seu email..."
            />
            <Inputs
              value={senha}
              valor={(valor) => setSenha(valor)}
              place="Digite sua senha..."
            />
            <Inputs
              value={cpf}
              valor={(valor) => setCpf(valor)}
              place="Digite seu CPF... (opcional)"
            />
            <div className="botao">
              <Buttons clicado={cadastrar} valor="Cadastrar" width="25em" />
            </div>
          </div>
        </div>
      </Container>
    </Fundo>
  );
}
