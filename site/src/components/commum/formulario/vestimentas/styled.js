import styled from 'styled-components';

const  Containerformulario = styled.div `
display:flex;
flex-direction: column;

.titulo {
    display: flex;
    justify-content: center;
    color: white;
    font: 2.5em arial;
}

.pag {
    display: flex;
    align-self: center;
    flex-direction: column;
    background-color: rgb(255, 255, 255, 40%);
    padding: 1.5em;
    border-radius: 20px;
    margin-top: 1em;
    width: 68%;
    height: auto;
}

.menu-lateral {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    font: 1.3em arial;
    width: 8em;
    height: 8em;
    border-radius: 7px;
}

.textos-lateral {
    display: flex;
    align-items: center;
    margin: 0.3em 0em;
}

.conteudo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.box {
    display: flex;
    flex-direction: column;
    width: 9em;
}

.titulo-box, .input {
    font: 1.3em arial;
}

.conteudo2 {

}

.informacoes {
    font: 1.8em arial;
    color: #FC02A0;
    margin: 0.3em 0em;
}

.form-2{
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
    width:96%;
    height: 50%;
    border-radius: 10px;
    resize: none;
}

.botao {
    padding: 0em 3em;
}

.botao button {
    font: 1.3em arial;
    color: white;
    background-color: #FC02A0;
    padding: 0.5em 1em;
    border-radius: 25px;
    border: none;
    cursor: pointer;
    &:hover{color:#FC02A0; background-color: white;}
}
`
export default Containerformulario;