import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "./style.css"
import './App.css'
import Home from "./pages/Home"

import GetProductDetails from './pages/GetProductDetails'
import GetOneProduct from './pages/GetOneProduct'

import Layout from "./layouts/Layout"

function App() {

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home/>},
      { path: "/product", element: <GetProductDetails/>},
      { path: "/product/:serial", element: <GetOneProduct/>},
      
    ]
  }
])

 return <RouterProvider router={router} />

}
export default App
