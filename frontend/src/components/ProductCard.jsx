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
        <div className="card my-3 mx-auto product-card rounded-1" style={{ width: '100%', maxWidth: '18rem' }}>
      <img src={image} className="img-fluid" alt="Product" style={{ height: '300px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title fs-4 fw-semibold">{name}</h5>

        <p className="card-text"><span className='fw-semibold'>Duration</span>: {details.duration}</p>
        <div className="d-grid gap-2">
          <Link to={`/product/${serial}`} className="btn btn-dark">View Details</Link>
          <button onClick={() => handleAddToCart(product)} className="btn btn-success">Add to Cart</button>
        </div>
      </div>
    </div>
    );
};

export default ProductCard;
