import React, {useEffect, useState} from 'react'
import ProductApiService from '../ApiService/ProductApiService'
import { useParams,Link, useNavigate } from 'react-router-dom';

const GetOneProduct = () => {
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();
    const { serial} = useParams();
    // console.log(product.availability);
    // const availabilityText = product?.availability ? 'Available' : 'Not Available';
    async function getData(serial){
        const res = await ProductApiService.getProductData(serial);
        if (res.status){
            setProduct(res.data);
        } else{
            console.log('error in fetching individual product details');
        }
    }

    useEffect(() => {
        getData(serial);
      }, [serial]); 

    if (!product) return <h3>Product not found</h3>;

  return (
    <div>
        <h3>{product.name}</h3>
        <img src={product.image} alt="image" />
        <h3>Availability: {product.availability ? 'Available' : 'Not Available'}</h3>
      {/* <p>Availability: {product.availability}</p> */}
    </div>
  )
}

export default GetOneProduct
