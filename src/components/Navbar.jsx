import React from "react";
// import { GiHamburgerMenu, FaTimes } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";

import { useState } from "react";
function Navbar() {
  const [show, isShow] = useState(false);
  const handleClose = () => isShow(!show);
  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">
            <Link to="home" smooth={true} duration={500}>
              BRAND.
            </Link>
          </h1>
          <ul className="hidden md:flex">
            <li className="cursor-pointer border-b-2 border-zinc-300 w-full">
              <Link
                onClick={handleClose}
                to="home"
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="cursor-pointer border-b-2 border-zinc-300 w-full">
              <Link
                onClick={() => handleClose()}
                to="about"
                offset={-200}
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="cursor-pointer border-b-2 border-zinc-300 w-full">
              <Link
                onClick={() => handleClose()}
                to="support"
                offset={-50}
                smooth={true}
                duration={500}
              >
                Support
              </Link>
            </li>
            <li className="cursor-pointer border-b-2 border-zinc-300 w-full">
              <Link
                onClick={() => handleClose()}
                to="platforms"
                offset={-100}
                smooth={true}
                duration={500}
              >
                Platforms
              </Link>
            </li>
            <li className="cursor-pointer border-b-2 border-zinc-300 w-full">
              <Link
                onClick={() => handleClose()}
                to="pricing"
                offset={-50}
                smooth={true}
                duration={500}
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex p-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>

        <div className="md:hidden mr-3" onClick={() => isShow(!show)}>
          {show ? <FaTimes className="w-5" /> : <FaBars className="w-5" />}
        </div>
      </div>

      <ul className={!show ? "hidden" : "bg-zinc-200 w-full px-8"}>
        <li className="cursor-pointer border-b-2 border-zinc-300 w-full">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="cursor-pointer border-b-2 border-zinc-300 w-full">
          <Link to="about" offset={-200} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="cursor-pointer border-b-2 border-zinc-300 w-full">
          <Link to="support" offset={-50} smooth={true} duration={500}>
            Support
          </Link>
        </li>
        <li className="cursor-pointer border-b-2 border-zinc-300 w-full">
          <Link to="platforms" offset={-100} smooth={true} duration={500}>
            Platforms
          </Link>
        </li>
        <li className="cursor-pointer border-b-2 border-zinc-300 w-full">
          <Link to="pricing" offset={-50} smooth={true} duration={500}>
            Pricing
          </Link>
        </li>

        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
            Sign In
          </button>
          <button className="px-8 py-3 mb-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
