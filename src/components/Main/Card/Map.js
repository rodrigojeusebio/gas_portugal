import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet'
// import "./Map.css"

export default function Map(){
    return(
        <MapContainer center={[39.353305, -9.362397]} zoom={13} >
  
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            /> 
            <Marker position={[39.353305, -9.362397]}>
                <Popup>
                    I am a pop-up!
                </Popup>
            </Marker>
        </MapContainer>
    )
}


