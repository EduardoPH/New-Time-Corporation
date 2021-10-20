import React from "react";
import {InputStyle, ButtonsStyle} from './styled'

function Inputs(props) {
    return(
        <InputStyle onChange={e => props.valor(e.target.value)} placeholder={props.place}/>
    )

}

function Buttons(props) {
    return(
        <ButtonsStyle onClick={ () => props.clicado} style={{width: props.width }}> {props.valor} </ButtonsStyle> 
    )
}

export { Inputs, Buttons}