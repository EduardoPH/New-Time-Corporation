import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Circle } from 'google-maps-react';
import {MapStyle, containerStyle} from './mapStyle.js'
import Geocode from "react-geocode";


Geocode.setApiKey("AIzaSyBmWg6SrxvblQHjMwlinmCLc9RU3bIu3-A")

 




export class  Mapa extends Component{

  constructor(){
    super();
    this.state={lat: 37.778519, lng: -122.40564, end: ""}
  }

   loc(end) {
    Geocode.fromAddress(end).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        this.setState({...this.state, lat: lat, lng: lng})
        console.log(this.state.lat, this.state.lng)
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
 
  render(){
    return(
      <div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <input style={{padding: '5px', outline: 'none', marginBottom: '10px'}} onChange={(e) => this.setState({...this.state, end: e.target.value} )} placeholder="digite o endereço..."/>
          <button style={{backgroundColor: 'white', outline: 'none',cursor: 'pointer', borderRadius: '30px',border:'0px', marginTop: '1em', marginBottom: '10px'}} onClick={() => this.loc(this.state.end)}> Localização </button> 
        </div>
        
        <Map 
          google={this.props.google}
          zoom={16}
          center={{lat: this.state.lat, lng: this.state.lng}}
          styles={MapStyle}
          disableDefaultUI={true}
          containerStyle = {containerStyle}
        >
          <Circle
        radius={100}
        center= {{lat: this.state.lat, lng:  this.state.lng }}
        strokeColor='transparent'
        strokeOpacity={0}
        strokeWeight={5}
        fillColor='#FF0000'
        fillOpacity={0.2}
      />

        </Map>
      </div>
    )
  }
}



export default GoogleApiWrapper((props) => ({
  apiKey: 'AIzaSyBmWg6SrxvblQHjMwlinmCLc9RU3bIu3-A',
}))(Mapa)