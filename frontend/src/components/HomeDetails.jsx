import React from "react";
import image1 from "../images/iilustration1.jpg";
import image2 from "../images/home2.jpg"


const HomeDetails = () => {
    return (
        <div>
            {/* <div className='row py-3 home_detailsbg'>
                <div className="col-md-6">
                    <h3 className=' mt-5 p-5 px-1 lh-base lead fw-bold display-4 '>Welcome to <span className='text-primary'>Silikart</span>! Your one-stop solution for all your engineering essentials, absolutely FREE OF COST!!</h3>
                </div>
                <div className="col-md-6 mt-5">
                    <img src={image1} alt="image" className="img-fluid rounded-5 h-75 w-75 ms-5 ps-3"/>
                </div>
            </div> */}
            <div className='row py-3 mt-2'>
                <div className="col-md-12">
                    <div className="py-3">
                        <div className="title h1 text-center fw-bold">Our Mission: Engineering a Cleaner Future</div>
                        <div className="card rounded-0">
                            <div className="row">
                                <div className="col-md-6 px-3 ">
                                    <div className="card-block px-6">
                                        <h4 className="card-title text-center fw-bold fs-3">SILIKART</h4>
                                        <p className="card-body lead fw-semibold" >
                                         We're on a mission to engineer a cleaner future. By specializing in items like drafters and other engineering essentials, we're not only empowering professionals with the tools they need but also actively working towards a cleaner environment. Our commitment extends beyond commerce; it's about making a meaningful impact.
                                        </p>
                                        <p className="card-body lead fw-semibold"> Every purchase made through our platform is a step towards removing garbage from the environment and fostering a cleaner, greener world for generations to come.Join us in our journey towards a brighter, cleaner future</p>
                                        <br />
                                        <div className="d-flex justify-content-center text-center mt-3">
                                            <a href="https://www.quickwasters.co.uk/blog/clean-environment/" to="/" className="btn home_detailsbg">Read More</a>
                                        </div>
                                        
                                    </div>
                                </div>
                                {/* Carousel start */}
                                <div className="col-md-6 mx-auto">
                                <img src={image2} alt="image" className="img-fluid rounded-1 h-100 w-100 "/> {/* Placeholder content */}
                                </div>
                                {/* End of carousel */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row g-0 shadow-sm">
                <div className="col-md-6 ">
                    <div class="embed-responsive embed-responsive-by9">
                        <iframe classname="embed-responsive-item " src="https://www.youtube.com/embed/PZ6SgdHQw_g?autoplay=1&mute=1&playsinline=1" height="500px" width="700px"></iframe>
                    </div>
                </div>
                <div className="col-md-6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14963.122704026026!2d85.806336!3d20.3506773!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1908e064769e73%3A0x9288172f3a98c7a4!2sSilicon%20University!5e0!3m2!1sen!2sin!4v1715443516880!5m2!1sen!2sin" width="900px" height="500px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>           
                </div>

            </div>
           

     </div>
    );
}

export default HomeDetails;