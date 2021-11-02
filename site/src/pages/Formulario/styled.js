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
        padding: 2em;
        width: 90%;
        height: 28em;
    }

    .conteudo-esquerda {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .conteudo-direita{
        display: flex;
        justify-content: flex-end;
        width: 100%;
        height: 100%;
        position: relative;
    }

    .botao {
        display: flex;
        justify-content: center;
        margin-top: 5em;
    }

    .menu-lateral {
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        align-items: center;
        background-color: white;
        width: 7em;
        height: 100%;
        border-radius: 4px;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    .item-lateral {
        display: flex;
        width: 100%;
        align-items: center;
        flex-direction: column;
        cursor: pointer;
    }

    .item-lateral img{
        cursor: pointer;
    }

    .textos-lateral {
        display: flex;
        align-items: center;
        margin: 0.3em 0em;
        cursor: pointer;
        font: 0.9em arial;
        font-weight: 700;
        text-align: center;
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