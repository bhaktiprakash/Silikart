import axios from "axios";
import { getToken } from "../utils/helperFunctions";

class OrderApiService{
    constructor(){
        this.api = "http://localhost:5000"
    }

    async addOrder(cart){
        try {
            const res = await axios.post(`${this.api}/order`, cart, {
                headers: {
                    'Authorization': `Bearer ${getToken()}`
                }
            })
            console.log(res.data);
            return {data: res.data, status: true}
        } catch (error) {
            console.log(error?.response?.data?.message);
            return {status: false, message: error?.response?.data?.message}
        }
    }
}

const orderApiService = new OrderApiService()
export default orderApiService
