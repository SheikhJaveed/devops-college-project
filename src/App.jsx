import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./App.css";

// Fix for leaflet icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

function App() {
  const [location, setLocation] = useState({ lat: 12.9716, lng: 77.5946 });

  useEffect(() => {
    const interval = setInterval(() => {
      fetchDummyBusLocation();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const fetchDummyBusLocation = () => {
    const newLocation = {
      lat: 12.9716 + Math.random() * 0.01,
      lng: 77.5946 + Math.random() * 0.01,
    };
    setLocation(newLocation);
  };

  return (
    <div className="app">
      <div className="header">🚍 College Bus Tracker</div>
      <MapContainer center={[location.lat, location.lng]} zoom={15} className="map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={[location.lat, location.lng]}>
          <Popup>📍 College Bus Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
