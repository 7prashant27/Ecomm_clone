import React, { useState, useEffect, useRef } from "react";
import {
  MapContainer as LeafletMap,
  TileLayer,
  Marker,
  Polygon,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import { heading } from "../styles/leaftletStyle";

const parentDiv = {
  height: "100vh",
  width: "100vw",
  backgroundColor: "grey",
  padding: "5px",
  boxSizing: "border-box",
};

const dummyPointData = [
  { id: 1, lat: 23.505, lng: 86.309, name: "Ranchi" },
  { id: 2, lat: 28.51, lng: 77.111, name: "Delhi" },
  { id: 3, lat: 19.51, lng: 74.111, name: "Mumbai" },
  { id: 4, lat: 22.57, lng: 88.36, name: "Kolkata" },
  { id: 5, lat: 17.51, lng: 78.111, name: "Hyderabad" },

];

const dummyPolygonData = [
  {
    id: 1,
    coordinates: [
      [23.244, 70.309],
      [25.244, 80.309],
      [27.51, 74.01],
    ],
  },
  {
    id: 2,
    coordinates: [
      [33.244, 75.309],
      [35.244, 86.309],
      [47.51, 79.01],
    ],
  },
];

const MapContainer = () => {
  const [pointData, setPointData] = useState([]);
  const [polygonData, setPolygonData] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [clickedLocation, setClickedLocation] = useState(null);



  
  useEffect(() => {
    setPointData(dummyPointData);
    setPolygonData(dummyPolygonData);
  }, []);


  const handleMapClick = (event) => {
    const { latlng } = event;
    console.log("Clicked position:", latlng.lat, latlng.lng);
    setClickedLocation(latlng);
  
  };

  const getFeatureData = (latlng) => {
    return { lat: latlng.lat, lng: latlng.lng };
  };

  return (
    <div style={ parentDiv }>
      <div
        style={{ backgroundColor: "cyan", padding: 10, margin: "10px auto", textAlign:'center' }}
      >
        <h1> React Map</h1>
      </div>
      <LeafletMap
        center={[23.244, 85.309]}
        zoom={10}
        scrollWheelZoom={false}
        onClick={handleMapClick}
        style={{ height: "80vh",  margin: "10px" ,position: "relative"}}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {pointData.map((point) => (
          <Marker
            key={point.id}
            position={[point.lat, point.lng]}
            icon={
              new Icon({
                iconUrl: markerIconPng,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
              })
            }
          >
            <Popup>
              The name of the city is <br /> {point.name}
            </Popup>
          </Marker>
        ))}
        {polygonData.map((polygon) => (
          <Polygon
            key={polygon.id}
            pathOptions={{ color: "red" }}
            positions={polygon.coordinates}
          />
        ))}
      </LeafletMap>

      {clickedLocation && (
        <div
          className="card"
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: "white",
            padding: 10,
          }}
        >
          <h3>Clicked Location</h3>
          <p>Latitude: {clickedLocation.lat}</p>
          <p>Longitude: {clickedLocation.lng}</p>
        </div>
      )}
    </div>
  );
};

export default MapContainer;
