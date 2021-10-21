import styled from 'styled-components';

const  Containerformulario = styled.div `
    display:flex;
    flex-direction: column;
    justify-content: center;


.conteudo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.box {
    display: flex;
    flex-direction: column;
    width: 8.4em;
}

.titulo-box, .input {
    font: 1.3em arial;
}

.informacoes {
    font: 1.8em arial;
    color: #FC02A0;
    margin: 0.3em 0em;
}

.form-2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.textarea {
    width: 100%;
    height: 100%;
}

textarea {
    width: 50em;
    border-radius: 10px;
    resize: none;
    border: none;
}
`
export default Containerformulario;