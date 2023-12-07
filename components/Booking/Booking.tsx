import React from "react";
import Cars from "./Cars";
import Cards from "./Cards";
import AutocompleteAddress from "./AutoCompleteAddress";
// import DistanceTime from "./DistanceTime";

function Booking() {

//   const screenHeight = window.innerHeight * 0.72;

  return (
    <div className="p-5 ">
      <h2 className="text-[20px] font-semibold">Booking</h2>
      <div
        className="border-[1px] p-5 
        rounded-md" 
        // style={{height:screenHeight}}
      >
        <AutocompleteAddress />
        <Cars />
        <Cards />
        <button
          className="w-full bg-yellow-400 p-1 
         rounded-md mt-4"
        >
          Book Ride
        </button>
      </div>
    </div>
  );
}

export default Booking;
