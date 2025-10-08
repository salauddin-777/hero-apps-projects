import React from "react";
import Navbar from "../Components/Navbar";
import error from "../assets/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto h-screen flex flex-col justify-center items-center">
        <img className="w-lg" src={error} alt="" />
        <Link
          to="/"
          className="btn mt-5 px-8 py-7 text-2xl text-white bg-gradient-to-b from-[#632ee3] to-[#9f62f2]"
        >
          <span>Go Back</span>{" "}
        </Link>
      </div>
    </div>
  );
};
export default ErrorPage;
