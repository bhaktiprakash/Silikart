import {useState} from 'react'
import { useCart } from '../contexts/CartContext' 
import { useAuth } from '../contexts/AuthContext';
import orderApiService from '../ApiService/OrderApiService';

const Checkout = () => {
    const authContext = useAuth()
    // console.log(authContext);
    const {user} = authContext;
    const userId = user.id;
    const [message, setMessage] = useState('');

    const {cart, clearCart} = useCart();

    const handlePlaceOrder = async () => {
        try {
          
          const totalPrice = cart.reduce((total, item) => {
            const itemPrice = parseInt(item.price);
            return total + itemPrice;
          }, 0).toString();          
          
          // const productIds = await fetchProductIds(cart);
          const products = cart.map( c => c._id)
          // console.log(productIds);
          const newCart = {
            userId, products, totalPrice
          }
          console.log(newCart);
          const res = await orderApiService.addOrder(newCart);
          // console.log(res);
          if(res.status){
              setMessage("Order Successfull")
              alert("order placed successfully")
              clearCart()
          } else {
              console.log(res.message);
              setMessage(res.message)
          }
        } catch (error) {
          console.log('Error placing order:', error);
          
        }
      };     

  return (
    <div>
      <h2>Checkout </h2>
      <ul>
        {cart.map((item) => (
            <li key={item.serial}>
                {item.name} - Rs.{item.price}   
            </li>
        ))}
      </ul>
      <button onClick={handlePlaceOrder } className='btn btn-primary'>Place Order</button>
    </div>
  )
}

export default Checkout
