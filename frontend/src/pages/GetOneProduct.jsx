import React, { useEffect, useState } from 'react';
import ProductApiService from '../ApiService/ProductApiService';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import { GiCardPickup } from "react-icons/gi";
import { GiDuration } from "react-icons/gi";

const GetOneProduct = () => {
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1); // Default quantity set to 20
    const navigate = useNavigate();
    const { serial } = useParams();
    const {addToCart} = useCart();
    const authContext = useAuth();
    const { user } = authContext;

    const handleAddToCart = (product) => {
        if(user){
            addToCart(product);
            console.log("Product added to cart");
            alert("Product added to cart");
        }
        else{
            alert("Login to buy")
        }
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

    const productCount = () => {
        alert("Product quantity is limited to 1 to avoid hoarding issues. Thank you for your support and understanding")
    }

    
    return (
        <div className='container bg-light p-5 mt-3 rounded-4'>
            <div className='row'>
                <div className='col-md-6 pt-3'>
                    <img src={product.image} alt="Product" height="800px" className='img-fluid' />
                </div>
                <div className='col-md-6 mt-3 mx-auto '>
                    <h3 className='text-center fs-1 mb-5'>{product.name}</h3>
                    <h1 className='fw-bold fs-4 ps-4'>Product Details</h1>
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
                    <div>
                        <h1 className='fw-bold fs-4 ps-4'>Benefits</h1>
                    </div>
                    <div className="row justify-content-between justify-content-md-between mx-auto md-2 ms-md-5 md-5 mt-4">
                        <div className="col-6 col-md-3 text-center mb-4">
                            <div>
                                <h1 className='fs-1 '><TbTruckDelivery /></h1>
                                <p>Free Delivery</p>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 text-center mb-4'>
                            <div>
                                <h1 className='fs-1'><TbReplace /></h1>
                                <p>Easy Replace</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 text-center mb-4">
                            <div>
                                <h1 className='fs-1'><GiDuration /></h1>
                                <p>Fixed Duration</p>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 text-center mb-4'>
                            <div>
                                <h1 className='fs-1'><GiCardPickup /></h1>
                                <p>Easy Pickup</p>
                            </div>
                        </div>
                    </div>
 
                    
                    <div className="input-group m-3">
                        <button className="btn btn-info pb-2" type="button" onClick={productCount}>-</button>
                        <input type="text" className="form-control text-center fw-bold" value={quantity} readOnly />
                        <button className="btn btn-info pb-2 addcartbut
                        " type="button" onClick={productCount}>+</button>
                    </div>
                   
                    <button className="btn btn-info mx-3 w-100" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    
                </div>
            </div>
        </div>
    );
}

export default GetOneProduct;
