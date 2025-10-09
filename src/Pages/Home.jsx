import React from 'react';
import Banner from '../Components/Banner';
import StateSection from '../Components/StateSection';
import AppsCards from './AppsCards';
import logo from "../assets/logo.png";
import useApps from '../Hook/useApps';

const Home = () => {
const {loading} = useApps()
     if (loading)
    return (
      <p className="container mx-auto flex items-center justify-center my-50">
        <img className="w-8" src={logo} /> Loading......
      </p>
    );
    return (
        <div className=''>
            <Banner></Banner>
            <StateSection></StateSection>
            <AppsCards></AppsCards>
        </div>
    );
};

export default Home;