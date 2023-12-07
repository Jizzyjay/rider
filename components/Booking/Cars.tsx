"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import { DirectionDataContext } from "@/context/DirectionDataContext";
import CarsList from "@/data/CarsList";

function Cars() {
  const [selected, setSelected] = useState<any>();

  return (
    <div className="mt-3">
      <h2 className="font-semibold">Select Car</h2>
      <div
        className="grid 
        grid-cols-3
        md:grid-cols-2
        lg:grid-cols-3
         "
      >
        {CarsList.map((item, index) => (
          <div
            key={index}
            className={`m-2 p-2 border-[1px] rounded-md
          hover:border-yellow-400 cursor-pointer ${
            index === selected ? "border-yellow-400 border-[2px]" 
            : null
          }`}
            onClick={() => setSelected(index)}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={75}
              height={90}
              className="w-full"
            />
            <h2 className="text-[12px] text-gray-500">{item.name}</h2>
            <span className="float-right text-[10px] text-black ">${item.charges}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cars;
