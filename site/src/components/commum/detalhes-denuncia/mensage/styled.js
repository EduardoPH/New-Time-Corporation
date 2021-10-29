import styled from 'styled-components';

const Container = styled.div`
  display: flex;
    flex-direction: column;

    .pt1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .pack-user {
        display: flex;
        flex-direction: row;
    }

    .user-name {
        color: white;
        font-size: 1.8em;
        margin-left: 0.5em;
    }

    .cx-mensagem {

        width: 87%;
        height: 100%;
        padding: 1em;
        background-color: white;
        margin: 0.7% 0% 0% -7.4%;
        border-radius: 8px;
    }

    .msg-denuncia {
        padding-left: 1em;
        font-size: 1.4em;
    }

    .pt2 {
        margin-left: 4em;
    }

    .box-msg {
        display: flex;
        flex-direction: row;
        height: 40vh;
    }

    .box-msg img {
        height: 42px;
        width: 13%;
        top: 2em;
    }
`;

export {Container}
