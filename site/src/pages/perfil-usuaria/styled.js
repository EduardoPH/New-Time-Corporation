 import styled from 'styled-components';

 const Container = styled.div`
 display:flex;
 flex-direction: column;

 .corpo-central{
     h1{color: white; font-size: 3em;};
     
     font-family: 'Roboto';
     width: 96%;
     height:96%;
     display: flex;
     align-items: center;
     flex-direction: column;
     align-self: center;
     .box{
        width: 90%;
        display: flex;
        flex-direction: column;
        height: 76%;
        padding: 4em;
        background-color: rgba(127, 0, 191, 0.59);
        backdrop-filter: blur(7px);
        border-radius: 6px;
        overflow-x: auto;
        .cabecalho{
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 4em;
            justify-content: space-between;
            align-items: center;

            h2{
                color: white;
                font-size:2em;
                font-family: Arial, Helvetica, sans-serif;
            }
            button{
                color: white;
                background: #FF0000;
                border: 3px solid #FFFFFF;
                border-radius: 29px;
                width: 10em;
                padding: 1em;
                cursor: pointer;
                &:hover{
                    color:  #FF0000; 
                    background: white;
                    transition: 0.5s;
                    border: solid 4px;
                    border-color: #FF0000;
                        
                }
            }

            .infos-usuarias{
                display: flex;
                font-size: 2em;
                align-items: center;
                width: 10em;
                justify-content: space-between;
                color: white;
            }
        }
        .parte-final-box{
            display: flex;
            flex-direction: row;
            height:100%;
            width: 100%;
            max-height: 23.5em;
            overflow-x: auto;

            .informas{
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
            }
            .denunciasCadastradas{
                width: 100%;
                margin: 1em;
                text-align: center;
                color: white;
                font-family: 'Roboto';
                font-weight: bolder;
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
                                border: solid 1px;
                                cursor: pointer;

                                &:hover{
                                    background: white;
                                    color: #111AE3;
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
                                border: solid 1px;
                                cursor: pointer;

                                &:hover{
                                    background: white;
                                    color: #FF0000;
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
 }

 `

 export {Container}