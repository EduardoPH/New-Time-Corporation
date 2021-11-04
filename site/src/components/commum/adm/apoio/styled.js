import styled from "styled-components";

const BoxStyled=styled.div`
    display: flex;
    flex-direction: column;

    align-self: center;
    align-items: center ;
    padding: 3em;
    h1{
        color: black;
        font-size: 2em;
        font-family: Roboto;
    }
    .lista-apoio{
        
        width: 100%;
        height: 23em;
        
        overflow-y: auto;

        ::-webkit-scrollbar {
            width: 10px;
            height: 2px;
            }
            ::-webkit-scrollbar-button {
            width: 0px;
            height: 0px;
            }
            ::-webkit-scrollbar-thumb {
            background: #e1e1e1;
            border: 0px none #ffffff;
            border-radius: 50px;
            }
            ::-webkit-scrollbar-thumb:hover {
            background: #ffffff;
            }
            ::-webkit-scrollbar-thumb:active {
            background: #000000;
            }
            ::-webkit-scrollbar-track {
            background: #666666;
            border: 0px none #ffffff;
            border-radius: 50px;
            }
            ::-webkit-scrollbar-track:hover {
            background: #666666;
            }
            ::-webkit-scrollbar-track:active {
            background: #333333;
            }
            ::-webkit-scrollbar-corner {
            background: transparent;
            }
    }
    .input-frase{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 1em; 

        input{
        
            width: 82%;
            height: 4em;

            outline: none;
            cursor:auto;

            border-radius: 1em;
            margin-bottom: 1em
        };
        button{
                width: 12em;
                height: 2.5em;
                background: #01BC1F;
                color: white;
                border: solid 3px;
                border-color: #01BC1F;
                font-size: 1.3em;
                cursor: pointer;
                border-radius: 5px;
                &:hover{
                    background: white;
                    color: #01BC1F;
                    transition: 1s;
                }
            }
            .btmAlt{
                background-color: BLUE;
                border: solid 0px;
                &:hover{
                    background: white;
                    color: blue;
                    transition: 1s;
                }
            }
    }

    .input-t {
        outline: none;
        border: solid 0px;
    }

`

export default BoxStyled;