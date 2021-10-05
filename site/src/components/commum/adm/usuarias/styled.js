import styled from "styled-components";

const BoxStyled=styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
        width: 86%;
        height: 3em;
        outline:none;
        cursor:auto;
    }
    .tabela-usuaria{
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

        }
        .coluna-acao button{
            color: white;
            font-family: arial;
            border: solid 4px;
            border-color: #111AE3;
            background: #111AE3;
            border-radius: 100px;
            cursor :pointer;  
            width: 6em;
            &:hover{
                background: #FFFF;
                color: #111AE3;
                transition: 1s;

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