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


    .carrousel1 {  
    align-self: center;
    width:82%;
    background-color: #7F00BF;
    height: 28em;
    border-radius: 1em;
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