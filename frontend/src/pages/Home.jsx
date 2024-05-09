import React from 'react';
import ProductCard from "../components/ProductCard";
import Carousal from "../components/Carousal";
import AboutUs from '../components/AboutUs';
import HomeDetails from "../components/HomeDetails";
import image1 from "../images/signin4.jpg";

const Home = () => {
    return (
        <div>
            
            <Carousal />
            {/* <h1 className='text-center fw-bold fs-1 mt-2'>Welcome to Silikart</h1> */}
            {/* <HomeDetails/> */}
            <HomeDetails/>
            <AboutUs/>
        </div>
    );
}

export default Home;
