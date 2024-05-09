import { useState } from 'react'

// import userApiService from '../ApiService/UserApiService'
import image from "../images/signup3.jpg";
import image1 from "../images/carousal6.jpg";
import studentApiService from '../ApiService/StudentApiService'

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [sic, setSIC] = useState('')
    const [password, setPassword] = useState('')

    const [message, setMessage] = useState('')
    const [error, setError]=useState(false)

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const newStudent = {
            name, email, sic, password
        }
        console.log(newStudent);

        const res = await studentApiService.addStudent(newStudent);
        console.log(res);
        if(res.status){
            setMessage("Registration Successfull")
            
        } else {
            console.log(res.message);
            setMessage(res.message)
        }
        setError(!res.status)
    }
    // console.log("Component Rerendered");


    return (

        <div className="signup-container" style={{ backgroundImage: `url(${image1})`, backgroundSize: 'cover' }}>
            <div className="container py-5">
                <div className="row justify-content-center">
                    {/* <div className="col-12 col-md-6">
                       
                        <img src={image} className="img-fluid rounded-5" height="400px" width="600px" alt="Welcome Please Sign Up!!!!"  />
                    </div> */}
                    {/* Right Side (Form) */} 
                    <div className="col-12 col-md-6 my-5 py-5 mt-5 opacity-form">
                        <div className="card border-light-subtle shadow-sm rounded-5">
                            <div className="card-body p-3 p-md-4 p-xl-5 ">
                                <div className="text-center mb-4">
                                    <h2 className="h4 fw-bold fs-2">Sign Up</h2>
                                    <p className={error ? 'text-danger' : 'text-success'}>{message}</p>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label fw-bold">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder='Enter your Name'
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label fw-bold">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder='Enter your Email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label fw-bold">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder='Enter your Password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3 ">
                                        <button type="submit" className="btn bg-dark text-white rounded-5 w-100 fw-bold">Register</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp