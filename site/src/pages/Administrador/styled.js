import styled from "styled-components";

const Container = styled.div`

    display: flex;
    flex-direction: column;
    background:url(${'/assets/images/administrador/bg-adm.png'});
    background-size: cover;
    height: 200vh;
    
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
                
                overflow-y: scroll;

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
                            border:none; 
                            border-radius: 1em; 
                            height: 2em;
                            cursor: pointer;
                            &:hover{opacity:0.3;}
                        }
                        .excluir{
                            background-color: red; 
                            color: white; 
                            border:none; 
                            border-radius: 1em; 
                            height: 2em;
                            cursor: pointer;
                            &:hover{opacity:0.3;}
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
                                
                                border-radius: 1em;
                            };
                            button{
                                width: 10em;
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
            }
            .tabela-usuaria{
                width: 86%;
                height: 23em;
                thead{
                    background-color: blue; 
                    border-collapse: none;
                    color: white;
                    
                }
                tbody{
                    height:5em;
                    overflow-y:scroll ;
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
            height: 34.2em;
            
            margin-left: 3em;
            margin-right: 3em;
            margin-top: 1em;
            
            background-color: rgba(255,255,255,0.7);
            
            border-radius: 1em;

            font-family: 'Roboto';
            
            
        
`

export {Container , BoxStyled}