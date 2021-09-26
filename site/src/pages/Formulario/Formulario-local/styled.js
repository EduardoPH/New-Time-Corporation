import styled from 'styled-components';

const  Containerformulario = styled.div`
display:flex;
flex-direction: column;
background:url(${'/assets/images/estatisticas/fundo.svg'});
background-size: cover;
height: 100vh;
width: 100%;
font-family: arial;

.titulo {
    display: flex;
    justify-content: center;
    color: white;
    font-size: 3em;
}

.conteudo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2em;
    background-color: rgb(255, 255, 255, 40%);
    border-radius: 1.5em;
    width: 65%;
    heigth: 50%;
    align-self:center;
    margin-top: 2em;
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
    width: 65%;
    padding-right: 2em;
}

button {
    padding: 0.5em 1em;
    border: none;
    border-radius: 2em;
    font-size: 2em;
    background-color: #FC02A0;
    color: white;
    margin-top: 3em;
}

.titulo-local {
    color: white;
    font-size: 2.5em;
    display: flex;
    justify-content: center;
}

input {
    border-radius: 2em;
    border: none;
    width: 100%;
    height: 4em;
    margin-top: 1em;
}

.mapa img {
    width: 100%;
    height: auto;
    margin-top: 1em;
}
}
`
export default Containerformulario;