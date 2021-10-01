import { Map, GoogleApiWrapper } from 'google-maps-react';

export class Mapa extends Comment{
  render() {
    return(
      <Map 
        google={this.props.google}
        zoom={10}
        initialCenter={{lat: -27.0922364, lng: -52.6166878}}
      />

    )
  }
}

export default GoogleApiWrapper((props) => ({
  apiKey: 'AIzaSyBmWg6SrxvblQHjMwlinmCLc9RU3bIu3'
}))(Mapa)