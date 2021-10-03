import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;
    height: auto;

    background: #FFFFFF;
    border-radius: 14px;

    margin-bottom: 1em;
    padding: 1em;

    .lado-direito{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size:1em;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bolder;

        p2{
            cursor: pointer;
            font-style: italic;
            &:hover{
                text-decoration: underline;
            }
            
        }
    }
    .lado-esquerdo{
        width: 85%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        p1{
            width: 80%;
            word-wrap: break-word;
        }

        .btms{
            width: 25%;
            display: flex;
            justify-content: space-between;
            margin-top: 1em;
            .alterar{
                background: #111AE3;
                border-radius: 15px;
                font-family: Arial, Helvetica, sans-serif;
                font-weight: bold;
                font-size: 1em;
                padding: 0.5em 1em;
                color: #FFFFFF;
                border: solid 1px;
                cursor: pointer;

                &:hover{
                    background: white;
                    color: #111AE3;
                    border-color: #111AE3;
                    transition: 0.3s;
                }
            }
            .excluir{
                background: #FF0000;
                border-radius: 15px;
                font-family: Arial, Helvetica, sans-serif;
                font-weight: bold;
                font-size: 1em;
                padding: 0.5em 1em;
                color: #FFFFFF;
                border: solid 1px;
                cursor: pointer;

                &:hover{
                    background: white;
                    color: #FF0000;
                    border-color: #FF0000;
                    transition: 0.3s;
                }
            }
        }
    }
`
export {Container};