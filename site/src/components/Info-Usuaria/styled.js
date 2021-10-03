import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 25%;
    padding: 2em;
    background-color: white;
    border-radius: 15px;
    margin: 1em;
    p1{
        font-family: 'Roboto Slab';
    }
    input{
        background-color: white;
        border-color: white;
        border: solid 0px;
        color: black;
        font-family: 'Roboto';
        font-size: 1em;
    }
    button{
        color: white;
        background: rgba(1, 11, 225, 0.62);
        border-radius: 16px;
        padding: 1em;
        border: solid 2px;
        cursor: pointer;
        outline: none;
        &:hover{
            color: rgba(1, 11, 225, 0.62); 
            background: white;
            transition: 0.5s;
            border-color:rgba(1, 11, 225, 0.62);
        }
    }
`
export {Container};