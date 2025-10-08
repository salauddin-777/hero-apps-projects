import React from "react";

const StateSection = () => {
  return (
    <div className="max-w-full bg-gradient-to-b from-[#632ee3] to-[#9f62f2] text-center p-10 mx-auto text-white">
        <div>
            <h1 className="text-4xl font-semibold p-4">Trust By Millions, Built For You</h1>
        </div>
      <div className="stats  ">
        <div className="stat">
          <div className="stat-figure text-secondary">
          </div>
          <div className="stat-title text-white">Total Downloads</div>
          <div className="stat-value text-5xl">29.6M</div>
          <div className="stat-desc text-white">21% More Than Last Month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            
          </div>
          <div className="stat-title text-white">Total Reviews</div>
          <div className="stat-value text-5xl">906K</div>
          <div className="stat-desc text-white">46% More Than Last Month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            
          </div>
          <div className="stat-title text-white">Active Apps</div>
          <div className="stat-value text-5xl">132+</div>
          <div className="stat-desc text-white">31 More Will Launch</div>
        </div>
      </div>
    </div>
  );
};

export default StateSection;
