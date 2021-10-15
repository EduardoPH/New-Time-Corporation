import styled from "styled-components";

const BoxStyled=styled.div`

    background-color: white;
    height: 6em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1em;
    border-radius: 10px;
    margin-bottom: 1em;
    width:100%;
    
    .nome-senha{
        display: flex;
        justify-content: space-between;
        width: 100%;

        
        .text{
            p1{
            font-family: arial;
            font-size: 1em;
            font-weight: bolder;
            }
        }
        
        .btm-alt{
            width: 6em;
            background: blue;
            border: solid 4px;
            border-color: blue;
            color: white;
            cursor: pointer;
            border-radius: 5px;
            cursor: pointer;
            &:hover{
               opacity: 0.6;
            }
        }
        .btm-excluir{
            width: 6em;
            background: red;
            border: solid 4px;
            border-color: red;
            color: white;
            cursor: pointer;
            border-radius: 5px;
            cursor: pointer;
            &:hover{
               opacity: 0.6;
            }
        }
    }

`;

export default BoxStyled;