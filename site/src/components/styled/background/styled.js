import styled from "styled-components"

const Fundo = styled.div`
    background:url(${'../assets/images/background/fundo.svg'});
    background-size: cover;
    height: ${(props) => props.height};
`
export {Fundo};