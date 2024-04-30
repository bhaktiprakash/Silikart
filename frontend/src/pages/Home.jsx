import React, { useEffect, useState } from 'react'
import ProductApiService from '../ApiService/ProductApiService'
import ProductCard from '../components/ProductCard'
import '../style.css'

const Home = () => {
  // const [products, setProducts] = useState(null);

  // async function getProductData(){
  //   try {
  //     const res = await ProductApiService.getProductInfo();
  //     if(res.status){
  //       setProducts(res.data);
  //     } else{
  //       console.log("Error in getting details");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching product data:", error);
  //   }
  // }

  // useEffect(() => {
  //   getProductData();
  // }, []);

  // if(!products) return <div>Loading...</div>;
  return (
    <>
    {/* intro */}
    <div className='container p-2 m-3'>
      <div className='row'>
        <div className="col-md-8">
          <img src="https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1714003200&semt=sph" alt="" />
        </div>
          <div className="col-md-4">
          <h3 className='p-3 lh-base'>Welcome to <span className='text-primary'>Silikart</span> ! your one stop solution for <br />
          all your engineering essentials, absolutely FREE OF COST!!</h3>
          </div> 
      </div>
    </div>
    <div className="container bg-light p-3">
      <h3>Meet our team!</h3>
      <p>Swati Nath</p>
      <p>Bhakti Prakash Das</p>
      <p>Anjaneya Mishra</p>
      <p>Aditya Pandey</p>
    </div>
    </>
    )
}

export default Home
