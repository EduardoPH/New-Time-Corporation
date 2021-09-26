import styled from 'styled-components';

const  Containers = styled.div `



    display:flex;
    flex-direction: column;

    background:url(${'/assets/images/estatisticas/fundo.svg'});
    background-size: cover;
    width: 100%;
    height: 100vh;

    .carousel .thumbs-wrapper {
        margin: 0px;
        overflow:hidden;
    }



    .carousel .slide {
    min-width: 80%;
    }



    .carousel .slider-wrapper.axis-horizontal .slider .slide {
    flex-direction: column;
    flex-flow: column;
    width: 30em;
    }

    .bGuXcd .carousel .slider {
   width: 85em;
    margin-left: 4em;
    }

    .carousel .slider{
        width: 70%;
        margin-left: 42em;
    }

     .dados{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 77%;
        align-self: center;
        width: 100%;
        margin-top:3em;
    }
    


    .caix{
        display:flex;
    }


.titulo{
    display:flex;
    align-self: center;
    color: white;
    font: 700 3em Arial;
}

.caixa{
    display:flex;
    flex-direction: row;
    align-self:center;
    background-color: #7F00BF;
    opacity: 1;
    height: 30em;
    border-radius: 1em;
    width: 51em;
    margin-right:3em;
    margin-left: -24em;
}

.caixa2{
    display:flex;
    flex-direction: row;
    align-self:center;
    background-color: #7F00BF;
    opacity: 1;
    height: 30em;
    border-radius: 1em;
    width: 51em;
    margin-right: 3em;
    margin-left: -12em;

}



.caixa3{
    display:flex;
    flex-direction: row;
    align-self:center;
    background-color: #7F00BF;
    opacity: 1;
    height: 30em;
    border-radius: 1em;
    width: 51em;
    margin-right: 5em;
}




.centro{
    display:flex;
    flex-direction: column;
    height: 100%;
    margin-left:1em;
    margin-top: 2em;
}




.subT{
    font-weight: 700;
    font-family: 'Roboto';
    background-color: #E78CFE;
    color: white;
    border-radius: 10px;
    padding: 1em;
    font-size: 1.5em;
    width: 14em;
    margin-right: 1em;
}


.porc-img img{
    width: 20em;
    height: 18em;
}
 

`




export default Containers;
