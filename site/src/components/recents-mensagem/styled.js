import styled from "styled-components";

const Container = styled.div`
    display:flex;
    flex-direction: row;

    .pt2-msg{

    }

    .name-user {
        font-size: 1.3em;
        color: white;
    }

    .ct-msg {
        display: flex;
        flex-direction: row;
        align-items: flex-start;

        margin: 2em 0em 2em 1em;
    }

    .caixa-msg {
        margin-top: 1em;
        width: 100;
        height: 100;
        background-color: white;
        border-radius: 8px;
        padding: 1em;
        max-width: 30em;
        max-height: 7em;
        overflow-y: scroll;
    
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

    
   
`

export {Container}