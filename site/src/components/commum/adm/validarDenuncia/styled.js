import styled from "styled-components";

const BoxStyled=styled.div`

    display: flex;
    flex-direction: column;
    align-items: center ;
    width: 100%;

    overflow-x: none;
    .box-denuncia{
        width: 80%;
    }
    .cabecalho{
        display: flex;
        flex-direction: row;
        align-items: center;
        .informacoes-usuaria{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding-left: 1em;
            width: 100%;
            p1, span{
                font-size: 1.3em;
                font-family: Arial;
                font-weight: bolder;
            }
            button{
                width: 7em;
                background: blue;
                color: white;
                border: solid 3px blue;
                font-size: 1.1em;
                padding: 0px 2em;
                cursor: pointer;
                &:hover{
                    background: white;
                    color: blue;
                    transition: 1s;
                }
            }
        }
    } 
    textarea{
        width: 100%;
        height: 27em;
        resize: none;
        outline: none;
        align-self: flex-end;
        border-radius: 15px;
        cursor: pointer;
    }
    .btms-acoes{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-self: flex-end;
        width: 100%;
        height: 3em;
        button{
            border: solid 0px;
            margin: 5px 0px;
            color: white;
            border-radius: 10px;
            width: 16em;
            font-family: arial;
            font-size: 1em;
            font-weigth: 800;
            cursor:pointer;
        }
        .excluir{
            background-color:red;
        }
        .adicionar{
            background-color:green;
        }
    }

`


export default BoxStyled;