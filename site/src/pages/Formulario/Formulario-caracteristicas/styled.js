import styled from 'styled-components';

const  Containerformulario = styled.div `
    display:flex;
    flex-direction: column;
    background:url(${'/assets/images/estatisticas/fundo.svg'});
    background-size: cover;
    height: 100vh;
    width: 100%;

    .pag {
        display: flex;
        align-self: center;
        background-color: rgb(255, 255, 255, 40%);
        border-radius: 1.2em;
        flex-direction: column;
        margin-top: 1.5em;
        padding: 2em;
        width: 60%;
    }
    
    .menu-lateral {
        display: flex;
        background-color: white;
        font-size: 1.5em;
        border-radius: 0.3em;
        flex-direction: column;
        align-self: center;
    }

    .textos-lateral {
        padding: 0.2em 0.3em;
        font-size: 1.4em;
    }

    .titulo {
        display: flex;
        justify-content: center;
        font-size: 3.5em;
        color: white;
    }

    .conteudo {
        display: flex;
        justify-content: space-between;
    }

    .imputs {
        display: flex;
        flex-direction: column;
    }

    .titulo-box, .input {
        font-size: 1.8em;
    }

    .form-2 {
        display: flex;
        align-items: center;
    }

    textarea {
        width: 50em;
        height: 15em; 
        border-radius: 0.6em;
        border: none;
        resize: none;
    }

    button {
        padding: 0.5em 1em;
        border: none;
        border-radius: 2em;
        font-size: 2em;
        background-color: #FC02A0;
        color: white;
    }

    .form-2 {
        display: flex;
        justify-content: space-between;
    }

    .informacoes {
        font-size: 1.8em;
        margin: 1em 0em;
        color: #FC02A0;
    }
`
export default Containerformulario;
