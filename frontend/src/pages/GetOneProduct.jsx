import React, { useEffect, useState } from 'react';
import ProductApiService from '../ApiService/ProductApiService';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const GetOneProduct = () => {
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1); // Default quantity set to 20
    const navigate = useNavigate();
    const { serial } = useParams();
    const {addToCart} = useCart();
    const handleAddToCart = (product) => {
      addToCart(product);
      console.log("Product added to cart");
    }

    async function getData(serial) {
        const res = await ProductApiService.getProductData(serial);
        if (res.status) {
            setProduct(res.data);
        } else {
            console.log('Error in fetching individual product details');
        }
    }

    useEffect(() => {
        getData(serial);
    }, [serial]);

    if (!product) return <h3>Product not found</h3>;

    // Increment quantity function
    const increment = () => {
        setQuantity(quantity + 1);
    };

    // Decrement quantity function
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className='container bg-light p-5 mt-3 rounded-4'>
            <div className='row'>
                <div className='col-md-6 pt-3'>
                    <img src={product.image} alt="Product" height="800px" className='img-fluid' />
                </div>
                <div className='col-md-6 mt-3 mx-auto '>
                    <h3 className='text-center fs-1 mb-5'>{product.name}</h3>
                    <div className='rounded-5 '>
                        <ul className='fs-6'>
                            <li className='m-1 py-1 p-lead'><span className='text-dark fw-semibold'>Availability</span>: {product.availability ? 'Available' : 'Not Available'}</li>
                            <li className='m-1 py-1 p-lead' ><span className='fw-semibold'>Description</span>: {product.details.description}</li>
                            <li className='m-1 py-1'><span className='fw-semibold'>Duration</span>: {product.details.duration}</li> 
                            <li className='m-1 py-1 p-lead '><span className='fw-semibold'>How To Use</span>: {product.details.howToUse}</li>
                            <li className='m-1 py-1 p-lead'><span className='fw-semibold'>Why To Use</span>: {product.details.whyToUse}</li>
                            <li className='m-1 py-1'><span className='fw-semibold'>Product quantity in stock</span>: 20</li>
                        </ul>
                    </div>

                   
                    <div className="input-group m-3">
                        <button className="btn btn-info pb-2" type="button" onClick={decrement}>-</button>
                        <input type="text" className="form-control text-center fw-bold" value={quantity} readOnly />
                        <button className="btn btn-info pb-2 addcartbut
                        " type="button" onClick={increment}>+</button>
                    </div>
                    <button className="btn btn-info mx-3 w-100">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default GetOneProduct;
