import Map from '../../components/commum/map/map.js'
import {MapStyle} from './styled'

export default function App(props){
    return(
        <MapStyle>
            <div className="tiitle"> Localização </div>
            <Map info={props.info} />
        </MapStyle>
    )
}