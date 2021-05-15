import React, { useState } from 'react';
import ErrorBoundary from 'components/ErrorBoundary';
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

export default function MyMap(props) {
    const [coordinates, setCoordinates] = useState({
        lat: props.lat,
        lng: props.lon,
        zoom: 13,
    });
    const [position, setPosition] = useState([coordinates.lat, coordinates.lng]);
    
    function openPopup (marker) {
        if (marker && marker.leafletElement) {
            window.setTimeout(() => {
            marker.leafletElement.openPopup()
            })
        }
    }

    function ChangeView({ center, zoom }) {
        const map = useMap();
        map.setView(center, zoom);
        return null;
    }

    // change coordinate when position change
    if (props.lat !== coordinates.lat || props.lon !== coordinates.lng) {
        setCoordinates({
            lat: props.lat,
            lng: props.lon,
            zoom: 13,
        });
        setPosition([props.lat, props.lon]);
    }

    return (
        <ErrorBoundary>
            <MapContainer center={position} zoom={coordinates.zoom}>
                <ChangeView center={position} zoom={coordinates.zoom} /> 
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                <Marker position={position} ref={openPopup}>
                    <Popup>
                        <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
                    </Popup>
                </Marker>
            </MapContainer>
        </ErrorBoundary>
    );
}