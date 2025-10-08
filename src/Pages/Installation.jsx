import React, { useEffect, useState } from "react";
import InstallSingleCard from "../Components/InstallSingleCard";

const Installation = () => {
  const [installList, setInstallList] = useState([]);
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installedList"));
    if (savedList) setInstallList(savedList);
  }, []);
  return (
    <div className="container mx-auto">
      <div className="p-15 text-center">
        <h2 className="text-5xl font-bold my-5">Your Installed Apps</h2>
        <p className="text-xl text-gray-400">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between items-center my-5">
        <h2 className="text-2xl font-bold ">({installList.length}) Apps Found</h2>
        {/* Drop Down */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort By Size
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Sort By Download</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Card */}
      <div className="my-10">
        {
            installList.map(app=> <InstallSingleCard key={app.id} app={app}></InstallSingleCard>)
        }
      </div>
    </div>
  );
};

export default Installation;
