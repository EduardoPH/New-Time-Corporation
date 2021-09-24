import styled from "styled-components";

const Container = styled.div`
width: 41em;
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

    .rc-box {
        position: relative;
        margin-left: 2em;
        margin-bottom: 5em;
    }

    .rc-box img {
        position: absolute;
    }

    .rc-box label {
        position: absolute;
        font-size: 1.3em;
        top: 2em;
        left: 2em;
    }

    .rc-mensagem {
        display: flex;
        flex-direction: row;
        padding-left: 1em;
        font-size: 1.5em;
        
    }

    .ver-mais {
        position: absolute;
        cursor: pointer;
        text-align: end;
        margin-top: 6em;
        margin-left: 87%;
    }

    .ver-mais :hover{
        text-decoration: underline;
    }

`

export {Container}