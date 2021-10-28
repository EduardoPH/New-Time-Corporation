import styled from 'styled-components';

const  Containerformulario = styled.div`
    display:flex;
    flex-direction: column;
    width: 95%;

    .conteudo{
        display: flex;
        flex-direction: row;
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

    input {
        border-radius: 2em;
        border: none;
        width: 85%;
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

    Button {
        margin-top: 1.6em;
    }

    Button:hover {
        color: rgba(85, 26, 132, 100%);
        transition: 1s;
        background-color: white;
        border: none;
        cursor: pointer;
        &:hover {
            background-color: #b133ff;
            transition: 0.3s;
            box-shadow: 0px 0px 10px #fff, 0px 0px 0px inset;
            transition: 0.21s;
            color: white;
        }
    }
`
export default Containerformulario;