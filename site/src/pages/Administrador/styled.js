import styled from "styled-components";

const Container = styled.div`

    display: flex;
    flex-direction: column;
    background:url(${'/assets/images/administrador/bg-adm.png'});
    background-size: cover;
    height: 100vh;
    
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
    .validar-apoio{

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .b{
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .box-apoio{
            display: flex;
            flex-direction: column;
            align-items: center;
            
            width: 60em;
            height: 34.2em;
            
            margin-right: 3em;

            align-self: center;
            
            background-color: rgba(255,255,255,0.7);
            
            border-radius: 1em;

            font-family: 'Roboto';
            
            .lista-frase{

                width: 53em;
                height: 23em;

                background-color: white;
                
                border-radius: 2em;
                padding: 2em;

                .item{
                    
                    display: flex;
                    
                    p1{
                        width: 39em;
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
        }
    }
`


export {Container}