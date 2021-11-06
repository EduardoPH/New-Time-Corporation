import styled from 'styled-components';

const Container = styled.div`
  display: flex;
        flex-direction: column;
        text-align: center;

        .container-caracter {
            margin-left: auto;
            margin-right: auto;
            width: 83%;
            padding: 1em;
            border-radius: 7px;
            

            background-color: white;
        }

        .box-detalhes {
            display: flex;
            flex-direction: column;
        }

        .titulo-caracter {
            font-size: 2.7em;
            color: #FFFFFF
        }

        .title-details-caracters {
            font-size: 2em;
        }

        .box-carac {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
        }

        .box-detalhe {
            text-align: start;
        }

        .title-box{
            font-size: 1.5em;
            display: flex;
            flex-direction: column;
        }
`;

export {Container}
