import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background:url(${'/assets/images/denuncias-recents/BACKGROUND.svg'});
    background-size: cover;
    height: 100vh;

    .dt-conteudo {
        display: flex;
        flex-direction: row;
        margin-left: auto;
        margin-right: auto;
        width: 93%;
        height: 90%;
        background: rgba(127, 0, 191, 0.63);
        backdrop-filter: blur(7px);
        border-radius: 20px;
        padding: 3em;
        align-items: center;
    }

    .container-conteudo {
        width: 100%;
    }

    .dt-titulo {
        font-size: 3em;
        margin: 1em 0em;
        text-align: center;
        color: white;
    }

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

    .bt-voltar {
        width: 160px;
        height: 48px;
        background: #FFFFFF;
        border-radius: 29px;   
        border: solid 0px;
        font-weight: bold;
        font-size: 24px;
        line-height: 27px;
        text-align: center;
        color: #530096;
    }

    .dt-pt1 {
        display: flex;
        justify-content: space-between;
    }

    .rc-setinha img {
        display: flex;
        margin-top: -0.5em;
        margin-left: 1.5em;
    }

    .rc-caixa {
        background-color: white;
        height: 48vh;
        min-height: 90%;
        width: 90%;
        display: flex;
        flex-wrap: wrap;
        margin-top: -2.8em;
        margin-left: 2.5em;
        border-radius: 14px;
        padding: 1em;
    }

    .rc-mensagem {
        padding-left: 3em;
    }

    .container-pt1 {
        height: 100vh;
    }
  
`

export {Container}
