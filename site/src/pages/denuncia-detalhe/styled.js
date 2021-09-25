import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background:url(${'/assets/images/denuncias-recentes/BACKGROUND.svg'});
    background-size: cover;
    height: 100vh;

    .titulo {
        text-align: center;
        margin: 1.5em;
        font-size: 3em;
        color: #FFF
    }

    .dt-conteudo {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 85%;
        height: 73%;
        background: rgba(127, 0, 191, 0.63);
        backdrop-filter: blur(7px);
        border-radius: 20px;
        padding: 2em;
    }
`

const Pag = styled.div`
    
`

const Caracteristicas = styled.div`

`

export {Container, Caracteristicas, Pag}