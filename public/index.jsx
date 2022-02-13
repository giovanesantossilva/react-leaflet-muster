import "leaflet/dist/leaflet.css";

import React from "react";
import { Icon } from 'leaflet';
import { render  } from "react-dom";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

import { MarkerMuster } from "../src/Muster";

const position = [-22.2108112, -49.6771926];

const App = () => {
    const icon = new Icon({ iconUrl: require('./marker.png'), iconSize: [ 35, 35 ] });
    return(
        <MapContainer
            zoom={14}
            center={position}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerMuster>
                <Marker position={[-22.2108112, -49.6771926]} icon={icon}/>
                <Marker position={[-22.2108112, -49.6771926]} icon={icon}/>
                <Marker position={[-22.2108112, -49.6771926]} icon={icon}/>
                <Marker position={[-22.2108112, -49.6771926]} icon={icon}/>
                <Marker position={[-22.2108112, -49.6771926]} icon={icon}/>
                <Marker position={[-21.210309, -47.647063]} icon={icon}/>
            </MarkerMuster>
        </MapContainer>
    )
}

render(
    <App/>
, document.getElementById("root"));
