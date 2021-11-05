import styled from "styled-components"



const Conteiners = styled.div`
display: flex;
flex-direction: column;

background: url(${'/assets/images/home/fundo.svg'});
background-size: cover;



.parte1{
    height: 97vh;
    align-items:center;
}

.rodape{
    display: flex;
    flex-direction: row;

    justify-content: space-around;
    background-color: #3A3A3A;
}

.recomen {
    .titulo{  
       color:white;
        cursor: pointer;
       font-family: Roboto;
    } 
   
   
}

.descricao{
    display: flex;
    flex-direction: column;
    cursor: pointer;
}
.recom-img{
    cursor:pointer;
}

.recomendacoes{
    display: flex;
    flex-direction: column;

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
    padding-bottom: 1.5em;
}

.women{
    margin-left: 2.5em;
    margin-right: 3em;


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
  
.kahlo img {
    width: 3.2em;
}

`
export { Conteiners }