import { Link } from 'react-router-dom';
import { IoIosCart, IoLogoCodepen } from 'react-icons/io';
import { FaUser } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { useAuth } from '../contexts/AuthContext';
import { FaRegUser } from "react-icons/fa6";
// import image1 from "../images/Silikart1.jpg";
// import SearchBar from '../components/SearchBar';

const Navbar = () => {

    const authContext = useAuth()
    console.log(authContext);
    const { isLoggedIn, user, logout} = authContext

    const logoutUser = () => {
        logout()
    }

    return (
        <nav className="navbar navbar-expand-lg home_detailsbg shadow-sm" style={{ padding: '0.2rem 0.2rem' }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <h3 className='fw-bold fs-4'>
                        <span style={{ fontSize: '28px', marginRight: '8px' }}></span>SILIKART
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
                <nav className="navbar navbar-light">
            <div className="container-fluid d-flex ms-5">
                {/* Your search form */}
                <form className="d-flex">
                    <input
                        className="form-control me-3"
                        type="search"
                        placeholder="Search Your Products Here"
                        size="40"
                        aria-label="Search" />
                    <button className="btn btn-dark shadow-md searchbut" type="submit">Search</button>
                </form>
            </div>
        </nav>

                    <ul className="navbar-nav ms-auto d-flex flex-row">
                        <li className="nav-item mx-2 ">
                            <Link className="nav-link fw-bold text-dark fs-6 d-flex flex-column align-items-center" to="/">
                                <span style={{ fontSize: '25px' }}><IoHomeSharp /></span>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                        <Link className="nav-link fw-bold text-dark fs-6 d-flex flex-column align-items-center" to="/product">
                            <span style={{ fontSize: '25px' }}><MdProductionQuantityLimits /></span>
                            <span>Products</span>
                        </Link>
                        </li>
                        {isLoggedIn ? (
                            <>
                            <li className="nav-item mx-2">
                            <Link className="nav-link fw-bold text-dark fs-6" to="/profile">
                                <span style={{ fontSize: '25px', marginLeft: '4px' }}><FaUser /></span><br />Welcome {user?.name}
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link fw-bold text-dark fs-6" to="/checkout">
                                <span style={{ fontSize: '25px', marginLeft: '4px' }}><FaUser /></span><br />Cart
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link fw-bold text-dark fs-6" to="/" onClick={logoutUser}>
                                <span style={{ fontSize: '25px', marginLeft: '4px' }}><FaUser /></span><br />Logout
                            </Link>
                        </li>
                            </>
                        ) : (
                            <>
                            <li className="nav-item mx-2">
                            <Link className="nav-link fw-bold text-dark fs-6" to="/signup">
                                <span style={{ fontSize: '25px', marginLeft: '4px' }}><FaUser /></span><br />Sign Up
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link fw-bold text-dark fs-6 d-flex flex-column align-items-center" to="/signin">
                                <span style={{ fontSize: '25px' }}><FaUser /></span>
                                <span>Login</span>
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
