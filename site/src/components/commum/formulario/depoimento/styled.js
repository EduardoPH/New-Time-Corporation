import styled from 'styled-components';

const  Containerformulario = styled.div `
    width: 95%;
    height: 100%;

    .conteudo2 {
        display: flex;
        width: 100%;
        height: 100%;
    }

    textarea {
        border-radius: 0.6em;
        border: none;
        resize: none;
        width: 100%;
        height: 100%;
        font: 16px arial;
        &:focus {
            box-shadow: 0 0 0 0;
            border: 0 none;
            outline: 0;
            cursor: text;
        } 
        ::-webkit-input-placeholder {
            color: #b133ff;
            font: 16px arial;
        }  
    }

`
export default Containerformulario;