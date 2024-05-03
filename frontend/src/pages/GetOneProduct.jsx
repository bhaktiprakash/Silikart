import React, { useEffect, useState } from 'react';
import ProductApiService from '../ApiService/ProductApiService';
import { useParams, Link, useNavigate } from 'react-router-dom';

const GetOneProduct = () => {
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(20); // Default quantity set to 20
    const navigate = useNavigate();
    const { serial } = useParams();

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
        <div className='container bg-white'>
            <div className='row'>
                <div className='col-md-6 pt-3'>
                    <img src={product.image} alt="Product" height="800px" className='img-fluid' />
                </div>
                <div className='col-md-6 pt-3 mt-5 ps-5 mx-auto '>
                    <h3 className='text-center fw-bold fst-italic fs-1 mb-5'>{product.name}</h3>
                    <div className='bg-light rounded-5 '>
                        <ul className='fw-bold fst-italic fs-6'>
                            <li className='m-1 py-1'>Availability: {product.availability ? 'Available' : 'Not Available'}</li>
                            <li className='m-1 py-1 p-lead' >Description: {product.details.description}</li>
                            <li className='m-1 py-1'>Duration: {product.details.duration}</li> 
                            <li className='m-1 py-1 p-lead '>HowToUse: {product.details.howToUse}</li>
                            <li className='m-1 py-1 p-lead'>WhyToUse: {product.details.whyToUse}</li>
                            <li className='m-1 py-1'>Default value is 20</li>
                        </ul>
                    </div>

                   
                    <div className="input-group mt-2 mb-3 mt-4">
                        <button className="btn btn-info pb-2 addcartbut" type="button" onClick={decrement}>-</button>
                        <input type="text" className="form-control text-center fw-bold" value={quantity} readOnly />
                        <button className="btn btn-info pb-2 addcartbut
                        " type="button" onClick={increment}>+</button>
                    </div>
                    <button className="btn btn-dark w-100">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default GetOneProduct;
