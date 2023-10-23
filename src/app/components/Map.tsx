'use client'

import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import MarkerIcon from '../../assets/icon-location.svg';
import MarkerShadow from '../../../node_modules/leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';


const Map = () => {

    let Latitude = 43.7311849000665;
    let Longitude = 7.414873166794561;

    return (
        
                <MapContainer style={{height: "67vh", width: "100%"}} center={[Latitude, Longitude]} zoom={18} scrollWheelZoom={true}
                className='relative z-0'>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker icon={
                        new L.Icon({
                            iconUrl: MarkerIcon.src,
                            iconRetinaUrl: MarkerIcon.src,
                            iconAnchor: [12.5, 41],
                            popupAnchor: [0, -41],
                            shadowUrl: MarkerShadow.src,
                            shadowSize: [41, 41],
                        })
                    } position={[Latitude, Longitude]}>
                        <Popup>
                            Você está aqui. <br /> :D
                        </Popup>
                    </Marker>

                </MapContainer>
                
    )
}

export default Map;