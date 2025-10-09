import React from 'react';
import errorApp from '../assets/App-Error.png'
import Navbar from '../Components/Navbar';
import { Link } from 'react-router';

const NoAppFound = () => {
    return (
    <div>
      <div className="md:w-7xl mx-auto flex flex-col justify-center items-center  mb-2">
        <img className="" src={errorApp} alt="" />
        <div className='text-center'>
            <h2 className='text-3xl font-bold my-4'>OPPS!! APP NOT FOUND</h2>
            <p>The App you are requesting is not found on our system.  please try another apps</p>
        </div>
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

export default NoAppFound;