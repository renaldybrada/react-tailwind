import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function MyMap() {
    const [coordinates, setCoordinates] = useState({
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
    });
    const [position, setPosition] = useState([coordinates.lat, coordinates.lng]);

    return (
        <MapContainer center={position} zoom={coordinates.zoom}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Marker position={position}>
            <Popup>
                <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
            </Popup>
            </Marker>
        </MapContainer>
    );
}