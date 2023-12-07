import React, { useContext } from "react";
import { Marker } from "react-map-gl";
import { DestinationCoordinateContext } from "@/context/DestinationCoordinateContext";
import { SourceCoordinateContext } from "@/context/SourceCoordinateContext";

function Markers() {
  const { sourceCoordinates, setSourceCoordinates } = useContext(
    SourceCoordinateContext
  );
  const { destinationCoordinates, setDestinationCoordinates } = useContext(
    DestinationCoordinateContext
  );

  return (
    <div>
      {sourceCoordinates.length != 0 ? (
        <Marker
          longitude={sourceCoordinates?.lng}
          latitude={sourceCoordinates?.lat}
          anchor="bottom"
        >
          <img src="./location.png" className="w-10 h-10" />
        </Marker>
      ) : null}

      {destinationCoordinates.length != 0 ? (
        <Marker
          longitude={destinationCoordinates?.lng}
          latitude={destinationCoordinates?.lat}
          anchor="bottom"
        >
          <img src="./location.png" className="w-10 h-10" />
        </Marker>
      ) : null}
    </div>
  );
}

export default Markers;
