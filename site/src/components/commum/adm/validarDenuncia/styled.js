import styled from "styled-components";

const BoxStyled=styled.div`

    display: flex;
    flex-direction: column;
    align-items: center ;
    width: 100%;

    overflow-x: none;
    .box-denuncia{
        width: 80%;
        .carateristicas{
            .titulo-caracter{
                display: none;
            }   
        }
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
        width: 99%;
        height: 100%;
        resize: none;
        outline: none;
        border-radius: 10px;
        cursor: pointer;
        background-color: white;
        color: black;
        font-family: 'Roboto';
        font-weight: 700;
        font-family: 2em;
        padding: 2em;
    }
    .btma{
        margin-top: 2em;
        input, button{
            display: none;
        }
    }
    .container-caracter{
        height: 14em;
        margin-top: 0em;
    }
    .titulo-caracter{
        display: none;
    }
    .btms-acoes{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-self: flex-end;
        width: 100%;
        height: 3em;
        button{
            border: solid 2px;
            margin: 5px 0px;
            color: white;
            border-radius: 10px;
            width: 16em;
            font-family: arial;
            font-size: 1em;
            font-weight: 800;
            cursor:pointer;
        }
        .excluir{
            background-color:red;
            border-color: red;
            &:hover{
                background-color: white;
                color: red;
                transition: 0.3s;
            }
        }
        .adicionar{
            background-color:green;
            border-color: green;
            &:hover{
                background-color: white;
                color: green;
                transition: 0.3s;
            }
        }
        .alt{
            background-color: blue;
            border-color: blue;
            &:hover{
                background-color: white;
                color: blue;
                transition: 0.3s;
            }
        }
    }

`


export default BoxStyled;