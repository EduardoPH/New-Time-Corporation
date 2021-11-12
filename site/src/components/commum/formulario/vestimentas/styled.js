import styled from 'styled-components';

const  Containerformulario = styled.div `
    display:flex;
    flex-direction: column;
    justify-content: center;
    width: 95%;

.conteudo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.btm-avan{
    padding: 0.4em 0.5em;
    border: none;
    border-radius: 2em;
    font-size: 1.5em;
    background-color: #FC02A0;
    color: white;
}
.box {
    display: flex;
    flex-direction: column;
    width: 8.4em;
}

.titulo-box, .input {
    font: 1.3em arial;
    color: white;
}
    
.titulo-box {
    color: #FC02A0;
}

.informacoes {
    font: 1.8em arial;
    color: #FC02A0;
    margin: 0.5em 0em;
}

.form-2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.conteudo2 {
    width: 100%;
}

.info2 {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
}

textarea {
    width: 100%;
    height: auto;
    border-radius: 10px;
    resize: none;
    border: none;
    margin-right: 2em;
    padding: 1em;
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

input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  
    border-radius: 50%;
    width: 16px;
    height: 16px;
  
    border: 2px solid #fff;
    transition: 0.2s all linear;
  
    position: relative;
    top: 1px;

    cursor: pointer;
    &:checked {
        border: 2px solid #FC02A0;
        background-color: #FC02A0;
    } 
    &:hover {
        border: 2px solid #FC02A0;
    }
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