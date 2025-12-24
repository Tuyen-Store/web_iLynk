'use client';

import { useEffect, useState } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

interface MapFromEnvAddressProps {
  address: string;
  zoom?: number;
  height?: number;
}

export default function GoogleMapIframe({
  address,
  zoom = 15,
  height = 400,
}: MapFromEnvAddressProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  if (!mounted) {
    return <p>Loading map...</p>;
  }

  if (!apiKey) {
    return <p>Google Maps API key not configured</p>;
  }

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  const [center, setCenter] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  useEffect(() => {
    if (!isLoaded || !address) return;

    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK' && results?.[0]) {
        const location = results[0].geometry.location;
        setCenter({
          lat: location.lat(),
          lng: location.lng(),
        });
      } else {
        console.error('Geocode failed:', status);
      }
    });
  }, [isLoaded, address]);

  if (!isLoaded) return <p>Loading map...</p>;
  if (!center) return <p>Loading location...</p>;

  return (
    <div className="space-y-2">
      <p className="text-sm text-gray-600">📍 {address}</p>

      <GoogleMap
        center={center}
        zoom={zoom}
        mapContainerStyle={{
          width: '100%',
          height: `${height}px`,
          borderRadius: '12px',
        }}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}
