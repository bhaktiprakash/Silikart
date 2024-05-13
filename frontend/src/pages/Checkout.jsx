import {useState} from 'react'
import { useCart } from '../contexts/CartContext' 
import { useAuth } from '../contexts/AuthContext';
import orderApiService from '../ApiService/OrderApiService';
import { MdDelete } from "react-icons/md";


const Checkout = () => {
    const authContext = useAuth()
    // console.log(authContext);
    const {user} = authContext;
    const userId = user?.id;

    const [message, setMessage] = useState('');
    const {cart,removeFromCart, clearCart} = useCart();
    const handlePlaceOrder = async () => {
        try {
          
          const totalPrice = cart.reduce((total, item) => {
            const itemPrice = parseInt(item.price);
            return total + itemPrice;
          }, 0).toString();          
          
          // const productIds = await fetchProductIds(cart);
          const products = cart.map( c => ({
            id: c._id,
            serial: c.serial,
            name: c.name,
            price: c.price
          }))
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

      const handleRemoveItem = (id) => {
        removeFromCart(id)
      }

      const totalAmount = cart.reduce((total, item) => total + parseInt(item.price), 0);
  return (
    <div>
    <h2 className='text-center fw-bold fs-2 mt-2 mb-5'>CHECKOUT</h2>
    {cart.length === 0 ? (
        <p className="text-center">No products added to cart</p>
    ) : (
        <div className="row mx-auto">
            <div className="col-md-6">
                {cart.map((item) => (
                    <div key={item.serial} className="d-flex align-items-center mb-3 border border-2 shadow-lg ">
                        <div className="">
                            <img src={item.image} className="img-fluid h-25 w-25 my-2 ms-2 rounded-3" alt={item.name} />
                            
                        </div>
                        <div className='col-6'>
                            <h5 className="fw-normal text-center pt-2">{item.name}</h5>
                            <p className="fw-bold text-center">Rs.{item.price}</p>
                            
                        </div>
                        <button className="btn px-2 ms-3 fs-5 text-black" onClick={() => handleRemoveItem(item._id)}><MdDelete /></button>
                    </div>
                    
                ))}
            </div>
            <div className="col-md-6">
                <div className="cart-summary-box rounded-5 shadow-lg">
                    <div className="text-center">
                        <h4 className="fw-bold fs-3">Cart Summary</h4>
                        <p>Total Items: {cart.length}</p>
                        <p className="fw-bold">Total Price: Rs.{totalAmount}</p>
                        <button onClick={handlePlaceOrder} className="btn home_detailsbg">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    )}
</div>

)}

export default Checkout
