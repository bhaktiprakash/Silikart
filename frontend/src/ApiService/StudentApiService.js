import axios from "axios";
import { getToken } from "../utils/helperFunctions"

class StudentApiService{
    constructor(){
        this.api = "http://localhost:5000"
    }

    async addStudent(student){
        try {
            const res = await axios.post(`${this.api}/student/signup`, student)
            console.log(res.data);
            return {data: res.data, status: true}
        } catch (error) {
            console.log(error?.response?.data?.message);
            return {status: false, message: error?.response?.data?.message}
        }
    }

    async loginStudent(student){
        try {
            const res = await axios.post(`${this.api}/student/signin`, student)
            console.log(res.data);
            return {data: res.data, status: true}
        } catch (error) {
            console.log(error);
            return {status: false, message: error?.response?.data?.message}
        }
    }

    async userProfile(){
        try {
            console.log("User profile function is called");
            const res = await axios.get(`${this.api}/student/profile`, {
                headers: {
                    'Authorization' : `Bearer ${getToken()}`
                }
            })
            console.log("Axios response");
            console.log(res.data);
            return {data: res.data[0], status: true}
        } catch (error) {
            console.log(error);
            return {status: false, message: error?.response?.data?.message}
        }
    }

}

const studentApiService = new StudentApiService()
export default studentApiService