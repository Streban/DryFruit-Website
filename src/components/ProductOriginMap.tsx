import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import type { OriginLocation } from '../data/productsData';
import 'leaflet/dist/leaflet.css';

// ...existing code...
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

interface ProductOriginMapProps {
  origins: OriginLocation[];
}
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});
const ProductOriginMap: React.FC<ProductOriginMapProps> = ({ origins }) => {
  const center: [number, number] = [30.3753, 69.3451];
  const zoom = 5;

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: 400, width: '100%', borderRadius: 8 }}
      scrollWheelZoom={false}
    >
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
