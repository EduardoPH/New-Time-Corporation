import styled from "styled-components";

const Container = styled.div`
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

    
        padding: 3em;


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
        flex-direction: column;
        margin-top: -2.8em;
        margin-left: 2.5em;
        border-radius: 14px;
        padding:0.5em 1em 0.5em 1em;
    }

    .rc-mensagem {
        padding-left: 3em;
        font-size: 2em;
    }
    .ver-mais {
        cursor: pointer;
        text-align: end;
    }

    .ver-mais :hover{
        text-decoration: underline;
    }

    .Mensagem-caixa {
        width: 100%;
        height: 200%;
    }
`

export {Container}