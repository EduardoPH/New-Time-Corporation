import React, { Component, useState } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import {MapStyle} from './mapStyle.js'
import Geocode from "react-geocode";


Geocode.setApiKey("AIzaSyBmWg6SrxvblQHjMwlinmCLc9RU3bIu3-A")

 




export class  Mapa extends Component{

  // this.setState((state) => {
  //   // Importante: use `state` em vez de `this.state` quando estiver atualizando.
  //   return {count: state.count + 1}
  // });

  constructor(){
    super();
    this.state={lat: -21.5613462, lng: -42.6564872, end: ""}
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
        <input onChange={(e) => this.setState({...this.state, end: e.target.value} )} />
        <button onClick={() => this.loc(this.state.end)}> Localização </button> 
        <div id="lat"> {this.state.lat} </div>
        <div id="lng"> {this.state.lng} </div>
        <Map 
          google={this.props.google}
          zoom={17}
          center={{lat: this.state.lat, lng: this.state.lng}}
          styles={MapStyle}
        />
      </div>
    )
  }
}



export default GoogleApiWrapper((props) => ({
  apiKey: 'AIzaSyBmWg6SrxvblQHjMwlinmCLc9RU3bIu3-A',
}))(Mapa)