import {useState} from 'react';
import { Link} from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

const ProductCard = ({ product }) => {
    const { serial, name, availability, image, details } = product;
    const availabilityText = availability ? 'Available' : 'Not Available';

    const {addToCart} = useCart();
    const authContext = useAuth();
    const { user } = authContext;

    const handleAddToCart = (product) => {
      if(user){
        addToCart(product);
        console.log("Product added to cart");
        alert("Product added to cart")
      }
      else{
        alert("Sign in to buy")
      }
      
    }

    return (
      <div className="card my-4 mx-auto product-card border rounded-2" style={{ maxWidth: '20rem' }}>
      <img src={image} className="card-img-top img-fluid" alt="Product" style={{ maxHeight: '250px' }} />
      <div className="card-body">
        <h5 className="card-title fs-5 fw-bold">{name}</h5>
        {/* <p className="card-text">Serial: {serial}</p> */}
        {/* <p className="card-text"><span className='fw-bold'>Availability</span>: {availabilityText}</p> */}
        <p className="card-text"><span className='fw-bold'>Duration</span>: {details.duration}</p>
        <div className="d-grid gap-1">
          <Link to={`/product/${serial}`} className="btn btn-outline-dark">View Details</Link>
          <button onClick={() => handleAddToCart(product)} className="btn btn-outline-success">Add to Cart</button>

        </div>
      </div>
    </div>
    );
};

export default ProductCard;
