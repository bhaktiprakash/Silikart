import React from 'react';
import image from "../images/userimage.jpg";
import image1 from "../images/photo1.jpeg"
import image3 from "../images/photo3.jpeg"
 import image4 from "../images/photo4.jpg"



const AboutUs = () => {
    return (
        <div className="py-1 mx-auto bg-light">
            <h1 className="text-center my-5 fw-bold">Meet our Team</h1>
            <div className="row py-3">
                <div className="col-md-3 d-flex flex-column align-items-center ">
                    <div className="circle">
                        <img src={image1} alt="Contributor 1" height="200px" width="200px" className='member_icon' />
                    </div>
                    <p className="text-center fw-bold mt-3">Swati Nath</p>
                    <p className="text-center mt-3">Frontend Developer</p>
                </div>
                <div className="col-md-3 d-flex flex-column align-items-center">
                    <div className="circle">
                        <img src={image} alt="Contributor 2" height="200px" width="200px" className='member_icon' />
                    </div>
                    <p className="text-center fw-bold mt-3">Bhakti Prakash Das</p>
                    <p className="text-center mt-3">Backend Developer</p>
                </div>
                <div className="col-md-3 d-flex flex-column align-items-center">
                    <div className="circle">
                        <img src={image3} alt="Team Member 1" height="200px" width="200px" className='member_icon' />
                    </div>
                    <p className="text-center fw-bold mt-3">Aditya Pandey</p>
                    <p className="text-center mt-3">Idea Originator</p>
                </div>
                <div className="col-md-3 d-flex flex-column align-items-center">
                    <div className="circle">
                        <img src={image4} alt="Team Member 2" height="200px" width="200px" className='member_icon' />
                    </div>
                    <p className="text-center fw-bold mt-3">Anjaneya Mishra</p>
                    <p className="text-center mt-3">Design and Content</p>
                </div>
            </div>
        </div>
    );
    
}

export default AboutUs;
