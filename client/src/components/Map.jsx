import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css'
const Map = () => {
  const mapOptions = {
    center: [37.5650337, 126.809329], // Set initial map center coordinates
    zoom: 5, // Set initial zoom level
  };

  return (
    <div className="map_section">
    <div class="map">
      <MapContainer
        center={mapOptions.center}
        zoom={mapOptions.zoom}
        style={{ height: '400px', width: '80rem' }}
        scrollWheelZoom={false}
      >
       
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        
        <Marker position={[37.5650337, 126.809329]}>
          <Popup>Seoul, South Korea</Popup>
        </Marker>
      </MapContainer>
    </div>
    </div>
  );
};

export default Map;
