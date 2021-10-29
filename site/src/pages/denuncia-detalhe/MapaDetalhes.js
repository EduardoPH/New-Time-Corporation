import Map from '../../components/commum/map/map.js'
import {MapStyle} from './styled'

export default function App(){
    return(
        <MapStyle>
            <div className="tiitle"> Localização </div>
            <Map/>
        </MapStyle>
    )
}