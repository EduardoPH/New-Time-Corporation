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

.rodape{
    display: flex;
    flex-direction: row;
    background-color: #3A3A3A;
}

.descricao{
    display: flex;
    flex-direction: column;
   
}

`
export {Conteiners }
