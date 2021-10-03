import styled from 'styled-components'


const Container = styled.div `
    display:flex;
    flex-direction: column;
 
    background:url(${'../assets/images/estatisticas/fundo.svg'});
    background-size: cover;
    height: 100%;
    width: 100%;
    color: white;
    font-family: arial;
 
    .conteudo {
        display:flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin: 3em 0em;
    }
 
    .titulo {
        display: flex;
        justify-content: center;
        font: 700 2em arial;
        margin-bottom: 0.7em;
    }
 
    .texto-1, .texto-2, .texto-3 {
        font-size: 1.8em;
    }
 
    .texto-1, .texto-2 {
        margin-bottom: 0.9em;
    }
 
    .texto-3 {
        width: 20em;
    }
 
    .formulario {
        display:flex;
        flex-direction: column;
        background-color: rgba(229, 179, 254, 0.8);
        border-radius: 14px;
        margin-top: 1em;
    }
 
    input {
        border-radius: 5px;
        width: 25em;
        height: 4em; 
        border: none;
        margin: 0em 2em 1em 2em;
        cursor: auto;
        background-color: rgb(242, 242, 242, 80%);
    }
 
    .titulo-form {
        display:flex;
        font: 100 2em arial;
        color:#7F00BF;
        justify-content: center;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
    }
 
    .gerar-nome {
        margin-left: 2.5em;
        margin-bottom: 1em;
        font-size: 1em;
        color: #3B3B3B;
        cursor:pointer;
        &:hover {text-decoration: underline};
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