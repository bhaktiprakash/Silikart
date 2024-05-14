import { useEffect, useState } from 'react'
import studentApiService from '../ApiService/StudentApiService'
import { Link } from 'react-router-dom'
import ProductApiService from '../ApiService/ProductApiService'


const Profile = () => {
    const [userProfile, setUserProfile] = useState(null)

    const getUserProfile = async () => {
        let res = await studentApiService.userProfile()
        if (res.status) {
            console.log(res.data)
            let { email, name, orders, sic } = res.data
            
            setUserProfile(res.data)
        }
    }
    useEffect(() => {
        getUserProfile()
    }, [])

    const fetchProductData = async (serial) => {
        try {
            const res = await ProductApiService.getProductData(serial);
            return res.data;
        } catch (error) {
            console.log(`Error fetching product data for ${serial}: `, error);
            return null;
        }
    }

    if (!userProfile) return

    return (
        <>
         <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto my-5 pt-5">
                    <div className="shadow-lg rounded-5">
                        <div className="card-body px-3 py-3">
                            <h2 className="card-title text-black text-center fw-bold">Your Profile </h2>
                            <p className="card-text"><strong>Name: </strong>  {userProfile.name}</p>
                            <p className="card-text"><strong>Email:</strong>  {userProfile.email}</p>
                            <p className="card-text"><strong>SIC:</strong>  {userProfile.sic}</p>
                            <p className="card-text">
                                <Link to="">
                                    Update Password
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h2 className="text-black text-center mt-5 fw-bold">Your Orders</h2>
                    <ul className="list-unstyled mt-3">
                        {userProfile.orders.map((order) => (
                            <li key={order?._id} className="card my-2  mb-3">
                                <div className="card-body">
                                    <p className='fw-bold'>PRODUCT DETAILS:</p>
                                    
                                    
                                    <div className="px-2  mt-1">
                                        {order.products.map((product) => (
                                            <li key={product?._id } className="m-2">
                                                <h1 className='fs-6'>Product: {product?.name}</h1>
                                                <h1 className='fs-6'>Price: Rs. {product?.price}</h1>
                                                <h1 className='fs-6'>Status: {order.status ? 'Picked up' : 'Under process'}</h1>
                                                <h1 className='fs-6'>Total Price: Rs. {order.totalPrice}</h1>
                                            </li>
                                        ))}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Profile