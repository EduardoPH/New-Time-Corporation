import styled from "styled-components";

const Container = styled.div`
    background-color: white;
    height: 100%;
    width: 100%;
    padding: 1em;
    border-radius: 4px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    position: sticky;
    text-align: center;
    justify-content: center;

    img{
        cursor: pointer;
        margin: 0.8em;
        width: 55px;
    }

    .carac {
        width: 40px;
    }

    .msg {
        width: 40px;
    }

    .local {
        margin: 0em;
        width: 70px;
    }

    .mensagem {
        display: flex;
        align-items: center;
        font-size: 1.2em;
        cursor: pointer;
        justify-content: center;

        &:hover{
            color: #FC02A0;
        }
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
    margin: 0.5em;

    .box-caracter {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .box-caracter-image img {
        width: 110px;
        height: 100px;
        margin: 0.3em;
    }
`

export {Container, BoxCaracter}