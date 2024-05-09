import { useState } from 'react'
import studentApiService from '../ApiService/StudentApiService'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import image1 from "../images/signin4.jpg";


const SignIn = () => {
    const navigate = useNavigate()
    const authContext = useAuth()
    if(!authContext){
        return <div>Loading...</div>
    }
    const { login } = authContext

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [message, setMessage] = useState('')
    const [error, setError]=useState(false)

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const student = {
            email, password
        }
        console.log(student);

        const res = await studentApiService.loginStudent(student);
        console.log(res);
        if(res.status){
            setMessage("Login Successfull")
            login(res.data.token)
            navigate("/")
        } else {
            setMessage(res.message)
        }
        setError(!res.status)
    }
    // console.log("Component Rerendered");


    return (
        <div className="signup-container" style={{ backgroundImage: `url(${image1})`, backgroundSize: 'cover' }}>
    <div className="container py-5">
        <div className="row justify-content-center ps-5 ">
            <div className="col-12 col-md-6 my-5 py-5 mt-5 opacity-form">
                <div className="card border-light-subtle shadow-lg rounded-5">
                    <div className="card-body p-3 p-md-4 p-xl-5">
                        <div className="text-center mb-4">
                            <h2 className="h4 fw-bold fs-2">Sign In</h2>
                            <p className={error ? 'text-danger' : 'text-success'}>{message}</p>
                        </div>
                        <form onSubmit={handleSubmit}>
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
                            <div className="mb-3 mt-4">
                                <button type="submit" className="btn bg-dark text-white rounded-5 w-100 fw-bold">Log In</button>
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

export default SignIn