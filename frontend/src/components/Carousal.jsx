import React from 'react';
import image1 from "../images/carousal1.jpg";
import image2 from "../images/carousal2.jpg";
import image3 from "../images/carousal5.jpg";
 
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
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
           
        </div>
        
    );
}
export default Carousal;
