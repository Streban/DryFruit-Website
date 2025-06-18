import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import type { OriginLocation } from '../data/productsData';
import 'leaflet/dist/leaflet.css';


interface ProductOriginMapProps {
  origins: OriginLocation[];
}

const ProductOriginMap: React.FC<ProductOriginMapProps> = ({ origins }) => {
  const center: [number, number] = [30.3753, 69.3451];
  const zoom = 5;

  return (
    <MapContainer center={center} zoom={zoom} style={{ height: 400, width: '100%', borderRadius: 8 }} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {origins.map((origin) => (
        <Marker key={origin.name} position={origin.coordinates}>
          <Popup>{origin.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default ProductOriginMap; 