import { useState, useRef } from 'react'

function FormDemo() {
    const numOne = useRef(null)
    const numTwo = useRef(null)
    const [result, setResult] = useState(0)
    function handleSubmit(e){
        e.preventDefault()
        // console.log(numOne);
        let a = numOne.current.value
        let b = numTwo.current.value
        if(a==="" || b===""){
            alert("Enter both the numebrs")
            return
        } else if(isNaN(a) || isNaN(b)) {
            alert("Both of them must be numbers")
            return
        }
        a = Number(a)
        b = Number(b)
        setResult(a+b)
    }

    return (
        <div className="row">
            <div className="col-md-4 mx-auto my-3">
                <h1 className="text-primary">Add Calculator</h1>
                <form action="" method="post" onSubmit={handleSubmit}>
                    <input
                        ref={numOne}
                        type="text"
                        className="form-control mb-2"
                        placeholder="First Number"
                    />
                    <input
                        ref={numTwo}
                        type="text"
                        className="form-control mb-2"
                        placeholder="Second Number"
                    />
                    <input
                        type="submit"
                        value="Add"
                        className="btn btn-primary mb-2"
                    />
                    {result>0 && <p>Sum = {result}</p>}
                </form>
            </div>
        </div>
    )
}

export default FormDemo
