import { useState } from 'react'
// import userApiService from '../ApiService/UserApiService'

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [message, setMessage] = useState('')
    const [error, setError]=useState(false)

    const handleSubmit = async(e) =>{
        e.preventDefault()
        // const newUSer = {
        //     name, email, password
        // }
        // console.log(newUSer);

        // const res = await userApiService.addUSer(newUSer);
        // console.log(res);
        // if(res.status){
        //     setMessage("Registration Successfull")
            
        // } else {
        //     setMessage(res.message)
        // }
        // setError(!res.status)
    }
    // console.log("Component Rerendered");


    return (
        <div className="row">
            <div className="col-md-6 mx-auto">
                <div className="card">
                    <div className="card-header">
                        <h3>Sign Up</h3>
                        <p className={error ? 'text-danger' : 'text-success'}>{message}</p>
                    </div>
                    <div className="card-body">
                        <form action="" method="post" onSubmit={handleSubmit}>
                            <div className="mb-1">
                                <label htmlFor="">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
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
                                    value="Register"
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

export default SignUp