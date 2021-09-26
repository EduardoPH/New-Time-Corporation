import styled from 'styled-components';

const  ContainerApoio = styled.div `
    display:flex;
    flex-direction: column;

    background:url(${'../assets/images/estatisticas/fundo.svg'});
    background-size: cover;
    height: 100vh;
    width: 100%;

    .titulo {
        display:flex;
        align-self: center;
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 2em;
    }

    .caixa {
        display:flex;
        flex-direction: row;
        align-self:center;
        background-color: rgba(85, 26, 132, 0.4);
        opacity: 1;
        align-self: center;
        border-radius: 1em;
        align-items: center;
        justify-content: center;
        height: 33em;
         margin-top: 1em;
    }

    .frases {
        display:flex;
        font-size: 2em;
        color: white;    
        width: 25em;
        font-family: 'Roboto';
    }

    .carrousel1 {
        align-self: center;
        width: 89%;
        height: 100%;
    }
`

export default ContainerApoio;