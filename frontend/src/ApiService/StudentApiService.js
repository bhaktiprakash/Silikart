import axios from "axios";

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
}

const studentApiService = new StudentApiService()
export default studentApiService