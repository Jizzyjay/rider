"use client";

import { UserLocationContext } from "@/context/UserLocationContext";
import React, { useContext, useEffect, useRef } from "react";
import { Map, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Markers from "./Markers";
import { SourceCoordinateContext } from "@/context/SourceCoordinateContext";
import { DestinationCoordinateContext } from "@/context/DestinationCoordinateContext";

function MapBoxMap() {
  const mapRef = useRef<any>();
  const { userLocation, setUserLocation } = useContext(UserLocationContext);
  const { sourceCoordinates, setSourceCoordinates } = useContext(
    SourceCoordinateContext
  );
  const { destinationCoordinates, setDestinationCoordinates } = useContext(
    DestinationCoordinateContext
  );

  useEffect(() => {
    if(sourceCoordinates) {
        mapRef.current?.flyTo({
            center:[sourceCoordinates.lng,
                sourceCoordinates.lat],
                duration: 2500
        })
    }
  }, [sourceCoordinates]);

   useEffect(() => {
    if(destinationCoordinates) {
        mapRef.current?.flyTo({
            center:[destinationCoordinates.lng,
                destinationCoordinates.lat],
                duration: 2500
        })
    }
  }, [destinationCoordinates]);

  return (
    <div className="p-5">
      <h2 className="text-[20px] fonts-semibold">Map</h2>
      <div className="rounded-lg overflow-hidden">
        {userLocation ? (
          <Map
          ref={mapRef}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            initialViewState={{
              longitude: userLocation.lng,
              latitude: userLocation.lat,
              zoom: 14,
            }}
            style={{ width: "100%", height: 500, borderRadius: 10 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
            <Markers />
          </Map>
        ) : null}
      </div>
    </div>
  );
}

export default MapBoxMap;
