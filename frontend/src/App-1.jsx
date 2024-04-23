import "./style.css"
import ProductCard from "./components/ProductCard";


function App() {
  console.log("React");
  let x = 10
  const mystyle ={
    color: 'green',
    textDecoration: 'underline'
  }
  const h = <h1>This is an H1 tag</h1>
  // console.log(h);
  const products = [
    {id: 1, product: "Mobile", price: 20000},
    {id: 2, product: "Laptop", price: 120000},
    {id: 3, product: "Mouse", price: 200},
    {id: 4, product: "Keyboard", price: 1000},
    {id: 5, product: "Headphone", price: 5000},
  ]

  return (
    // JSX - JavaScript XML
    // Fragment
    <>
      {/* <h1 className="heading">Hello React!</h1>
      {h} */}
      {/* <h2 style={mystyle}>Learn React</h2>
      <label htmlFor="" style={{color: 'blue'}}>the value of x is {x}</label> */}
      {/* <br></br> */}
      {/* <br /> */}
      {/* {10+20} */}
      {/* <div className="pcard">
        <h2>Mobile</h2>
        <p>50000</p>
      </div> */}
      {/* {ProductCard("Mobile", 50000)}
      {ProductCard("Laptop", 100000)} */}
      
      {/* <ProductCard /> */}
      {/* <ProductCard product={"Mobile"} price={50000} />
      <ProductCard product={"Laptop"} price={100000} />
      <ProductCard product={"Mouse"} price={500} /> */}

      {
        // products.map((product)=> <ProductCard key={product.id} pData={product} /> )
      }
    </>
  )
}



export default App
