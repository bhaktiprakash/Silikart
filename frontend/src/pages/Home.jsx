import React from 'react';
import ProductCard from "../components/ProductCard";
import Carousal from "../components/Carousal";
import AboutUs from '../components/AboutUs';
import HomeDetails from "../components/HomeDetails";

const Home = () => {
    return (
        <div>
            {/* <Background/> */}
            <Carousal />
            <h1 className='text-center fw-bold fs-1 mt-2'>Welcome to Silikart</h1>
            {/* <HomeDetails/> */}
            <HomeDetails/>

          
            <AboutUs/>
        </div>
    );
}

export default Home;
