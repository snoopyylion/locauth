import "./location.css"
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
// import {  divIcon } from "leaflet";
import useGeolocation from "./useGeolocation";


export default function location() {
      // markers
  // const markers = [
  //   {
  //     geocode: [6.6194, 3.5105],
  //     popUp: "Hello, I am pop up 1"
  //   },
  //   {
  //     geocode: [6.5244, 3.3792],
  //     popUp: "Hello, I am pop up 2"
  //   },
  //   {
  //     geocode: [7.3775, 3.9470],
  //     popUp: "Hello, I am pop up 3"
  //   }
  // ];

  const location = useGeolocation();

  const showyLocation = () => {
    if(location.loaded && !location.error) {
      mapRef.current.leafletElement.flyTo(
        [location.coordinates.lat, location.coordinates.lng], 
        ZOOM_LEVEL, 
        { animate: true }
        );
  }else{
    alert(location.error.message)
  }
}


  // const createCustomClusterIcon = (cluster) => {
  //   return divIcon({
  //     html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
  //     className: "custom-marker-cluster",
  //   });
  // };
  return (
    <div>
      <button onClick={showyLocation}>Show Location</button>
      <MapContainer center={[6.6194, 3.5105]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />


           {location.loaded && !location.error && (
            <Marker 
            position={[
              location.coordinates.lat, 
              location.coordinates.lng,
            ]}
            ></Marker>
           )}

      </MapContainer>
    </div>
  )
}
