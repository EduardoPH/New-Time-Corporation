 import styled from 'styled-components';

 const Container = styled.div`
 display:flex;
 flex-direction: column;

 background:url(${'/assets/images/estatisticas/fundo.svg'});
 background-size: cover;
 height: 100vh;
 width: 100%;


 .corpo-central{
     h1{color: white; font-size: 3em;};
     
     font-family: 'Roboto';
     font-weigth: 700;
     width: 100%;
     display: flex;
     align-items: center;
     flex-direction: column;

     .box{
        width: 80%;
        display: flex;
        flex-direction: column;
        height: 50em;
        padding: 4em;
        background-color: rgba(127, 0, 191, 0.59);
        backdrop-filter: blur(7px);
        border-radius: 6px;

        .cabecalho{
            display: flex;
            flex-direction: row
            width: 100%;
            height: 4em;
            justify-content: space-around;

            .infos-usuarias{
                display: flex;
                font-size: 2em;
                align-items: center;
                width: 10em;
                justify-content: space-between;
                color: white;
            }
        }
        .parte-final-box{
            display: flex;
            flex-direction: row;
            height:100%;
            .informas{
                display: flex;
                flex-direction: column;
                width: 25%;
            }
        }
        }
     }
 }

 `

 export {Container}