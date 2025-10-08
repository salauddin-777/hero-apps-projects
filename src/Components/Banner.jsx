import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { Link } from "react-router";
import playStore from '../assets/p.png'
import appStore from '../assets/a.png'
import hero from '../assets/hero.png'
import StateSection from "./StateSection";

const Banner = () => {
  return (
    <div className="container mx-auto mt-15">
        {/* Banner Section */}
      <div>
        <h2 className="text-6xl text-center font-bold">
          We Build <br />
          <span className="text-[#632ee3]">Productive</span> Apps
        </h2>
        <p className="text-xl text-gray-500 text-center mt-5">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
        <div className="text-center mt-10">
          <Link
            className="btn mr-3 py-5 text-lg"
            to="https://play.google.com/store/games?hl=en"
          >
            <img className="w-6" src={playStore} alt="" />
            <button>Google Play</button>
          </Link>
          <Link
            className="btn py-5 text-lg"
            to="https://www.apple.com/app-store/"
          >
            <img className="w-6" src={appStore} alt="" />
            <button className="">App Store</button>
          </Link>
        </div>
      </div>
      <div className="mt-10">
        <img className="mx-auto text-center items-center" src={hero} alt="" />
      </div>
    </div>
  );
};

export default Banner;
