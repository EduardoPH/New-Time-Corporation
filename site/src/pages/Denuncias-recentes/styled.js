import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background:url(${'/assets/images/denuncias-recentes/BACKGROUND.svg'});
    background-size: cover;
    height: 100vh;

    .rc-conteudo {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 85%;
        height: 64%;
        background: rgba(127, 0, 191, 0.63);
        backdrop-filter: blur(7px);
        border-radius: 20px;
        padding: 2em;
    }   

    .rc-titulo {
        margin: 1em 0em;
        text-align: center;
        font-size: 3em;
        color: white;
        font-family: Arial, Helvetica, sans-serif;
    }

    .rc-user {
        display: flex;
        flex-direction: row ;
        align-items: top;
    }

    .rc-name-user {
        font-size: 2em;
        color: white;
        margin-left: 0.8em;
    }

    .rc-dn {
        padding: 3em;
    }

    .rc-setinha img {
        display: flex;
        margin-top: -0.5em;
        margin-left: 1.5em;
    }

    .rc-caixa {
        background-color: white;
        height: 5em;
        min-height: 5em;
        width: 24em;
        display: flex;
        margin-top: -2.8em;
        margin-left: 2.5em;
        border-radius: 14px;
        padding: 1em;
    }

    .rc-mensagem {
        padding-left: 3em;
    }

    .rc-denuncias {
        max-height: 100%;
        overflow-y: auto;
    }



    @media (max-width: 1000px){
        transform: scale(0.8);
        .rc-denuncias{
            width: 100%;
        }

        .rc-titulo{
            font-size: 2em;
        }
        
    }

`

export {Container}