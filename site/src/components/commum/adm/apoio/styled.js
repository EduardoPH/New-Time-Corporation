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

`

export default BoxStyled;