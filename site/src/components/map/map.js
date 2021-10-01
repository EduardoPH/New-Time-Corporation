import React from "react"
import {GoogleMap, useLoadScript, Marker, InfoWindow} from '@react-google-maps/api'
//import {format, formatRelative} from 'date-fns'
import {MapStyle, ExtraStyles} from "./mapStyle"
import usePlacesAutocomplete, {getGeocode, getLatLng} from 'use-places-autocomplete'
import {Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption} from "@reach/combobox"  
import "@reach/combobox/styles.css"


const libraries = ["places"]

const mapContainerStyle = {
  width: "100vw",
  height: "100vh"
}

const position = {
  lat: -23.7470021,
  lng: -46.6677506
}

const options = {
  styles: MapStyle,
  disableDefaultUI: true,
}


export default function Map() {
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: "AIzaSyBmWg6SrxvblQHjMwlinmCLc9RU3bIu3-A",
    libraries
  });

  const [markers, setMarkers] = React.useState([]);
  const [select, setSelect] = React.useState(null);

  const MarkerSelect = React.useCallback((e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date()
      },
    ]);
  }, []);

  const mapRef = React.useRef();
  const loadMap = React.useCallback((map) => {
    mapRef.current = map;
  }, [])


  if(loadError) 
    return "Erro ao carregar mapa"
  if(!isLoaded)
    return "Carregando Mapa"


  return(
    <div className="Map"> 
    <h1 style={{ position: "absolute", top: "1em", left: "1em", zIndex: "10", color: "#fff"}}> 
      NTC{" "}
      <span> Logo </span>   
    </h1>

      <Search/> 

      <GoogleMap 
        mapContainerStyle={mapContainerStyle} 
        zoom={13} 
        center={position} 
        options={options}
        onClick={MarkerSelect}
        onLoad={loadMap}
        >

          {markers.map(marker => 
            <Marker 
              key={marker.time.toISOString()} 
              position={{lat: marker.lat, lng: marker.lng}} 
              icon={{}}
              onClick={() => {
                setSelect(marker)
              }}
            />)}

            <Marker
              position={{lat: position.lat, lng: position.lng}}
            />

            {select ? (<InfoWindow position={{lat: select.lat, lng: select.lng }} onCloseClick={() => {
              setSelect(null)
            }}>
              <div> 
                <h2> Janelinha </h2>
                <div>  "Conteudo da janela"</div>
              </div>
            </InfoWindow>) : null}
      </GoogleMap>
    </div>
  )
}


 function Search() {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue
  } = usePlacesAutocomplete();

  const handleInput = (e)=> {
    setValue(e.target.value);
  };

  const handleSelect = (val)=> {
    setValue(val, false);
  };

  const renderSuggestions = () => {
    const suggestions = data.map(({ place_id, description }) => (
      <ComboboxOption key={place_id} value={description} />
    ));

    return (
      <>
        {suggestions}
        <li className="logo">
          <img
            src="https://developers.google.com/maps/documentation/images/powered_by_google_on_white.png"
            alt="Powered by Google"
          />
        </li>
      </>
    );
  };

  return (
    <div className="App">
      <h1 className="title">USE-PLACES-AUTOCOMPLETE</h1>
      <p className="subtitle">
        React hook for Google Maps Places Autocomplete.
      </p>
      <Combobox onSelect={handleSelect} aria-labelledby="demo">
        <ComboboxInput
          style={{ width: 300, maxWidth: "90%" }}
          value={value}
          onChange={handleInput}
          disabled={!ready}
        />
        <ComboboxPopover>
          <ComboboxList>{status === "OK" && renderSuggestions()}</ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
