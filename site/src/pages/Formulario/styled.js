import styled from "styled-components";

const Container = styled.div`



    .conteudo {
        display: flex;
        justify-content: center;
    }

    .conteudo-esquerda {
        display: flex;
        flex-direction: column;
    }

    .botao {
        display: flex;
        justify-content: center;
        margin-top: 5em;
    }

    .boxs {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: rgb(255, 255, 255, 40%);
        border-radius: 20px;
        padding: 1.5em;
        width: 60em;
    }

    .menu-lateral {
        display: flex;
        justify-content: center;
        flex-direction: column;
        background-color: white;
        font: 1.3em arial;
        width: 8em;
        height: 8em;
        border-radius: 7px;
    }

    .item-menu {
        display: flex;
        align-items: center;
        margin: 0.3em 0em;
        &:hover {
            color: #FC02A0;
            transition: 0.5s;
        }
    }

    .titulo {
        display: flex;
        justify-content: center;
        color: white;
        font: 2.5em arial;
    }
`

export {Container};