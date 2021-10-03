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
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
}

.imgPC img{
   width: 30em;
}

.Tit{
    font: 700 2.4em Arial;
    color: white;
}

.direita{
    display:flex;
    flex-direction: column;
    margin-top: 2em;
}

.login{
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(229, 179, 254, 0.8);
    border-radius: 14px;
}

.ti{
    display:flex;
    font: 100 2em arial;
    color:#7F00BF;
    justify-content: center;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
}

.inputs{
    display:flex;
    align-self: center;
    flex-direction: column;
}

.lado {
    display: flex;
    justify-content: space-between;
    width: 20.7em;
    height: 3em;
    align-items: center;
    margin-bottom: 1.5em;
}

.bot2 {
    display: flex;
    font-size: 1em;
    color: #3B3B3B;
    cursor:pointer;
    &:hover {text-decoration: underline};
}
.nao-possui {
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(229, 179, 254, 0.8);
    border-radius: 14px;
    margin-top: 1em;
}

.np {
    display:flex;
    font: 100 2em arial;
    color:#7F00BF;
    justify-content: center;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
}

`
export default Container 