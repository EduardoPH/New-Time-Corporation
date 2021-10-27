import styled from 'styled-components';

export const Container = styled.div`
  background: url(${'/assets/images/home/fundo.svg'});
  background-size: cover;
  height: 100vh;

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
    width: 50%;
    margin: auto;
    padding: 1em 3em;
    height: 33vh;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
  }


  .box-code-inputs {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .box-code-pt2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 2em;
  }

  .title-box-code {
    font-size: 1.7em;
    margin: 0.6em;
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
