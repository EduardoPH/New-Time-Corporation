import React from "react";
import {InputStyle, ButtonsStyle} from './styled'

function Inputs(props) {
    return(
        <InputStyle value={props.value}  onChange={e => props.valor(e.target.value)} placeholder={props.place}/>
    )

}

function Buttons(props) {
    return(
        <ButtonsStyle onClick={props.clicado} style={{width: props.width, position: props.position, right: props.right, top: props.top}}> {props.valor} </ButtonsStyle> 
    )
}

export { Inputs, Buttons}