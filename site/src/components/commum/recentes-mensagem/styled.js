import styled from "styled-components";

const Container = styled.div`
    display:flex;
    flex-direction: row;
    font-family: Arial, Helvetica, sans-serif;
    .pt2-msg{
        width: 20px;
    }

    .name-user {
        font-size: 1.5em;
        color: white;
        display: flex;
        align-items: center;
        font-weight: 700;
        margin: 0.9em 0em 0em 0.6em
    }

    .ct-msg {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        width: 40em;
        margin: 2em 0em 2em 1em;
    }

    .caixa-msg {
        margin-top: 1em;
        width: 50%;
        height: 100;
        background-color: white;
        border-radius: 8px;
        padding: 1em;
    }

    .mensagem {
        display: flex;
        flex-wrap: wrap;
    }

    .ct-msg img {
        overflow: hidden;
        width: 40px;
        margin-right: -1.9em;
        margin-top: 0.6em ;
    }

    .ver-mais-dt {
        padding-top: 0.5em;
        text-align: end;
        color: black;
        cursor: pointer;
        font-style: italic;
        &:hover {
            font-weight: 600;
            text-decoration: underline;
        }
    }

    @media (max-width: 1000px){
        transform: scale(0.8);

        .caixa-msg {
        width: 100%;
    }

    .ct-msg{
        width: 14em;
    }
    }

    
   
`

export {Container}