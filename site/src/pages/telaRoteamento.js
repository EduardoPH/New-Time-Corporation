import { Link } from "react-router-dom"
import Container from './styled-rout'
export default function TelaRoteamento(){
    return(
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
            <Link to="/formulario"> Parte 1 - Formulario </Link>
        </Container>
    )
}