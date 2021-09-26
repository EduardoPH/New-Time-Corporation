import styled from "styled-components";

const Container = styled.div`
    background-color: white;
    height: 100;
    width: 100;
    padding: 1em;
    border-radius: 7px;
    position: fixed;

    .mensagem {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-size: 1.6em;
    }
    
    .mensagem img {
        width: auto;
        
    }
`

export {Container}