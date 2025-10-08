import React, { useEffect, useState } from "react";
import InstallSingleCard from "../Components/InstallSingleCard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Installation = () => {
  const [installList, setInstallList] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installedList"));
    if (savedList) setInstallList(savedList);
  }, []);

  const sortedItem = (() => {
    if (sortOrder === "download-asc") {
      return [...installList].sort((a, b) => b.downloads - a.downloads);
    } else if (sortOrder === "download-dsc") {
      return [...installList].sort((a, b) => a.downloads - b.downloads);
    } else {
      return installList;
    }
  })();

  const handleUninstall = (id) => {
    const existingList = JSON.parse(localStorage.getItem("installedList"));
    let updatedList = existingList.filter((a) => a.id !== id);
    setInstallList(updatedList);
    localStorage.setItem("installedList", JSON.stringify(updatedList));
    toast('Uninstall Succesfully')
  };

  return (
    <div className="container mx-auto">
      <div className="p-15 text-center">
        <h2 className="text-5xl font-bold my-5">Your Installed Apps</h2>
        <p className="text-xl text-gray-400">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between items-center my-5">
        <h2 className="text-2xl font-bold ">
          ({installList.length}) Apps Found
        </h2>
        {/* Drop Down */}
        <div>
          <label className="form-control w-full mx-w-xs">
            <select
              className="select select-bordered"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="none">Sort By Download</option>
              <option value="download-asc">High -&gt;Low</option>
              <option value="download-dsc">Low -&gt; High</option>
            </select>
          </label>
        </div>
      </div>
      {/* Card */}
      <div className="my-10">
        {sortedItem.map((app) => (
          <InstallSingleCard
            key={app.id}
            app={app}
            handleUninstall={handleUninstall}
          ></InstallSingleCard>
        ))}
      </div>
    </div>
  );
};

export default Installation;
