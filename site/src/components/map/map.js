import React, { Component } from "react";
import { Map, GoogleApiWrapper, Circle, Marker } from "google-maps-react";
import { MapStyle, containerStyle } from "./mapStyle.js";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyBmWg6SrxvblQHjMwlinmCLc9RU3bIu3-A");

export class Mapa extends Component {
  constructor() {
    super();
    this.state = { lat: 0, lng: 0, end: "" };
  }

  loc(end) {
    Geocode.fromAddress(end).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        this.setState({ ...this.state, lat: lat, lng: lng });
        console.log(this.state.lat, this.state.lng);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  render() {
    return (
      <div className="ct-mapa">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <input
            style={{ padding: "5px", outline: "none", marginBottom: "10px" }}
            onChange={(e) =>
              this.setState({ ...this.state, end: e.target.value })
            }
            placeholder="digite o endereço..."
          />
          <button
            style={{
              backgroundColor: "white",
              outline: "none",
              cursor: "pointer",
              borderRadius: "30px",
              border: "0px",
              marginTop: "1em",
              marginBottom: "10px",
            }}
            onClick={() => this.loc(this.state.end)}
          >
            {" "}
            Localização{" "}
          </button>
        </div>

        <Map
          google={this.props.google}
          zoom={15.5}
          center={{ lat: this.state.lat, lng: this.state.lng }}
          styles={MapStyle}
          disableDefaultUI={true}
          containerStyle={containerStyle}
          onMousemove={false}
        >
          <Circle
            radius={230}
            center={{ lat: this.state.lat, lng: this.state.lng }}
            strokeOpacity={0}
            strokeColor="#ffffff"
            fillColor="#FF0000"
          />

          <Marker
            title={"The marker`s title will appear as a tooltip."}
            name={"SOMA"}
            position={{ lat: this.state.lat, lng: this.state.lng }}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper((props) => ({
  apiKey: "AIzaSyBmWg6SrxvblQHjMwlinmCLc9RU3bIu3-A",
}))(Mapa);
