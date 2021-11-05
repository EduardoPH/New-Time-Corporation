import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Circle } from 'google-maps-react';
import {MapStyle, containerStyle} from './mapStyle.js'
import Geocode from "react-geocode";


Geocode.setApiKey("AIzaSyBmWg6SrxvblQHjMwlinmCLc9RU3bIu3-A")




export class  Mapa extends Component{

  

  constructor(){
    super();
    this.state={lat: -21.5613462, lng: -42.6564872, end: "", late: -0, lngo: -0, bairro: "", cidade: ""}
  }

   loc(end) {
    Geocode.fromAddress(end).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        let bairro = response.results[0].address_components[1].long_name
        let cidade = response.results[0].address_components[2].long_name
        this.setState({...this.state, late: lat, lngo: lng, bairro, cidade })
      },
      (error) => {
        console.error(error);
      }
    );
  }
  

  render(){
    let r = this.props.info === undefined ? "" : this.props.info
    let p = this.state.late

    if(p !== -0){
      this.props.loca({lat: this.state.late, lng: this.state.lngo, bairro: this.state.bairro, cidade: this.state.cidade })
    }
    
    return(
      <div >
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <input style={{padding: '5px', outline: 'none', marginBottom: '10px', cursor: 'auto'}} onChange={(e) => this.setState({...this.state, end: e.target.value} )} placeholder="digite o endereço..."/>
          <button style={{backgroundColor: 'white', outline: 'none',cursor: 'pointer', borderRadius: '30px',border:'0px', marginTop: '1em', marginBottom: '10px'}} onClick={() => this.loc(this.state.end)}> Localização </button> 
        </div>
        
        <Map 
          google={this.props.google}
          zoom={16}
          initialCenter={{lat: r.lat, lng: r.lgn}}
          center={p === -0 ? {lat: r.lat, lng: r.lgn} : {lat: this.state.late, lng: this.state.lngo}}
          styles={MapStyle}
          disableDefaultUI={true}
          containerStyle = {containerStyle}
        >
          
          <Circle
            radius={100}
            center= {{lat: r.lat, lng: r.lng }}
            
          />

        </Map>
      </div>
    )
  }
}



export default GoogleApiWrapper((props) => ({
  apiKey: 'AIzaSyBmWg6SrxvblQHjMwlinmCLc9RU3bIu3-A',
}))(Mapa)