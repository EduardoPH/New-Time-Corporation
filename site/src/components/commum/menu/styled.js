import styled from 'styled-components';

const Container= styled.div`
    

    display: flex;
    flex-direction: row;
    
    justify-content: space-between;
    align-items: center;

    width: 100%;
    flex-wrap: wrap;
    max-height: auto;

    padding: 0.3em 3em 0em 1em; 

    .logo img{

        height: 3.2em;
        margin-top: 5px;
        cursor: pointer;

    }

    .item-menu{
        
        display: flex;
        align-items: center;

        cursor:pointer;

        color: white;

        font-size: 22px;
        font-weight: 700;
        font-family: 'Roboto';
        
        img{margin-left: 10px;}
        &:hover {
            color: purple;
            transition: 0.3s;
        }
        
    }

    button{
        background-color: red;
        color:white;

        border: solid 1px;
        border-color: red;
        border-radius: 7px;
        padding: 0.5em 2em ;
        
        font-size: 18px;
        font-weight: 700;
        font-family: 'Roboto';
        cursor:pointer;
        &:hover{background-color:purple; ; transition: 0.3s}
    }

    @media (max-width: 1000px){
        justify-content: none;

        
    }
`
export {Container}