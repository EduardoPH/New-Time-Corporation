import styled from 'styled-components';

export const Container = styled.div`
  background: url(${'/assets/images/home/fundo.svg'});
  background-size: cover;
  height: 100vh;
  font-family: 'Roboto';
  .container2 {
    display: flex;
    flex-direction: row;
  }

  .pt1{
    position: absolute;
    top: 7em;
    left: 3em;
  }

  .pt2 {
    display: flex;
    flex-direction: column;
    margin: 1em auto;
    align-self: center;
    text-align: center;
    width: 100%;
  }

  .title {
    font-size: 2.5em;
    margin: 1em;
    color: #fff;
  }

  .box-code{
    background: rgba(255, 255, 255, 0.59);
    border-radius: 25px;
    width: 40%;
    margin: auto;
    padding: 1em 3em;
    height: 44vh;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
  }

  input {
    background-color: #8400C7 ;
    border: solid 2px #ffffff;
    width: 100px;
    height: 100px;
    text-align: center;
    font-size: 2em;
    color: #fff;
    outline: none;
    border-radius: 9px;

    &:focus {
    border: solid 3px #fff;
    transition: 0.3s;
    color: #fff;
    opacity: initial;
    box-shadow: 0px 0px 35px #fff, 0px 0px 15px inset;
  }

}

  .box-code-inputs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 37em;
    margin: 1.5em auto 0em;
  }

  .box-code-pt2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 2em;
  }

  .title-box-code {
    font-size: 1.7em;
    margin-top: 0.6em;
    font-weight: 600;
    color: #861ABE ;
  }

  .aviso{
    color: #595050;
    font-size: 1.2em;
    display: flex;
    align-items: center;
    
    span {
      color: #9341C0;
      cursor: pointer;

      &:hover{
        text-decoration: underline;
      }
    }
  }
`;
