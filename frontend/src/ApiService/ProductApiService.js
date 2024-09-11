import axios from "axios"

class ProdcutApiService {
    constructor(){
        this.api = "https://silikart.onrender.com"
    }
    async getProductInfo(){
        try {
            const res = await axios.get(this.api+"/product")
            console.log(res.data);
            return {data:res.data, status:true};
        } catch (error) {
            return{status:false}
        }
    }

    async getProductData(serial){
        try {
            const res = await axios.get(`${this.api}/product/${serial}`)
            console.log(res.data);
        return {data:res.data[0],status:true}
        } catch (error) {
            return {status:false}
        }
        
    }


}

const ProductApiService = new ProdcutApiService()
export default ProductApiService
