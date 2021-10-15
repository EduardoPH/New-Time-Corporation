import styled from "styled-components";

const Container = styled.div`

    display: flex;
    flex-direction: column;
    background:url(${'/assets/images/administrador/bg-adm.png'});
    background-size: cover;
    height: auto;
    min-height: 100vh;
    
    .Top-Adm{
        
        align-self: center;

        width: 10em;

        background-color: white;
        border-end-end-radius: 1em;
        border-end-start-radius: 1em;

        color:#0109D3;
        font-weight: 900;
        font-size: 30px;
        text-align: center;

        margin-bottom: 1em;
        padding: 7px;
    }
    .boxs{

        display: flex;
        flex-direction: row;
        height: 100%;

        .box-direita{
            display: flex; 
            flex-direction: column; 
            align-items: center;
            height: 100%;
            width: 100%;
            
        };
       
        .box-infor-user{
            display: flex;
            flex-direction: row;
            height:100%;
            width: 100%;

            .informas{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 25%;
                padding: 2em;
                background-color: white;
                border-radius: 15px;
                margin: 1em;
                max-height: 22em;
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
                    cursor:auto;
                }
                button{
                    color: white;
                    background: rgba(1, 11, 225, 0.62);
                    border-radius: 16px;
                    padding: 1em;
                    border: solid 0px;
                    cursor: pointer;
                    outline: none;
                    &:hover{
                        color: rgba(1, 11, 225, 0.62); 
                        background: white;
                        transition: 0.5s;
                        border: solid 4px;
                        border-color:rgba(1, 11, 225, 0.62);
                        
                    }
                }
            }
            .denunciasCadastradas{
                width: 100%;
                margin: 1em;
                overflow-y: auto;
                overflow-x: hidden;

                .item-denun{
                    
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;

                    width: 100%;
                    height: auto;

                    background: #FFFFFF;
                    border-radius: 14px;
                    
                    margin-bottom: 1em;
                    padding: 1em;

                    .lado-direito{
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        font-size:1em;
                        font-family: Arial, Helvetica, sans-serif;
                        font-weight: bolder;

                        p2{
                            cursor: pointer;
                            font-style: italic;
                            &:hover{
                                text-decoration: underline;
                            }
                            
                        }
                    }
                    .lado-esquerdo{
                        width: 85%;
                        height: 100%;

                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;

                        p1{
                            width: 80%;
                            word-wrap: break-word;
                        }

                        .btms{
                            width: 25%;
                            display: flex;
                            justify-content: space-between;
                            margin-top: 1em;
                            .alterar{
                                background: #111AE3;
                                border-radius: 15px;
                                font-family: Arial, Helvetica, sans-serif;
                                font-weight: bold;
                                font-size: 1em;
                                padding: 0.5em 1em;
                                color: #FFFFFF;
                                border: solid 0px;
                                cursor: pointer;

                                &:hover{
                                    background: white;
                                    color: #111AE3;
                                    border: solid 1px;
                                    border-color: #111AE3;
                                    transition: 0.3s;
                                }
                            }
                            .excluir{
                                background: #FF0000;
                                border-radius: 15px;
                                font-family: Arial, Helvetica, sans-serif;
                                font-weight: bold;
                                font-size: 1em;
                                padding: 0.5em 1em;
                                color: #FFFFFF;
                                border: solid 0px;
                                cursor: pointer;

                                &:hover{
                                    background: white;
                                    color: #FF0000;
                                    border: solid 1px;
                                    border-color: #FF0000;
                                    transition: 0.3s;
                                }
                            }
                        }
                    }
                }
            }
        }   
    }
`

const MenuLateralStyled= styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    width: 6em;
    height: 35em;

    margin-top: 1em;
    

    background-color: white;


    border-top-right-radius: 1em;
    border-bottom-right-radius: 1em;
    

    .item-menu {
    
        width:3em;

        img{width: 3em;cursor: pointer;}
        cursor: pointer;
        &:hover{
            opacity: 0.5;
        }

    }
`
const BoxStyled = styled.div`

            display: flex;
            flex-direction: column;

            justify-content: center;
            align-items: center;
            align-self: center;

            width: 93%;
            height: auto;
            
            margin-left: 3em;
            margin-right: 3em;
            margin-top: 1em;
            
            background: rgba(255, 255, 255, 0.5);
            backdrop-filter: blur(7px);
            border-radius: 30px;  
            

            font-family: 'Roboto';

`

export {Container , MenuLateralStyled, BoxStyled} 