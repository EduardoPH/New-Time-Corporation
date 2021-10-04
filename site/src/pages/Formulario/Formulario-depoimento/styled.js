import styled from 'styled-components';

const  Containerformulario = styled.div `
display:flex;
flex-direction: column;

.tudo {
    display: flex;
    justify-content: center;
}
.pag {
    display: flex;
    background-color: rgb(255, 255, 255, 40%);
    border-radius: 1.2em;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1em;
    padding: 1.5em;
    width: 68%;
    height: 112%;
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

.titulo {
    display: flex;
    justify-content: center;
    font: 2.5em arial;
    color: white;
}

.conteudo {
    display: flex;
    flex-direction: column;
}

.form-2 {
    display: flex;
    align-items: center;
}

textarea {
    display: flex;
    border-radius: 0.6em;
    border: none;
    resize: none;
    width: 100%;
    height: 100%;
}

.botao {
    display: flex;
    justify-content: center;
    align-items: center;
}

.botao button {
    padding: 0.4em 1em;
    border: none;
    border-radius: 2em;
    font-size: 1.5em;
    background-color: #FC02A0;
    color: white;
    margin: 3.9em 0em 3em 0em;
    cursor: pointer;
    &:hover{color:#FC02A0; background-color: white;}
}

.form-2 {
    display: flex;
    justify-content: space-between;
}

.conteudo2 {
    display: flex;
    width: 80%;
    height: auto;
}

`
export default Containerformulario;