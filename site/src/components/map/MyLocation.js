import React, { useState } from "react";
import { geolocated } from "react-geolocated";

class Demo extends React.Component {    
     render() {
       return !this.props.isGeolocationAvailable ? (
         <div> Seu navegador não suporta localização </div>
       ) : !this.props.isGeolocationEnabled ? (
       <div> Permita o acesso a localização em seu navegador</div>
       ) : this.props.coords ? (
        <div>
            <div className="latitude">{this.props.coords.latitude} </div>
            <div className="longitude">{this.props.coords.longitude} </div>
      </div>
       ) : (
         <div>Getting the location data&hellip; </div>
       );
     }
 }

export default geolocated({
     positionOptions: {
         enableHighAccuracy: false
     },
     userDecisionTimeout: 5000
})(Demo)
  



