import React from 'react';
import ProductApiService from '../ApiService/ProductApiService';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { serial, name, availability, image } = product;
    const availabilityText = availability ? 'Available' : 'Not Available';

    return (
        <div className="card m-2 product-card" style={{ width: '17rem' }}>
            <img src={image} className="card-img-top" alt="Product" style={{ height: '300px' }} />
            <div className="card-body">
                <h5 className="card-title fs-4 fw-semibold">{name}</h5>
                <p className="card-text">Serial: {serial}</p>
                <p className="card-text fw-bold fst-italic">Availability: {availabilityText}</p>
                <div className="d-grid gap-2">
                    <Link to={`/product/${serial}`} className="btn btn-dark">View Details</Link>
                    <Link to="#" className="btn btn-success">Add to Cart</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
