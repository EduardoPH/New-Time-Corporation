import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background:url(${'/assets/images/denuncias-recentes/BACKGROUND.svg'});
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    top: 0px;
    font-family: 'Roboto';
    .titulo {
        text-align: center;
        margin: 0.8em;
        font-size: 3em;
        color: #FFF;
        font-family: Arial, Helvetica, sans-serif;
    }


    .dt-conteudo {
        display: flex;
        flex-direction: row;
        margin-left: auto;
        margin-right: auto;
        justify-content: space-between;
        width: 90%;
        height: 60vh;
        background: rgba(127, 0, 191, 0.63);
        backdrop-filter: blur(7px);
        border-radius: 20px;
        padding: 2em;
        align-items: center;
    }

    .pt2-body {
        display: flex;
        flex-direction: column;
        height: auto;
        width: 93%;
        max-height: 90%;
        margin-left: 1.5em;
        position: relative;
    }

    .btn-voltar button {
        width: 160px;
        height: 48px;
        left: 3;
        top: 1;

        border: solid 0px;

        background: #FFFFFF;
        border-radius: 29px;
        color: #530096;
    }

    .pt-menuLeft {
        display: flex;
        flex-direction: column;
    }
`

const MapStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    position: relative;
    width: 100%;
    input, button{
        display: none;
    }

    height: 30em;
    width: 78%;

    .tiitle {
        text-align: center;
        font-size: 2.7em;
        color: #FFFFFF;
        margin: 0.3em;
    }

`

export {Container, MapStyle}