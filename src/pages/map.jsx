import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import "../style/pages/Home/_map.scss";

// Replace with your Google Maps API key
const googleMapsApiKey = 'AIzaSyCEVExf21H4r5TI0_hqG_rfDxjQIxEKvvo';


// Predefined locations
const defaultLocation = { lat: 25.276987, lng: 55.296249 }; // Default to Dubai

const DubaiVenueLocator = () => {
    const [venueLocations, setVenueLocations] = useState([]);
    const [userLocation, setUserLocation] = useState(defaultLocation);

    // Fetch venues in the user's location
    const fetchVenues = async () => {
        try {
            const response = await fetch(
                `https://coinmap.org/api/v1/venues/?lat1=${userLocation.lat - 0.1}&lat2=${userLocation.lat + 0.1}&lon1=${userLocation.lng - 0.1}&lon2=${userLocation.lng + 0.1}`
            );
            if (response.ok) {
                const data = await response.json();
                setVenueLocations(data.venues || []);
            } else {
                console.error('Error fetching venue locations:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching venue locations:', error);
        }
    };

    useEffect(() => {
        fetchVenues();
    }, [userLocation]);

    const redMarkerIcon = {
        url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
        scaledSize: { width: 32, height: 32 },
    };

    const blueMarkerIcon = {
        url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        scaledSize: { width: 32, height: 32 },
    };

    return (
        <div className="map-container">
            <h2>Crypto Venues Near You</h2>
            <button onClick={() => {
                navigator.geolocation.getCurrentPosition((position) => {
                    setUserLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                });
            }}>
                Find My Location
            </button>
            <div className="map-wrapper">
                <LoadScript googleMapsApiKey={googleMapsApiKey}>
                    <GoogleMap
                        mapContainerStyle={{ height: '100%', width: '100%' }}
                        center={userLocation}
                        zoom={12}
                    >
                        {venueLocations.map((venue, index) => (
                            <Marker
                                key={index}
                                position={{ lat: venue.lat, lng: venue.lon }}
                                icon={venue.category === 'atm' ? redMarkerIcon : blueMarkerIcon}
                                title={venue.name}
                            />
                        ))}
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
};

export default DubaiVenueLocator;
