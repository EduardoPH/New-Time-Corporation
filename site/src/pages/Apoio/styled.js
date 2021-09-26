import styled from 'styled-components';

const  ContainerApoio = styled.div `
    display:flex;
    flex-direction: column;

    background:url(${'../assets/images/estatisticas/fundo.svg'});
    background-size: cover;
    height: 100vh;
    width: 100%;
    
    justify-content: space-between;

    .titulo {
        display:flex;
        align-self: center;
        color: white;
        font: 700 2em Roboto;
    }

    .caixa {
        display:flex;
        flex-direction: row;
        align-self:center;
        background-color: rgba(85, 26, 132, 0.4);
        opacity: 1;
        height: 40em;
        border-radius: 1em;
        align-items: center;
        justify-content: center;
    }

    .frases {
        display:flex;
        font-size: 2em;
        color: white;    
        width: 25em;
    }

    .carrousel1 {
        align-self: center;
        width: 89%;
        heigth: 10em;
    }
`

export default ContainerApoio;