import React from 'react'
import { fpic } from "../../assets/index";

const Rightbanner = () => {
  return (
    <div className="w-full flex justify-center md:justify-end items-start">
      <div className="relative flex justify-center md:mr-4">
        <img
          className="w-[260px] xs:w-[300px] sm:w-[320px] md:w-[350px] lg:w-[400px] h-auto z-10 object-cover rounded-lg"
          src={fpic}
          alt="Faizan Ali"
        />
        <div 
          className="absolute bottom-0 top-[25%] w-[260px] xs:w-[300px] sm:w-[320px] md:w-[350px] lg:w-[400px] h-[75%] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne rounded-lg -z-10"
        />
      </div>
    </div>
  );
}

export default Rightbanner
