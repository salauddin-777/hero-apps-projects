import React from "react";
import icon from "../assets/icon-downloads.png";
import ratings from "../assets/icon-ratings.png";
import { Link } from "react-router";

const SingleCard = ({ app }) => {
  const { image, downloads, title, ratingAvg } = app;
  return (
    <Link to={`/details/${app.id}`}>
      <div className="card bg-base-100 w-96 shadow-md">
        <figure className="bg-[#d9d9d9] p-3">
          <img className="w-[200px] h-[200px]" src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex justify-between">
            <h2 className="bg-[#f1f5e8] rounded-sm p-1 flex items-center gap-2 text-green-500">
              <img className="w-4 h-4" src={icon} alt="" />
              {downloads}M
            </h2>
            <h2 className="bg-[#fff0e1] rounded-sm p-1 flex items-center gap-2 text-orange-500">
              <img className="w-4 h-4" src={ratings} alt="" />
              {ratingAvg}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleCard;
