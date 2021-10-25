import styled from 'styled-components';

const  Containerformulario = styled.div`
    display:flex;
    flex-direction: column;
    width: 95%;

    .conteudo{
        display: flex;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(1px);
    }

    .mapa {
        margin-top: -0.5em;
    }

    .titulo-local {
        font-family: arial;
        color: #FC02A0;
        font-size: 2em;
        display: flex;
        justify-content: center;
    }

    .cont {
        width: 100%;
    }

    button {
        height: 3em;
    }

    input {
        border-radius: 2em;
        border: none;
        width: 89%;
        margin-right: 1.2em;
        height: 3em;
        margin-top: 1em;
        ::-webkit-input-placeholder {
            color: #b133ff;
            font: 16px arial;
            padding-top: 2em;
        }
        &:focus {
            border: solid 3px #fff;
            background-color: rgba(229, 179, 254, 0.8);
            transition: 0.3s;
            color: #fff;
            opacity: initial;
            box-shadow: 0px 0px 35px #fff, 0px 0px 15px inset;
        
            &::-webkit-input-placeholder {
              color: #fff;
              bottom: 2em;
              transition: 1.5s;
              transform: translateX(-280px);
            } 
          }
    }
`
export default Containerformulario;