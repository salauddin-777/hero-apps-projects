import React from "react";
import { useParams } from "react-router";
import useApps from "../Hook/useApps";
import icon from "../assets/icon-downloads.png";
import ratings from "../assets/icon-ratings.png";
import reviewIcon from '../assets/icon-review.png'

const DetailsCard = () => {
  const { apps, loading, error } = useApps();
  const { id } = useParams();

  const app = apps.find((a) => String(a.id) == id);
  const { image, companyName,title, downloads, ratingAvg, reviews, size } = app || {};
  return (
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
        <h2 className="text-2xl font-semibold text-gray-800">
         {title}
        </h2>
        <p className="text-gray-500 text-sm">
          Developed by-
          <a href="#" className="text-indigo-600 hover:underline">
            {companyName}
          </a>
        </p>

        {/* Stats Row */}
        <div className="flex flex-wrap gap-8 mt-4 text-gray-700">
          <div className="flex items-center gap-2">
            <img src={icon}  />
            <div>
              <p className="text-xs text-gray-500">Downloads</p>
              <p className="font-semibold text-lg">{downloads}M</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <img src={ratings} />
            <div>
              <p className="text-xs text-gray-500">Average Ratings</p>
              <p className="font-semibold text-lg">{ratingAvg}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <img src={reviewIcon} />
            <div>
              <p className="text-xs text-gray-500">Total Reviews</p>
              <p className="font-semibold text-lg">{reviews}</p>
            </div>
          </div>
        </div>

        {/* Install Button */}
        <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg shadow-sm transition">
          Install Now ({size}MB)
        </button>
      </div>
    </div>
  );
};

export default DetailsCard;
