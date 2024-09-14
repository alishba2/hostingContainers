import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import "../style/pages/Home/_map.scss";

// Replace with your Google Maps API key
const googleMapsApiKey = 'AIzaSyCEVExf21H4r5TI0_hqG_rfDxjQIxEKvvo';

// Predefined locations
const locations = [
    { name: 'Dubai', lat: 25.276987, lng: 55.296249 },
    { name: 'Downtown Dubai', lat: 25.1972, lng: 55.2744 },
    { name: 'Dubai Marina', lat: 25.0782, lng: 54.9480 },
    { name: 'New York', lat: 40.7128, lng: -74.0060 },
    { name: 'London', lat: 51.5074, lng: -0.1278 },
    { name: 'Paris', lat: 48.8566, lng: 2.3522 },
    { name: 'Tokyo', lat: 35.6895, lng: 139.6917 },
    { name: 'Sydney', lat: -33.8688, lng: 151.2093 },
    { name: 'Hong Kong', lat: 22.3193, lng: 114.1694 },
    { name: 'Singapore', lat: 1.3521, lng: 103.8198 },
    // Add more locations as needed
];

const DubaiVenueLocator = () => {
    const [venueLocations, setVenueLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(locations[0]); // Default to Dubai

    // Fetch venues in the selected location
    const fetchVenues = async () => {
        try {
            const response = await fetch(
                `https://cors-anywhere.herokuapp.com/https://coinmap.org/api/v1/venues/?lat1=${selectedLocation.lat - 0.1}&lat2=${selectedLocation.lat + 0.1}&lon1=${selectedLocation.lng - 0.1}&lon2=${selectedLocation.lng + 0.1}`
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
    }, [selectedLocation]);

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
            <h2>Crypto Venues</h2>
            <select
                value={selectedLocation.name}
                onChange={(e) => {
                    const selected = locations.find(location => location.name === e.target.value);
                    setSelectedLocation(selected);
                }}
                className="location-dropdown"
            >
                {locations.map(location => (
                    <option key={location.name} value={location.name}>
                        {location.name}
                    </option>
                ))}
            </select>
            <div className="map-wrapper">
                <LoadScript googleMapsApiKey={googleMapsApiKey}>
                    <GoogleMap
                        mapContainerStyle={{ height: '100%', width: '100%' }}
                        center={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
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
