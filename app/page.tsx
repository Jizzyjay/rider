"use client";

import Booking from "@/components/Booking/Booking";
import MapBoxMap from "@/components/Map/MapBoxMap";
import { DestinationCoordinateContext } from "@/context/DestinationCoordinateContext";
import { SourceCoordinateContext } from "@/context/SourceCoordinateContext";
import { UserLocationContext } from "@/context/UserLocationContext";
import { useEffect, useState } from "react";

export default function Home() {
  const [userLocation, setUserLocation] = useState<any>();
  const [sourceCoordinates, setSourceCoordinates] = useState<any>([]);
  const [destinationCoordinates, setDestinationCoordinates] = useState<any>([]);

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      setUserLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  };
  
  return (
    <div>
      <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
        <SourceCoordinateContext.Provider
          value={{ sourceCoordinates, setSourceCoordinates }}
        >
          <DestinationCoordinateContext.Provider
            value={{ destinationCoordinates, setDestinationCoordinates }}
          >
            <div
              className="grid grid-cols-1 
     md:grid-cols-3"
            >
              <div className="">
                <Booking />
              </div>
              <div className="col-span-2">
                <MapBoxMap />
              </div>
            </div>
          </DestinationCoordinateContext.Provider>
        </SourceCoordinateContext.Provider>
      </UserLocationContext.Provider>
    </div>
  );
}
