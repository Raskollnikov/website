import React from "react";
import { FiDatabase } from "react-icons/fi";
import { FaLocationArrow } from "react-icons/fa";
import { CgDatabase } from "react-icons/cg";
import { HiPaperAirplane } from "react-icons/hi";
import bgImg from "../assets/cyber-bg.png";

function Hero() {
  return (
    <div
      name="home"
      className="w-full h-screen bg-zinc-200 flex flex-col justify-between "
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">Unique sequencing & Production</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Cloud Management
          </h1>
          <p className="text-2xl">this is our tech brand</p>
          <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
        </div>

        <div>
          <img src={bgImg} alt="background" className="w-full" />
        </div>

        <div
          className="absolute flex flex-col py-8 md:min-w-[768px] bottom-[5%] 
        mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-500 rounded-xl text-center shadow-xl"
        >
          <p>Data Services</p>

          <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-2 text-slate-500">
              <FiDatabase className="h-6 text-indigo-600" /> App Security
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <FaLocationArrow className="h-6 text-indigo-600" />
              Dashboard Design
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <CgDatabase className="h-6 text-indigo-600" /> Cloud Data
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <HiPaperAirplane className="h-6 text-indigo-600" /> Api
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
