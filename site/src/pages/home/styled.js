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

.box-sub1{
    margin-right: -8em;
    font-size: 33px;

}

.box-sub2 img{
    width: 42em;
    height: 26em;
    min-height: 84vh;

}

.endereco{

    width: 20.5em;
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
    font-family: roboto;
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
    font-family: roboto;
    font-size: 1.1em;
    color: white;
}

.titulo{
   
    color: white;
    font: 900 .3em Roboto;
    font-size: 1.5em;
}








`
export {Conteiners }
