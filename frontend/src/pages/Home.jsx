import React from 'react';
import Carousal from "../components/Carousal";
import AboutUs from '../components/AboutUs';
import HomeDetails from "../components/HomeDetails";

const Home = () => {
    return (
        <div>
            <Carousal />
            <HomeDetails/>
            <AboutUs/>
        </div>
    );
}

export default Home;
