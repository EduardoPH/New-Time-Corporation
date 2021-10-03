import styled from 'styled-components'


 const InputStyle = styled.input`
    border-radius: 5px;
    width: 25em;
    height: 4em; 
    border: none;
    margin: 0em 2em 2.2em 2em;
    cursor: auto;
    background-color: rgb(242, 242, 242, 80%);
    display: block;
    &&:focus{ outline: 2.5px solid #d600a3;}
    
    
    
 `

 const ButtonsStyle = styled.button`
    background-color:#B133FF;
    color: white;
    width: 25em;
    height: 3.5em;
    border-radius: 5px;
    border: none;
    cursor:pointer;
    margin-bottom: 2em;
    &:hover {
        background-color:rgba(255, 0, 0, 0.2);
        transition: 0.3s;
        color:#7F00BF;
    }

   .animated-button {
  background: linear-gradient(-30deg, #0b1b3d 50%, #08142b 50%);
  padding: 20px 40px;
  margin: 12px;
  display: inline-block;
  -webkit-transform: translate(0%, 0%);
          transform: translate(0%, 0%);
  overflow: hidden;
  color: #d4e0f7;
  font-size: 20px;
  letter-spacing: 2.5px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

 `

 export {ButtonsStyle, InputStyle}