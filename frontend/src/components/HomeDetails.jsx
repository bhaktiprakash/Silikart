import React from "react";
import image1 from "../images/homepage1.jpg";


const HomeDetails = () => {
    return(
        
        <div className='row my-5 py-3'>
            <div className="col-md-8">
                <img src={image1} alt="image" />
            </div>
            <div className="col-md-4">
                <h3 className='p-3 lh-base m-4 lead fw-bold fs-2 '>Welcome to <span className='text-primary'>Silikart</span>! Your one-stop solution for all your engineering essentials, absolutely FREE OF COST!!</h3>
            </div>
        </div>        
        
        
        
    );
}
 export default HomeDetails;
