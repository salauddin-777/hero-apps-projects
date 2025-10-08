import React from 'react';
import Banner from '../Components/Banner';
import StateSection from '../Components/StateSection';
import AppsCards from './AppsCards';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <StateSection></StateSection>
            <AppsCards></AppsCards>
        </div>
    );
};

export default Home;