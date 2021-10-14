import sytled from 'styled-components';

const Container= sytled.div`
    
    text-decoration-line: underline;

    display: flex;
    flex-direction: row;
    
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-height: 6em;

    padding: 0em 3em 0em 1em; 

    .logo img{

        height: 4em;
        margin-top: 5px;

    }

    .item-menu{
        
        display: flex;
        align-items: center;

        color: white;

        font-size: 22px;
        font-weight: 700;
        font-family: 'Roboto';
        
        img{margin-left: 10px;}
        
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
        &:hover{background-color:purple; ; transition: 0.3s}
    }
`
export {Container}