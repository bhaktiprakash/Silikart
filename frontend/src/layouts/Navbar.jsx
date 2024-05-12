import { Link } from 'react-router-dom';
import { IoIosCart, IoLogoCodepen } from 'react-icons/io';
import { FaUser } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { useAuth } from '../contexts/AuthContext';
import { FaRegUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
// import image1 from "../images/Silikart1.jpg";
// import { NavDropdown } from 'react-bootstrap';


const Navbar = () => {

    const authContext = useAuth()
    console.log(authContext);
    const { isLoggedIn, user, logout} = authContext
    // console.log(user.name);

    const logoutUser = () => {
        logout()
    }

    return (
        <nav className="navbar navbar-expand-lg home_detailsbg shadow-sm" style={{ padding: '0.2rem 0.2rem' }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                
                    <h3 className='fw-bold fs-5'>
                    
                        <span style={{ fontSize:'25px', marginRight: '10px' }}><FaShoppingCart /></span> SILIKART
                    </h3>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ms-s" id="navbarNav">
                    <div className="container-fluid d-flex ms-5">
                    <form className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start">
    <input
        className="form-control mb-2 mb-md-0 me-md-3 text-center text-md-start"
        type="search"
        placeholder="Search Your Products Here"
        aria-label="Search"
    />
    <button className="btn btn-dark shadow-md searchbut" type="submit">Search</button>
</form>
                    </div>
                    <ul className="navbar-nav ms-auto d-flex flex-row">
                        <li className="nav-item mx-2">
                            <Link className="nav-link fw-bold text-dark fs-6 d-flex flex-column align-items-center mt-3 " to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item mx-2 mt-3 ">
                            <Link className="nav-link fw-bold text-dark fs-6 d-flex flex-column align-items-center" to="/product">
                                Products
                            </Link>
                        </li>
                        {isLoggedIn && (
                            <li className="nav-item mx-2 mt-3">
                                <Link className="nav-link fw-bold text-dark fs-6 " to="/checkout">
                                    Cart
                                </Link>
                            </li>
                        )}
                        {isLoggedIn ? (
                            // <NavDropdown className="fw-semibold" title={`Hi, ${user.name}`} id="basic-nav-dropdown">
                            //     <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                            //     <NavDropdown.Item href="#">Orders</NavDropdown.Item>
                            //     <NavDropdown.Divider />
                            //     <NavDropdown.Item onClick={logoutUser}>Logout</NavDropdown.Item>
                            // </NavDropdown>
                            <>
                                <li className="nav-link mt-2 fw-semibold fst-italic">Welcome, <span className='mx-3'>{user.name}</span></li>
                                <li onClick={logoutUser} className="nav-link fw-bold text-dark fs-6  mx-2 mt-3">Logout
                                </li>
                            
                            </>
                            

                        ) : (
                            <>
                                <li className="nav-item mx-2 mt-2 py-2">
                                    <Link className="nav-link fw-bold text-dark fs-6" to="/signup">
                                        Signup
                                    </Link>
                                </li>
                                <li className="nav-item mx-2 mt-2 py-2">
                                    <Link className="nav-link fw-bold text-dark fs-6 d-flex flex-column align-items-center" to="/signin">
                                        Login
                                    </Link>
                                </li>
                            </>
                        )}

                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
