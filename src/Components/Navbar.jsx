import React from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import '../index.css'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/apps"> Apps</NavLink>
            </li>
            <li>
              <NavLink to="/installation">Installation</NavLink>
            </li>
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-xl">
          <img className="w-8" src={logo} alt="" />
          <span>HERO.IO</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold text-xl">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/apps"> Apps</NavLink>
          </li>
          <li>
            <NavLink to="/installation">Installation</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <Link to='https://github.com/salauddin-777' className="btn text-white bg-gradient-to-b from-[#632ee3] to-[#9f62f2]"> <FaGithub></FaGithub> <span>Contribute</span> </Link>
      </div>
    </div>
  );
};

export default Navbar;
