import React, { useState } from "react";
import useApps from "../Hook/useApps";
import SingleCard from "../Components/SingleCard";
import AppsCards from "./AppsCards";
import logo from "../assets/logo.png";
import NoAppFound from "./NoAppFound";

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");
  const term = search.trim().toLowerCase();

  
  const searchedApps = term
    ? apps.filter((a) => a.title.toLowerCase().includes(term))
    : apps;
  // if(apps.filter(a=>a.title.toLowerCase() != term)){
  //   <h2>Apps Not Found</h2>
  // }

  if (loading)
    return (
      <p className="container mx-auto flex items-center justify-center my-50">
        <img className="w-8" src={logo} /> Loading......
      </p>
    );

  return (
    <div className="container mx-auto mt-10">
      <div className="text-center m-10 ">
        <h2 className="text-5xl font-semibold mb-5">Our All Apps</h2>
        <p className="text-gray-400">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      {/* Search Area */}
      <div className="flex justify-between items-center my-5">
        <h2 className="text-3xl">({searchedApps.length}) Apps Found</h2>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Apps"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {searchedApps.length === 0? <NoAppFound></NoAppFound>: ''}
        {searchedApps.map((app) => (
          <SingleCard key={app.id} app={app}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
