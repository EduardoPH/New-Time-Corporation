import React from "react";
import {InputStyle, ButtonsStyle} from './styled'

function Inputs(props) {
    return(
        <InputStyle placeholder={props.place}/>
    )

}

function Buttons(props) {
    return(
        <ButtonsStyle style={{width: props.width }}> {props.valor} </ButtonsStyle> 
    )
}

export { Inputs, Buttons}