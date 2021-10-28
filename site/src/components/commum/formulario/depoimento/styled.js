import styled from 'styled-components';

const  Containerformulario = styled.div `
    width: 95%;
    height: 100%;

    .conteudo2 {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    textarea {
        border-radius: 0.6em;
        border: none;
        resize: none;
        width: 100%;
        height: 100%;
        margin-right: 2em;
        font: 16px arial;
        &:focus {
            box-shadow: 0 0 0 0;
            border: 0 none;
            outline: 0;
            cursor: text;
        } 
        ::-webkit-input-placeholder {
            color: #FC02A0;
            opacity: 80%;
            font: 16px arial;
        }  
    }

    Button {
        padding: 0.36em 0.8em;
    }

    Button:hover {
        color: rgba(85, 26, 132, 100%);
        transition: 1s;
        background-color: white;
        border: none;
        cursor: pointer;
        &:hover {
            background-color: #b133ff;
            transition: 0.3s;
            box-shadow: 0px 0px 10px #fff, 0px 0px 0px inset;
            transition: 0.21s;
            color: white;
        }
    }

`
export default Containerformulario;