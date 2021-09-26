import styled from 'styled-components'


const Container = styled.div `


display:flex;
flex-direction: column;

background:url(${'/assets/images/estatisticas/fundo.svg'});
background-size: cover;
height: 100vh;
width: 100%;


.caixa{
    
    display:flex;
    flex-direction: row;
    color: white;
}



.esquerda{}





.imgPC img{
    width: 41em;
    height: 26em;
}



.Tit{
    font: 700 2.4em Roboto;
    margin-left: 4em;
}


.direita{
    display:flex;
    flex-direction: column;

    margin-top: 2em;
    margin-left: 7em;
}



.login{
    background-color: #E5B3FE;
    border-radius: 20px;
    width:26em;
    height: 21em;
 

}




.ti{
    display:flex;
    font: 700 2em Roboto;
    color:#7F00BF;
    margin-left: 5.2em;
    margin-top: 1em;
}



.inputs{
    display:flex;
    align-self: center;
flex-direction: column;
margin-left: 2.5em;
}


input{
    background-color:#F2F2F2;
    border-radius: 7px;
    width: 25em;
    height: 4em; 
    border: black;
    margin-top: 1em;
    cursor:auto;
    outline: none;

}



.lado{
    display:flex;
flex-direction: row;
}



.bot1{
    font: 700 4em Roboto;
    margin-top: .1em;
    margin-left: 1.3em;
}


.bot1 button{
    background-color: #E5B3FE;
    border: black;
    cursor:pointer;
    
}

.bot2 button:hover{
    background-color:rgba(255, 0, 0, 0.2);
    transition: 0.3s;
}




.bot2 {
    font: 700 4em Roboto;
    
}


.bot2 button{
    background-color:#B133FF;
    color:white;
    border-radius: 10px;
    border: black;
    width: 11em;
    height: 3em;
    cursor:pointer;
}




.casoJa{
    margin-top:2em;
    background-color: #E5B3FE;
    border-radius: 20px;
    height: 10em;

}




.np{
    font: 700 2em Roboto;
    color:#7F00BF;
    margin-left: 1.3em;
    margin-top: .6em;
}



.botC{
    font: 700 4em Roboto;
    margin-left: 0.6em;
    
}



.botC button{
    background-color:#B133FF;
    color:white;
    width: 25em;
    height: 3.5em;
    border-radius: 10px;
    border: black;
    cursor:pointer;
}



.botC button:hover{
    background-color:rgba(255, 0, 0, 0.2);
    transition: 0.3s;
}

`





export default Container 