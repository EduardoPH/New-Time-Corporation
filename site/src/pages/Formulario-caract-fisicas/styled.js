import styled from 'styled-components';

const  Containerformulario = styled.div `
    display:flex;
    flex-direction: column;
    background:url(${'/assets/images/estatisticas/fundo.svg'});
    background-size: cover;
    height: 100vh;
    width: 100%;

    .menu-lateral{
        background-color: white;
        width: 10em;
        height: 10em;
        font-size: 1.5em;
        border-radius: 0.3em;
    }

    .titulo{
        display: flex;
        justify-content: center;
        font-size: 3.5em;
        color: white;
    }

    .conteudo{
        display: flex;
        flex-direction: row;
    }

    .formulario{
        display: flex;
    }

    .imputs{
        display: flex;
        flex-direction: column;
    }

    .box{
        padding: 0em 3em;
    }
`
export default Containerformulario;
