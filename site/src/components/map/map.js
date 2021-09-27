import {GoogleMap, withScriptjs, withGoogleMap,} from 'react-google-maps'


function Map() {
    return(
        <GoogleMap
            defaultZoom={12}
            defaultCenter={{lat:-23.7470037, lng: -46.6677534 }} />
    )
}


const API_KEY = "AIzaSyBmWg6SrxvblQHjMwlinmCLc9RU3bIu3-A"

const RespMap = withScriptjs(withGoogleMap(Map))

export default function App() {
    return(
        <div style={{width: '100vw', height: '100vh'}}>
            {/* <RespMap 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_KEY}`} 
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            /> */}
        </div>
    )
}

