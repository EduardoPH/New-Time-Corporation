import styled from 'styled-components';

const  Containerformulario = styled.div`
display:flex;
flex-direction: column;
height: 100vh;

    .conteudo-right{
        width: 100%;
        height: 100%;
    }
    .titulo-local {
        font-family: arial;
        color: white;
        font-size: 2.5em;
        display: flex;
        justify-content: center;
    }

    .mapa {
        border: 1px solid red;
        width: 55em;
        
       
        
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