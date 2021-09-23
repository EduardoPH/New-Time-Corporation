import styled from 'styled-components';

const  Containers = styled.div `



body {
    margin: 0;
  }
  
  * {
    box-sizing: border-box;
  }




.dados{
    display:flex;
    flex-direction: column;

    background:url(${'/assets/images/estatisticas/fundo.svg'});
    background-repeat: no-repeat;
    height: 100vh;
    width: auto;
}


.titulo{
    display:flex;
    align-self: center;
    color: white;
    font: 700 1em Roboto;
}



.caixa{
    display:flex;
    flex-direction: row;
    align-self:center;
    background-color: #7F00BF;
    opacity: 1;
    width: 16em;
    height:auto;
    border-radius: 1em;
}



.setEsquerda img{
    cursor:pointer;
    width: .7em;
    margin-top: 3.6em;
}



.setDireita{
    margin-left:4.8em;
}

.setDireita img{
    cursor:pointer;
    width: .7em;
    margin-top: 3.6em;
    align-self:right;
}





.centro{
    display:flex;
    flex-direction: column;
    width: 9em;
    height:6em;
    margin-left:1em;
    margin-top: 2em;
}



.subT{
    font: 700 .4em Roboto;
    background-color: #E78CFE;
    color: white;
    padding: .7em .7em;
    border-radius:1em;
    width:  13em;
}



.tabLad{
    display:flex;
    flex-direction: row;
}



.porcentagem img{
    width: 4em;
    height: auto;
}






.dados{
    font: 100 4em Roboto;
}

`




export default Containers;
