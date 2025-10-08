import React from 'react';
import useApps from '../Hook/useApps';
import { GiH2O } from 'react-icons/gi';
import SingleCard from '../Components/SingleCard';

const AppsCards = () => {
    const {apps, loading, error} = useApps()
    console.log(apps);
    console.log(loading);
    console.log(error);
    const newApps = apps.slice(0,8);
    return (
        <div className='container mx-auto m-10'>
            <div className='text-center m-10 '>
                <h2 className='text-5xl font-semibold mb-5'>Trending Apps</h2>
                <p className='text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-4 gap-10'>
                {
                    newApps.map(app=> <SingleCard key={app.id} app={app}></SingleCard>)
                }
            </div>
        </div>
    );
};

export default AppsCards;