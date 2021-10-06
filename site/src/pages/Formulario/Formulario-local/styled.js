import styled from 'styled-components';

const  Containerformulario = styled.div`
display:flex;
flex-direction: column;
height: 100vh;


.titulo {
    display: flex;
    justify-content: center;
    color: white;
    font-size: 2.5em;
    font-family: arial;
}

.conteudo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.5em;
    background-color: rgb(255, 255, 255, 40%);
    border-radius: 1.5em;
    width: 85%;
    height: 74%;
    align-self:center;
    margin-top: 2em;
}
.conteudo-left{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.menu-lateral {
    padding: 1em 0em;
    display: flex;
    background-color: white;
    font-size: 1.0em;
    border-radius: 0.3em;
    flex-direction: column;
    align-self: center;
    font-family: arial;
}

.textos-lateral {
    padding: 0.2em 0.3em;
    font-size: 1.4em;
}

.conteudo-right {
    width: 81%;
}

.botao {
    display: flex;
    justify-content:center;
}

.botao{
    button {
        padding: 0.4em 0.5em;
        border: none;
        border-radius: 2em;
        font-size: 1.5em;
        background-color: #FC02A0;
        color: white;
        margin: 3.9em 0em 0.4em 0em;
        cursor: pointer;
        &:hover{color:#FC02A0; background-color: white;}
    }
}

.titulo-local {
    font-family: arial;
    color: white;
    font-size: 2.5em;
    display: flex;
    justify-content: center;
}

input {
    border-radius: 2em;
    border: none;
    width: 89%;
    margin-right: 1.2em;
    height: 3em;
    margin-top: 1em;
}

.mapa img {
    width: 100%;
    height: auto;
    margin-top: 1em;
}

`
export default Containerformulario;