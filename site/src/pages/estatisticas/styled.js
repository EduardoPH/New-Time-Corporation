import styled from 'styled-components';

const  Containers = styled.div `
display:flex;
flex-direction: column;

background:url(${'../assets/images/estatisticas/fundo.svg'});
background-size: cover;
height: 100vh;
width: 100%;

.titulo {
    display:flex;
    align-self: center;
    color: white;
    font: 700 2em arial;
    margin: 0.9em 0em;
}

.carrousel1 {
    align-self: center;
    width:82%;
    background-color: #7F00BF;
    height: 30em;
    border-radius: 1em;
}



`




export default Containers;
