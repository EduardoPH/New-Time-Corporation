
import {GoogleMap, withScriptjs, withGoogleMap,} from 'react-google-maps'

var axios = require('axios');

const API_KEY = "AIzaSyBmWg6SrxvblQHjMwlinmCLc9RU3bIu3-A"

var config = {
  method: 'get',
  url: `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=mongolian&inputtype=textquery&locationbias=circle%3A2000%4047.6918452%2C-122.2226413&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=${API_KEY}`,
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});




function Map() {
    return(
        <GoogleMap
            defaultZoom={12}
            defaultCenter={{lat:-23.7470037, lng: -46.6677534 }} />
    )
}




const RespMap = withScriptjs(withGoogleMap(Map))

console.log(API_KEY, RespMap)
export default function App() {
    return(
        <div style={{width: '100vw', height: '100vh'}}>
            <input placeholder="DIGITE UM ENDEREÇO..."/>
            <RespMap 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_KEY}`} 
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    )
}

