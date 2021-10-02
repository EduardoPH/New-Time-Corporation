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
        font: 700 2.5em arial;
        margin-bottom: 0.9em;
    }

    .caixa {
        display:flex;
        flex-direction: row;
        align-self:center;
        background-color: rgba(85, 26, 132, 0.4);
        opacity: 1;
        height: 100%;
        border-radius: 1em;
        align-items: center;
        justify-content: center;
    }

    .frases {
        display:flex;
        font: 1.8em arial;
        color: white;    
        width: 25em;
        padding: 8% 0%;
    }

    .carrousel1 {
        align-self: center;
        width: 75%;
    }

    .carousel .thumbs-wrapper {
        overflow: visible;
    }

    .oi {
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 100%;
        align-items: center;
    }
`

export default ContainerApoio;