import styled from 'styled-components';

const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content:space-between;
    height: 100vh;
    font-family: 'Roboto';

    .inferior{
        height: 100%;
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        
        color: white;
        font-family: 'Roboto';
        font-weight: 900;


        .box-Login{
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            width: 50%;
            height: 60%;
            background: rgba(127, 0, 191, 0.59);
            backdrop-filter: blur(7px);
            border-radius: 6px;
            
            p1{
                font-size: 1.5em;
            };
            input{
                width: 28em;
                height:3em;
                outline: none;
            }
            button{
                width: 28em;
                height: 3em;
                color: white;
                border: 1px solid;
                background-color: #7F00BF96;
                border-radius: 15px;
                font-size: 1em;
                cursor:pointer;
            }
        }
    }


`


export default Container;