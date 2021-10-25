import styled from "styled-components";

const Container = styled.div`

    .conteudo {
        display: flex;
        justify-content: center;
    }

    .pag2 {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 100%;
    }

    .boxs {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: rgba(85, 26, 132, 30%);
        border-radius: 20px;
        padding: 1.5em;
        width: 70%;
        height: 26em;
    }

    .conteudo-esquerda {
        display: flex;
        flex-direction: column;
    }

    .conteudo-direita{
        display: flex;
        justify-content: flex-end;
        width: 100%;
        height: 100%;
    }

    .botao {
        display: flex;
        justify-content: center;
        margin-top: 5em;
    }

    .botao button:hover {
        color: rgba(85, 26, 132, 100%);
        transition: 1s;
        background-color: white;
        border: none;
        cursor: pointer;
        &:hover {
            background-color: #b133ff;
            transition: 0.3s;
            border: solid 3px #fff;
            box-shadow: 0px 0px 20px #fff, 0px 0px 10px inset;
            transition: 0.21s;
            color: white;
        }
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
        cursor: pointer;
        &:hover {
            color: #FC02A0;
            transition: 0.21s;
        }
    }

    .titulo {
        display: flex;
        justify-content: center;
        color: white;
        font: 2.5em arial;
        margin-bottom: 1em;
    }
`

export {Container};