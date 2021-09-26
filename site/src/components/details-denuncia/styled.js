import styled from "styled-components";

const Container = styled.div`
    background-color: white;
    height: 100;
    width: 100;
    padding: 1em;
    border-radius: 7px;
    position: absolute;
    top: 40%;

    .mensagem {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 1.2em;
        text-align: start;
    }
    
    .mensagem img {
        width: auto;
        
    }
    
    .mensagem span {
        text-align: start;
    }
`

const BoxCaracter = styled.div`
    .box-caracter {
        background-color: #C4C4C4;
        
    }
`

export {Container, BoxCaracter}