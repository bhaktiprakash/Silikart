import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

import "./style.css"
import './App.css'
import Home from "./pages/Home"

import GetProductDetails from './pages/GetProductDetails'
import GetOneProduct from './pages/GetOneProduct'

import Layout from "./layouts/Layout"
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Checkout from './pages/Checkout'
import Profile from './pages/Profile'

function App() {

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home/>},
      { path: "/product", element: <GetProductDetails/>},
      { path: "/product/:serial", element: <GetOneProduct/>},
      { path: "/signup", element: <SignUp/>},
      { path: "/signin", element: <SignIn/>},
      {path: "/checkout", element: <Checkout/>},
      {path: "/profile", element: <Profile/>}

      // { path: "/search", element: <SearchResult/>},
    ]
  }
])

 return <RouterProvider router={router} />

}
export default App
