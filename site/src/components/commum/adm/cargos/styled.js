import styled from "styled-components";

const BoxStyled=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    h1{
        color: black;
        font-size: 3em;
        font-family: Roboto;
    }
    .box-adm{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        
        width: 80%;
        height: 60vh;
        margin-bottom: 1em;
        
        background: #FFFFFF;
        border-radius: 30px;
        .nv-adm{

            font-family: arial;
            font-size: 1em;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;


            background-color: rgba(196,196,196,0.5);
            border-radius: 20px;

            height: 90%;
            width: 45%;

            padding: 2em;

            .nv-senha{
                display: flex;
                flex-direction: column;
                width: 80%;

                font-family: arial;
                font-size: 1.3em;

                input{
                    height: 3em;
                    border: solid 2px;
                    border-radius: 50px;
                    cursor: pointer;
                    outline: none;
                }
            }
            button{
                width: 80%;
                height: 2em;
                background: #01BC1F;
                color: white;
                border: solid 3px;
                border-color: #01BC1F;
                font-size: 1.3em;
                cursor: pointer;
                &:hover{
                    background: white;
                    color: #01BC1F;
                    transition: 1s;
                }
            }
            .Alterar{
                background-color: blue;
                border: solid 0px;
            }
            
    }
        
        .cadastrados{
            height: 90%;
            background-color: rgba(196,196,196,0.5);
            border-radius: 20px;
            width: 45%;
            padding: 2em;
            overflow-y: auto;
        }
    }
`;

export default BoxStyled;