import axios from "axios"

class ProdcutApiService {
    constructor(){
        this.api = "http://localhost:5173/"
    }
    async getProductInfo(){
        try {
            const res = await axios.get(this.api+"/products")
            console.log(res.data);
            return {data:res.data, status:true};
        } catch (error) {
            return{status:false}
        }
    }


}

const ProdcutApiService = new ProdcutApiService()
export default ProdcutApiService
