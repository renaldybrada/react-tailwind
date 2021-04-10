import React, { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function MyMap(props) {
    const [coordinates] = useState({
        lat: props.lat,
        lng: props.lon,
        zoom: 13,
    });
    const [position] = useState([coordinates.lat, coordinates.lng]);
    
    function openPopup (marker) {
        if (marker && marker.leafletElement) {
            window.setTimeout(() => {
            marker.leafletElement.openPopup()
            })
        }
    }

    return (
        <MapContainer center={position} zoom={coordinates.zoom}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Marker position={position} ref={this.openPopup}>
            <Popup>
                <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
            </Popup>
            </Marker>
        </MapContainer>
    );
}