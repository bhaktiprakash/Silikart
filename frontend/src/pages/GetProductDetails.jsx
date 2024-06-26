import React, { useEffect, useState } from 'react'
import ProductApiService from '../ApiService/ProductApiService'
import {useParams, Link, useNavigate} from 'react-router-dom'
import ProductCard from '../components/ProductCard'


const GetProductDetails = () => {
  const [products, setProducts] = useState(null);
  const navigate = useNavigate();
  const {serial} = useParams();

  async function getData(){
    try {
      const res = await ProductApiService.getProductInfo();
    if(res.status){
      setProducts(res.data);
    } else{
      console.log('error in fetching product details');
    }
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
    
  }

  useEffect(() => {
    getData();
  }, []);

  if(!products) return <p>No products available</p>;
  return (
    <div className=''>
      <h2 className='shadow-sm fw-bold p-3 mb-5 text-center rounded'> ALL PRODUCTS </h2>
      <div className="row">
      {products.map((product, serial) => (
        <div className="col-md-3" key={serial}>
          <ProductCard  product={product}/>
          </div>        
      ))}
        </div>
      </div>
  )
}
export default GetProductDetails
