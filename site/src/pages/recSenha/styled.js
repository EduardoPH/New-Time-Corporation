import styled from "styled-components";

const Container=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background: url(${'/assets/images/home/fundo.svg'});
    background-size: cover;

    height: 100vh;
    width: 100%;
    .tituloVoltar{
        display: flex;
        justify-content: space-around;
        width: 100%;
        
        font-family: 'arial';
        font-style: italic;
        font-weight: bold;
        font-size: 1.5em;
        line-height: 75px;

        color: #FFFFFF;
    }
    .caixa-direita{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        
    }
    .caixaCentral{
        height: 100%;
        display: flex;
        flex-direction: row;
        color: white;
        align-items: baseline;
        button{
           border: solid 0px;
            background: #B133FF;
            border-radius: 10px;    
            width: 11em;
            height: 3em;
            color: white;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 15px;
            cursor: pointer;
            margin-left: 1em;
            &:hover{
                    opacity: 0.3;
            }
        }
        .text{
            display: flex;
            flex-direction: column;
            align-items: center;
            font-family: Arial, Helvetica, sans-serif;
            font-style: italic;
            font-weight: bold;
            font-size: 25px;
            line-height: 42px;
            text-align: center;
            letter-spacing: 0.03em;
            width: 100%;
            .info{
                color: #FFFFFF;
            }
            span{
                    color: #861ABE;
            }
        }
        .caixa{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;

            width: 32%;;
            height: 70%;
            
            background: rgba(255, 255, 255, 0.59);
            border-radius: 25px;

            padding: 1em;

            input{
                outline: none;
                width: 100%;
                height: 4em;
                border: solid 0px;
                padding: 2em 2em;
                ::-webkit-input-placeholder {
                    color: #7F00BF82;
                    font-size: 1.3em;
                    font-family: Arial, Helvetica, sans-serif;
                    font-weight: 700;
                };
            
            }
            button{
                border: solid 0px;
                background: #B133FF;
                border-radius: 10px;    
                width: 100%;
                height: 3em;
                color: white;
                font-family: Arial, Helvetica, sans-serif;
                font-size: 15px;
                cursor: pointer;
                margin:0px;
                &:hover{
                    opacity: 0.8;
                }
            }
            
        }
    }
`


export {Container}