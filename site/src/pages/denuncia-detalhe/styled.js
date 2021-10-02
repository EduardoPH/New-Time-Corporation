import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background:url(${'/assets/images/denuncias-recentes/BACKGROUND.svg'});
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    top: 0px;

    .titulo {
        text-align: center;
        margin: 0.8em;
        font-size: 3em;
        color: #FFF
    }


    .dt-conteudo {
        display: flex;
        flex-direction: row;
        margin-left: auto;
        margin-right: auto;
        justify-content: space-between;
        width: 85%;
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
        overflow-y: scroll;
        max-height: 90%;
        margin-left: -1em;
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
        height: 30%;
    }
`

const Pag = styled.div`
    display: flex;
    flex-direction: column;
    display: none;

    .pt1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .pack-user {
        display: flex;
        flex-direction: row;
    }

    .user-name {
        color: white;
        font-size: 1.8em;
        margin-left: 0.5em;
    }

    .cx-mensagem {

        width: 87%;
        height: 100%;
        padding: 1em;
        background-color: white;
        margin: 1.2% 0% 0% -7.4%;
        border-radius: 8px;
    }

    .msg-denuncia {
        padding-left: 1em;
        font-size: 1.4em;
    }

    .pt2 {
        margin-left: 4em;
    }

    .box-msg {
        display: flex;
        flex-direction: row;
        height: 40vh;
    }

    .box-msg img {
        height: 42px;
        width: 13%;
        top: 1em;
    }

`

const Caracteristicas = styled.div`
        display: flex;
        flex-direction: column;
        text-align: center;
        display: none;

        .container-caracter {
            margin-left: auto;
            margin-right: auto;
            margin-top: 3em;
            width: 83%;
            height: 12.6em;
            padding: 1.5em;
            border-radius: 7px;

            background-color: white;
        }

        .box-detalhes {
            display: flex;
            flex-direction: column;
        }

        .titulo-caracter {
            padding-top: 1.2em;
            font-size: 2.7em;
            color: #FFFFFF
        }

        .title-details-caracters {
            font-size: 2em;
        }

        .box-carac {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
        }

        .box-detalhe {
            text-align: start;
        }

        
`

const Map = styled.div`
    /* input , button {
        display: none;
    } */
    

    .box-map {
        display: flex;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
        height: 17em;
    }
`

export {Container, Caracteristicas, Pag, Map}