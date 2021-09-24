import styled from 'styled-components';

const  Containers = styled.div `



    display:flex;
    flex-direction: column;

    background:url(${'/assets/images/estatisticas/fundo.svg'});
    background-size: cover;
    height: 100vh;
    width: 100%;




     .dados{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 91%;
        align-self: center;
        width: 87%;
    }
    


    .caix{
        display:flex;
    }


.titulo{
    display:flex;
    align-self: center;
    color: white;
    font: 700 4em Roboto;
}



.caixa{
    display:flex;
    flex-direction: row;
    align-self:center;
    background-color: #7F00BF;
    opacity: 1;
    height: 33em;
    border-radius: 1em;
    
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
}
 

`




export default Containers;
