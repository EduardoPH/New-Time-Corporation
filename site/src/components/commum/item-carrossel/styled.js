import styled from "styled-components";


const Container = styled.div `

    display:flex;
    flex-direction: row;
    align-self:center;
    height: 60vh;
    align-items: center;
    justify-content: space-around;
    text-align: center;

.centro{
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    width: 30%;
}

.subT{
    font-weight: bolder;
    font-family: arial;
    background-color: #ff00e6;
    color: white;
    border-radius: 10px;
    padding: 1em;
    font-size: 1.5em;
    width: 15em;
}

.porc-img img{
    width: 100%;
}

.grafico{
    height: 100%;
    width: 40%;
    align-self: center;
    display: flex;
}



.frases {
        text-align: center;
        display:flex;
        font: 1.8em arial;
        color: white;    
        width: 25em;
        padding: 8% 0%;
    }

`
const Container2=styled.div`

display:flex;
    flex-direction: row;
    align-self:center;
    height: 51vh;
    align-items: center;
    justify-content: space-around;
    text-align: center;
.frases {
        text-align: center;
        display:flex;
        font: 1.8em arial;
        color: white;    
        width: 25em;
        padding: 8% 0%;
    }

`



export {Container, Container2}