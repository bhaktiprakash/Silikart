import { useState } from 'react'
// import userApiService from '../ApiService/UserApiService'
// import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const navigate = useNavigate()
    // const authContext = useAuth()
    // const { login } = authContext

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [message, setMessage] = useState('')
    const [error, setError]=useState(false)

    const handleSubmit = async(e) =>{
        e.preventDefault()
        // const user = {
        //     email, password
        // }
        // console.log(user);

        // const res = await userApiService.loginUser(user);
        // console.log(res);
        // if(res.status){
        //     setMessage("Login Successfull")
        //     login(res.data.token)
        //     navigate("/")
        // } else {
        //     setMessage(res.message)
        // }
        // setError(!res.status)
    }
    // console.log("Component Rerendered");


    return (
        <div className="row m-3">
            <div className="col-md-6 mx-auto">
                <div className="card">
                    <div className="card-header">
                        <h3>Sign In</h3>
                        <p className={error ? 'text-danger' : 'text-success'}>{message}</p>
                    </div>
                    <div className="card-body">
                        <form action="" method="post" onSubmit={handleSubmit}>
                            <div className="mb-1">
                                <label htmlFor="">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-1">
                                <label htmlFor="">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <div className="my-1">
                                <input
                                    type="submit"
                                    value="Log In"
                                    className="btn btn-info w-100"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn