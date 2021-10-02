import styled from 'styled-components'


const Container = styled.div `
    display:flex;
    flex-direction: column;
 
    background:url(${'../assets/images/estatisticas/fundo.svg'});
    background-size: cover;
    height: 100vh;
    width: 100%;
    color: white;
    font-family: arial;
 
    .conteudo {
        display:flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
 
    .titulo {
        display: flex;
        justify-content: center;
        font-size: 2em;
        margin-bottom: 0.7em;
    }
 
    .texto-1, .texto-2, .texto-3 {
        font-size: 1.8em;
    }
 
    .texto-1, .texto-2 {
        margin-bottom: 0.5em;
    }
 
    .texto-3 {
        width: 20em;
    }
 
    .formulario {
        display:flex;
        flex-direction: column;
        align-self: center;
        background-color: rgba(229, 179, 254, 0.8);
        border-radius: 1em;
    }
 
    input {
        border-radius: 7px;
        width: 25em;
        height: 4em; 
        border: none;
        margin: 0em 2em 1em 2em;
        cursor: auto;
    }
 
    .titulo-form {
        display:flex;
        font: 700 2em Roboto;
        color:#7F00BF;
        justify-content: center;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
    }
 
    .gerar-nome {
        margin-left: 2.5em;
        margin-bottom: 1em;
        text-decoration: underline;
        font-size: 1em;
        color: #3B3B3B;
        cursor:pointer;
    }
 
    button {
        background-color:#B133FF;
        color:white;
        width: 25em;
        height: 3.5em;
        border-radius: 10px;
        border: black;
        cursor:pointer;
        &:hover {
            background-color:rgba(255, 0, 0, 0.2);
            transition: 0.3s;
        }
    }
 
    .botao {
        display: flex;
        justify-content: center;
        margin-bottom: 2em;
    }
 
    .imagem img {
        width: 80%;
    }
 
    .imagem {
        display: flex;
        justify-content: center;
    }

`

export default Container 