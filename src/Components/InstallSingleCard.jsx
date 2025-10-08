import React from "react";
import icon from "../assets/icon-downloads.png";
import ratings from "../assets/icon-ratings.png";

const InstallSingleCard = ({ app }) => {
  const { image, title, downloads, ratingAvg, size } = app;
  return (
    <div className="card card-side bg-base-100 shadow-xl flex justify-center items-center container  mx-auto my-4 p-3">
    <img className="w-25 h-25 bg-gray-200 p-2 rounded-2xl" src={image} alt="Movie" /> 
      <div className="card-body">
        <div className="flex flex-col justify-center my-3 ">
            <h2 className="card-title ">{title}</h2>
        <div className="flex gap-5 ">
          <span className="text-green-500 flex gap-2">
            <img className="w-6 h-6" src={icon} alt="" />
            {downloads}M
          </span>
          <span className="text-orange-500 flex gap-2">
            <img className="w-6 h-6" src={ratings} alt="" />
            {ratingAvg}M
          </span>
          <span>{size} MB</span>
        </div>
        <div className="card-actions justify-end ">
          <button className="btn rounded-lg text-white text-2xl bg-[#00d390] py-7 px-8">Uninstall</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default InstallSingleCard;
