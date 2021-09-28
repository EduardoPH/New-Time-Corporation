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
        .box-apoio{
            .lista-apoio{
                
                width: 86%;
                height: 23em;
                
                overflow-y: auto;

                .item-frase{

                    display: flex;

                    background-color: white;
                    border-radius: 1em;
                    padding: 1.5em;
                    margin-bottom: 1em;
                    margin-right: 1em;

                    p1{
                        width: 86%;

                    }

                    .btm-acao{
                        display: flex;
                        flex-direction: row;
                        justify-content: space-evenly;
                        width: 10em;
                        align-items: center;

                        .alterar{
                            background-color: blue; 
                            color: white; 
                            border:solid 4px;
                            border-color: blue; 
                            border-radius: 1em; 
                            height: 2em;
                            cursor: pointer;
                            &:hover{color:blue; background-color: white}
                        }
                        .excluir{
                            background-color: red; 
                            color: white; 
                            border:solid 4px;
                            border-color: red; 
                            border-radius: 1em; 
                            height: 2em;
                            cursor: pointer;
                            &:hover{color:red; background-color: white}
                        }

                    }

                    
                }
            }
            .input-frase{
                        width: 86%;
                        display: flex;
                        justify-content: space-between;
                        margin-top: 1em; 

                            input{
                            
                                width: 86%;
                                height: 4em;

                                outline: none;
                                cursor:auto;

                                border-radius: 1em;
                                margin-bottom: 1em;

                               
                            };
                            button{
                                width: 10em;
                                height: 4em;
                                border-radius: 10px;
                                background-color: green;
                                color: white;
                                border: solid 0px;
                                cursor:pointer;
                                &:hover{
                                    transition: 5ms;
                                    opacity:0.5;
                                    background-color: white;
                                    color: green;
                                    border: solid 3px;
                                    border-color: green;
                                }
                            }

                            
                        }
        };
        .box-usuarias{
            input{
                width: 86%;
                height: 3em;
                outline:none;
                cursor:auto;
            }
            .tabela-usuaria{
            margin-top:1em;
            width: 86%;
            border-collapse: collapse;
           
            th{
                color: white;
                font-size: 1.5em;
                background-color:#010BE1;
                font-family: 'arial';
                
                
            }
            td{
                text-align: center;
                padding: 8px;
                font-size: 18px;
                font-family: arial;
                font-weight: 600;

            }
            .coluna-acao button{
                color: white;
                font-family: arial;
                border: solid 4px;
                border-color: #111AE3;
                background: #111AE3;
                border-radius: 100px;
                cursor :pointer;  
                width: 6em;
                &:hover{
                    background: #FFFF;
                    color: #111AE3;
                    transition: 1s;

                }         
            }
            .previa{
                background: #DCDCDC;
                width: 23em;
                height: auto;
                border-style: solid;
                border-width: 2px;
                border-color: white;
            }
        }
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
                
            }
            .cadastrados{
                height: 90%;
                background-color: rgba(196,196,196,0.5);
                border-radius: 20px;
                width: 45%;
                padding: 2em;
                overflow-y: auto;

                .adm-cad{
                    background-color: white;
                    height: 6em;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    padding: 1em;
                    border-radius: 10px;
                    margin-bottom: 1em;
                    .nome-senha{
                        display: flex;
                        justify-content: space-between;
                        

                        p1{
                            font-family: arial;
                            font-size: 1em;
                            font-weight: bolder;
                        }
                        .btm-alt{
                            width: 6em;
                            background: blue;
                            border: solid 4px;
                            border-color: blue;
                            color: white;
                            cursor: pointer;
                            border-radius: 5px;
                            &:hover{
                                color: blue;
                                background-color: white;
                                transition: 1s;
                            }
                        }
                        .btm-excluir{
                            width: 6em;
                            background: red;
                            border: solid 4px;
                            border-color: red;
                            color: white;
                            cursor: pointer;
                            border-radius: 5px;
                            &:hover{
                                color: red;
                                background-color: white;
                                transition: 1s;
                            }
                        }
                    }
                }
            }
        }
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
        .box-denuncia{
            display: flex;
            flex-direction: column;
            width: 80%;
            .cabecalho{
                display: flex;
                flex-direction: row;
                align-items: center;
                .informacoes-usuaria{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    padding-left: 1em;
                    width: 100%;
                    p1, span{
                        font-size: 1.3em;
                        font-family: Arial;
                        font-weight: bolder;
                    }
                    button{
                        width: 7em;
                        background: blue;
                        color: white;
                        border: solid 3px blue;
                        font-size: 1.1em;
                        padding: 0px 2em;
                        cursor: pointer;
                        &:hover{
                            background: white;
                            color: blue;
                            transition: 1s;
                        }
                    }
                }
            } 
            textarea{
                width: 88%;
                height: 27em;
                resize: none;
                outline: none;
                align-self: flex-end;
                border-radius: 15px;
                cursor: pointer;
            }
            .btms-acoes{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-self: flex-end;
                width: 88%;
                height: 3em;
                button{
                    width: 11em;
                    border: solid 3px;
                    color: white;
                    font-size: 1.5em;
                    font-family: Arial,Helvetica,sans-serif;
                    font-weight: 700;
                    cursor: pointer;
                    margin: 5px 0px;
                    border-radius:20px;
                }
                .excluir{
                    background: red;
                    border-color:red;
                    &:hover{
                        color: red;
                        background: white;
                        transition: 1s;
                    }
                }
                .alterar{
                    background: blue;
                    border-color:blue;
                    &:hover{
                        color: blue;
                        background: white;
                        transition: 1s;
                    }
                }
                .validar{
                    background: #00C920;
                    border-color:#00C920;
                    &:hover{
                        color: #00C920;
                        background: white;
                        transition: 1s;
                    }
                }
                
            }
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
const MenuLateralStyled= styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    width: 6em;
    height: 35em;

    margin-top: 1em;
    

    background-color: white;
    position: sticky;
    top: 11em;

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

export {Container , BoxStyled, MenuLateralStyled} 