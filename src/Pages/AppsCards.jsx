import React from 'react';
import useApps from '../Hook/useApps';
import SingleCard from '../Components/SingleCard';
import { Link } from 'react-router';

const AppsCards = () => {
    const {apps} = useApps();
    const newApps = apps.slice(0,8);
    return (
        <div className='container mx-auto m-10'>
            <div className='text-center m-10 '>
                <h2 className='text-5xl font-semibold mb-5'>Trending Apps</h2>
                <p className='text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {
                    newApps.map(app=> <SingleCard key={app.id} app={app}></SingleCard>)
                }
            </div>
            <div className="navbar-end ">
        <Link to='/apps' className="btn mt-10 text-white bg-gradient-to-b from-[#632ee3] to-[#9f62f2]"><span>Show All</span> </Link>
      </div>
        </div>
    );
};

export default AppsCards;