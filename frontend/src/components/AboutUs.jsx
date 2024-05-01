import React from 'react';
import image from "../images/userimage.jpg";

const AboutUs = () => {
    return (
        <div className="container my-2 py-5 mx-auto bg-white">
            <h1 className="text-center  my-5 fst-italic fw-bold "><u>ABOUT US</u></h1>
            <div className="row py-3">
                <div className="col-md-3 d-flex flex-column align-items-center ">
                    <div className="circle">
                        <img src={image} alt="Contributor 1" height="200px" width="200px" className='member_icon' />
                    </div>
                    <p className="text-center fw-bold mt-3">Swati Nath</p>
                    <p className="text-center mt-3">Description about Contributor 1</p>
                </div>
                <div className="col-md-3 d-flex flex-column align-items-center">
                    <div className="circle">
                        <img src={image} alt="Contributor 2" height="200px" width="200px" className='member_icon' />
                    </div>
                    <p className="text-center fw-bold mt-3">Bhakti Prakash Das</p>
                    <p className="text-center mt-3">Description about Contributor 2</p>
                </div>
                <div className="col-md-3 d-flex flex-column align-items-center">
                    <div className="circle">
                        <img src={image} alt="Team Member 1" height="200px" width="200px" className='member_icon' />
                    </div>
                    <p className="text-center fw-bold mt-3">Aditya Pandey</p>
                    <p className="text-center mt-3">Description about Team Member 1</p>
                </div>
                <div className="col-md-3 d-flex flex-column align-items-center">
                    <div className="circle">
                        <img src={image} alt="Team Member 2" height="200px" width="200px" className='member_icon' />
                    </div>
                    <p className="text-center fw-bold mt-3">Anjaneya Mishra</p>
                    <p className="text-center mt-3">Description about Team Member 2</p>
                </div>
            </div>
        </div>
    );
    
}

export default AboutUs;
