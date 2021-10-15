import styled from 'styled-components';


const Container = styled.div`

    display: flex;

    background-color: white;
    border-radius: 1em;
    padding: 1.5em;
    margin-bottom: 1em;
    margin-right: 1em;

    p1{
        width: 86%;

    }

    .btm-acao{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 10em;
        align-items: center;
        button{
            border-radius: 15px;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: bold;
            font-size: 1em;
            padding: 5px 5px ;
            color: #FFFFFF;
            border: solid 0px;
            cursor: pointer;
        }    
        .excluir{
            background-color: red;
        }
        .alterar{
            
            background-color: blue;
        }
    }
`


export default Container;