import {Button} from './styled'

export default function App(props){

    function verifColor(type, heigth, width, font){

        if(type === 'alterar'){
            return {backgroundColor: "blue", height: heigth, width: width, fontSize: font }
        } else if(type === 'excluir'){
            return {backgroundColor: "red", height: heigth, width: width, fontSize: font}
        } else if(type === 'adicionar'){
            return {backgroundColor: "#00C920", height: heigth, width: width, fontSize: font}
        }
    }

    return(
        <Button style={verifColor(props.type, props.height, props.width, props.font)} > {props.type} </Button>
    )
}