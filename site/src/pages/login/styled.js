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
    height: 30em;
    width: 41em;
}



.Tit{
    font: 700 2em Roboto;
}


.direita{
    display:flex;
    flex-direction: column;
    margin-top:2em;
    margin-left:5em;
}



.login{
    background-color: #E5B3FE;
    border-radius: 20px;
    width:30em;
    height: 21em;
 


}




.ti{
    display:flex;
    font: 700 2em Roboto;
    color:#7F00BF;
    margin-left: 6em;
    margin-top: 1em;
}



.inputs{
    display:flex;
    align-self: center;
flex-direction: column;
margin-left: 4em;
}


input{
    background-color:#F2F2F2;
    border-radius: 7px;
    width: 25em;
    height: 4em; 
    border: black;
    margin-top: 1em;

}



.lado{
    display:flex;
flex-direction: row;
}



.bot1{
    font: 700 4em Roboto;
    margin-top: .1em;
    margin-left: 1.7em
}


.bot1 button{
    background-color: #E5B3FE;
    border: black;
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
    margin-left: 2em;
    margin-top: .6em;
}



.botC{
    font: 700 4em Roboto;
    margin-left: 1em;
    
}



.botC button{
    background-color:#B133FF;
    color:white;
    width: 25em;
    height: 3.5em;
    border-radius: 10px;
    border: black;
}
`





export default Container 