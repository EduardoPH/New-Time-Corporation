import styled from "styled-components";

const Container = styled.div`
    background-color: white;
    height: 100;
    width: 100;
    padding: 1em;
    border-radius: 7px;
    position: sticky;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-color: rgba(196, 196, 196, 0.54);;
    padding: 1em;
    border-radius: 15px ;

    .box-caracter {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .box-caracter-image img {
        width: 110px;
        height: 100px;
    }
`

export {Container, BoxCaracter}