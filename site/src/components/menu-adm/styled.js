import styled from "styled-components";
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

        img{width: 3em}

    }
`
export{MenuLateralStyled}