import React, { useState } from "react";
import { useParams } from "react-router";
import useApps from "../Hook/useApps";
import icon from "../assets/icon-downloads.png";
import ratings2 from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";
import logo from "../assets/logo.png";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Bounce, toast } from "react-toastify";

const DetailsCard = () => {
  const [click, setClick] = useState(true);
  const { apps, loading } = useApps();
  const { id } = useParams();

  const app = apps.find((a) => String(a.id) == id);
  const { image, companyName, title, downloads, ratingAvg, reviews, size, description, ratings } =
    app || {};
  if (loading)
    return (
      <p className="container mx-auto flex items-center justify-center my-50">
        <img className="w-8" src={logo} /> Loading..
      </p>
    );

  const handleAddToInstalledList = () => {
    const existingList = JSON.parse(localStorage.getItem("installedList"));
    let updatedList = [];
    if (existingList) {
      const isDuplicate = existingList.some((a) => a.id === app.id);
      if (isDuplicate) {
        return toast.error("🦄 Already Installed!!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }
      updatedList = [...existingList, app];
    } else {
      updatedList.push(app);
    }
    localStorage.setItem("installedList", JSON.stringify(updatedList));
    setClick(!click);
    toast.success("🦄 App Installing, Thanks!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto bg-white mt-10 rounded-2xl shadow-md p-6 flex flex-col sm:flex-row items-center gap-6">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-48 h-48 object-contain p-4 border border-gray-200 rounded-xl"
          />
        </div>

        {/* Info Section */}
        <div className="flex-1 space-y-3">
          <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
          <p className="text-gray-500 text-sm">
            Developed by-
            <a href="#" className="text-indigo-600 hover:underline">
              {companyName}
            </a>
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-8 mt-4 text-gray-700">
            <div className="grid grid-row-2 items-center gap-2">
              <img className="w-8 h-8" src={icon} />
              <div>
                <p className="text-xs text-gray-500">Downloads</p>
                <p className=" text-xl font-bold">{downloads}M</p>
              </div>
            </div>

            <div className="grid grid-row-2 items-center gap-2">
              <img className="w-8 h-8" src={ratings2} />
              <div>
                <p className="text-xs text-gray-500">Average Ratings</p>
                <p className="font-bold text-xl">{ratingAvg}</p>
              </div>
            </div>

            <div className="grid grid-row-2 items-center gap-2">
              <img className="w-10 h-10" src={reviewIcon} />
              <div>
                <p className="text-xs text-gray-500">Total Reviews</p>
                <p className="font-bold text-xl">{reviews}</p>
              </div>
            </div>
          </div>

          {/* Install Button */}
          <button
            onClick={handleAddToInstalledList}
            className="mt-6 bg-[#00d390] hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg shadow-sm transition"
          >
            {click ? "Install Now" : "Installed"} ({size}MB)
          </button>
        </div>
      </div>
      <div className="container mx-auto">
        {/* Recharts */}
        <div className="w-full h-64">
          <h2 className="text-2xl font-bold">Ratings</h2>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={ratings}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 50, bottom: 0 }}
            >
              <XAxis type="count" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Bar dataKey="count" fill="#ff9800" barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="container mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-5">Description</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DetailsCard;
