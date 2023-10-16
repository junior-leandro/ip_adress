'use client'

import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import MarkerIcon from '../../assets/icon-location.svg';
import MarkerShadow from '../../../node_modules/leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';

export function Map() {

    let Position1 = 43.7311849000665;
    let Position2 = 7.414873166794561;
    
    return (
        <section className='bg-green-500'>
            
            <div>

                <MapContainer style={{
                    height: '65vh',
                    width: '100vw', 
                }} center={[Position1 , Position2 ]} zoom={20} scrollWheelZoom={true}>
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
                    } position={[Position1, Position2]}>
                        <Popup>
                            Você está aqui. <br /> :D
                        </Popup>
                    </Marker>

                </MapContainer>

            </div>
        </section>
    )
}
