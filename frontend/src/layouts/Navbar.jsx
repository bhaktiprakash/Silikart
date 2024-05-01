import { Link } from 'react-router-dom';
import { IoIosCart } from 'react-icons/io';
import { FaUser } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white shadow" style={{ padding: '0.2rem 0.1rem' }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <h3 className='fw-bold fs-4'>
                        <span style={{ fontSize: '28px', marginRight: '8px' }}><IoIosCart /></span> SILIKART
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
                    <nav className="navbar navbar-light ">
                        <div className="container-fluid d-flex ms-5">
                            <form className="d-flex ">
                                <input className="form-control me-3" type="search" placeholder="Search Your Products Here" size="40" aria-label="Search" />
                                <button className="btn btn-dark shadow-md searchbut" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>

                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-2 ">
                            <Link className="nav-link fw-bold text-dark fs-6" to="/">
                                <span style={{ fontSize: '25px', marginLeft: '12px' }}><IoHomeSharp /></span><br />Home
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link fw-bold text-dark fs-6" to="/product">
                                <span style={{ fontSize: '25px', marginLeft: '21px' }}><MdProductionQuantityLimits /></span><br />Products
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link fw-bold text-dark fs-6" to="/userdetails">
                                <span style={{ fontSize: '25px', marginLeft: '4px' }}><FaUser /></span><br />User
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
