import styled from "styled-components";

const BoxStyled=styled.div`
    display: flex;
    flex-direction: column;

    align-self: center;
    align-items: center ;
    h1{
        color: black;
        font-size: 2em;
        font-family: Roboto;
    }
    .lista-apoio{
        
        width: 100%;
        height: 23em;
        
        overflow-y: auto;
    }
    .input-frase{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 1em; 

        input{
        
            width: 82%;
            height: 4em;

            outline: none;
            cursor:auto;

            border-radius: 1em;
            margin-bottom: 1em
        };

    }

`

export default BoxStyled;