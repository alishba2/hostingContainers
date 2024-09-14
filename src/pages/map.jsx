import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios';

// Replace with your Google Maps API key
const googleMapsApiKey = 'AIzaSyCEVExf21H4r5TI0_hqG_rfDxjQIxEKvvo';

const DubaiVenueLocator = () => {
    const [venueLocations, setVenueLocations] = useState([]);

    // Fetch venues in Dubai using Coinmap API
    const fetchDubaiVenues = async () => {
        try {
            const response = await fetch(
                'https://cors-anywhere.herokuapp.com/https://coinmap.org/api/v1/venues/?lat1=25.0&lat2=25.5&lon1=55.0&lon2=55.5'
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
        fetchDubaiVenues();
    }, []);


    const redMarkerIcon = {
        url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
        scaledSize: { width: 32, height: 32 },
    };

    const blueMarkerIcon = {
        url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        scaledSize: { width: 32, height: 32 },
    };

    return (
        <div>
            <h2>Crypto Venues in Dubai</h2>
            <div style={{ height: '400px', width: '100%' }}>
                <LoadScript googleMapsApiKey={googleMapsApiKey}>
                    <GoogleMap
                        mapContainerStyle={{ height: '100%', width: '100%' }}
                        center={{ lat: 25.276987, lng: 55.296249 }} // Center of Dubai
                        zoom={12}
                    >
                        {venueLocations.map((venue, index) => (
                            <Marker
                                key={index}
                                position={{ lat: venue.lat, lng: venue.lon }} // Using `lat` and `lon` from the Coinmap API response
                                icon={venue.category === 'atm' ? redMarkerIcon : blueMarkerIcon} // Different icons for different categories
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
