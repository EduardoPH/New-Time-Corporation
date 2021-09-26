import styled from "styled-components"



const Conteiners = styled.div`
display: flex;
flex-direction: column;

background: url(${'/assets/images/home/fundo.svg'});
background-size: cover;
    height: 100vh;

.box{
    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;
    
}

.box-sub1 h1{
    color: white;
    font-size: 2.5em;
    font-weight: bold;
}

.box-sub1{
    margin-right: 1em;
    font-size: 33px;

}

.box-sub2 img{
    width: 30em;
    height: 4em;

    min-height: 77vh;

}


.endereco{

    width: 20.5em;
}

.caixa2{
    margin-top: 2em;
    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;
 
    
}

.box2-sub2 img{
    width: 36em;
    height: 20em;
}


.box2-sub1 h1{
    color: white;
    font-size: 3em;
    font-weight: bold;
  
}


.descri-2{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.descri-2 p{
    width: 30.5em;
    text-align: center;
    color: white;
}


 .caixa3 {
    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;
   
}

.box3-sub2 img{
    width: 31em;
    height: 24em;
}

.box3-sub1{
    color: white;
    font-size: 1.5em;
    font-weight: bold;
}

.descri-3{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.descri-3 p{
    width: 58%;
    text-align: center;
    color: white;
} 
.caixa4{
    display: flex;
    flex-direction: row;

    height: 60vh;
    justify-content: center;
    align-items: center;
}

.box4-sub2 img{
    width: 37em;
    height: 19em;

}

.descri-4{
   
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
}

.descri-4 p{
    width: 30.5em;
    text-align: center;
    color: white;
}

.box4-sub1{
 color: white;
 font-size: 1.2em;
 font-weight: bold;
} 


.rodape{
    display: flex;
    flex-direction: row;

    justify-content: space-around;
    background-color: #3A3A3A;
}

.descricao{
    display: flex;
    flex-direction: column;
   
}

.recomendacoes{
    display: flex;
    flex-direction: column;

    height: 20em;
    margin-left: 5em;
    text-align: center; 
    
}
.recomendacoes h2{
    font-family: Arial, Helvetica, sans-serif;
    color: white;
   
}

.kahlo{
    margin-right: 1.2em;
}

.recomen{
    display: flex;
    flex-direction: row;
}

.women{
    margin-left: 2.5em;
    margin-right: 3em;

    margin-top: 5.6em;
}

.descricao{
    padding-top: 0.5em;
    text-align: center; 

    font: 600 .3em Roboto;
    font-size: 1em;
    color: white;
}

.telefone{
    padding-top: 1.3em;
    padding-bottom: 1.7em;
}

.contato{
    padding-top: 2em;
    padding-left: 2em;

    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1em;
    color: white;
}

.titulo{
   
    color: white;
    font: 900 .3em Arial, Helvetica, sans-serif;

    font-size: 1.5em;
}

.descri-2 p{
    font-family:Arial, Helvetica, sans-serif;
    font-size: 1.5em;
}
.descri-3 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.5em;
}

.descri-4{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.5em;
    margin-top: -1em;
}
  

`
export {Conteiners }