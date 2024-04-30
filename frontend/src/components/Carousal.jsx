import React from 'react';
import image1 from "../images/carousal1.jpg";
import image2 from "../images/carousal2.jpg";
import image3 from "../images/carousal3.jpg";
 
const Carousal = () => {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={image1} className="d-block w-100 carousal-image" alt="Slide 1" />
                </div>
                <div className="carousel-item">
                    <img src={image2} className="d-block w-100 carousal-image" alt="Slide 2" />
                </div>
                <div className="carousel-item">
                    <img src={image3} className="d-block w-100 carousal-image" alt="Slide 3" />
                </div>
            </div>
        </div>
        
    );
}

export default Carousal;
