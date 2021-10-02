import { Link } from "react-router-dom"
import Container from './styled-rout'
export default function TelaRoteamento(){
  return (
    <Container>
      <Link to="/home">HOME</Link>
      <Link to="/estatisticas">Estatisticas</Link>
      <Link to="/administrador">administrador</Link>
      <Link to="/denuncia-recentes">Denuncia Recentes</Link>
      <Link to="/denuncia-details">Denuncia Details</Link>
      <Link to="/login">Login</Link>
      <Link to="/cadastro">Cadastro</Link>
      <Link to="/perfil">Perfil</Link>
      <Link to="/apoio">Apoio</Link>
      <Link to="/map-render">Mapa-render</Link>
      <Link to="/formulario"> Parte 1 - Formulario </Link>
      <Link to="/formulario2"> Parte 2 - Formulario </Link>
      <Link to="/formulario3"> Parte 3 - Formulario</Link>
      <Link to="/formulario4"> Parte 4 - Formulario </Link>
    </Container>
  );
}