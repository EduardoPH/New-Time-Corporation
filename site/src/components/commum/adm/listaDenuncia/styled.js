import styled from "styled-components";

const BoxStyled=styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 4em;
    max-height: 80vh;
    overflow-x: auto;
    h1{
        color: black;
        font-size: 2em;
        font-family: Roboto;
    }
    input{
        width: 86%;
        height: 3em;
        outline:none;
        cursor:auto;
    }
    .pesquisar{
        display: flex;
        width: 100%;
        button{
            width: 14%;
            height: 3em;
        }
    }
    .tabela-denun{
        margin-top:1em;
        width: 86%;
        border-collapse: collapse;
    
        th{
            color: white;
            font-size: 1.5em;
            background-color:#010BE1;
            font-family: 'arial';
            
            
        }
        td{
            text-align: center;
            padding: 8px;
            font-size: 18px;
            font-family: arial;
            font-weight: 600;
            
            margin-bottom: 1em;
        }
        .previa{
            margin-bottom: 1em;
        }
        .coluna-acao button{
            color: white;
            font-family: arial;
            border: solid 1px;
            border-color: #111AE3;
            background: #111AE3;
            border-radius: 100px;
            cursor :pointer;  
            height: 2em;
            width: 6em;
            &:hover{
                background: #FFFF;
                color: #111AE3;
                transition: 1s;

            }         
        }
        .coluna-acao{
            .visu{
                background-color: white;
                color: black;
                
            }
        }
        .previa{
            background: #DCDCDC;
            width: 23em;
            height: auto;
            border-style: solid;
            border-width: 2px;
            border-color: white;
        }
    }
`;

export default BoxStyled;