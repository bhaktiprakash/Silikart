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
        <div>
            <h3>Welcome to profile page</h3>
            <p>Name: {userProfile.name}</p>
            <p>Email: {userProfile.email}</p>
            <p>SIC: {userProfile.sic}</p> 
            <Link to="">Update Password</Link>
        </div>                 
        <div>
            <h2>Orders</h2>
            <ul>
                    {userProfile.orders.map((order) => (
                        <li key={order?._id}>
                            <p>Status: {order.status ? 'Picked up' : 'Under process'}</p>
                            <p>Total Price: {order.totalPrice}</p>
                            <p>Product IDs:</p>
                            <ul>
                                {order.products.map((product) => (
                                    <li key={product?._id}>{product?._id}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
        </div>
        </>
    )
}

export default Profile