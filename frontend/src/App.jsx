import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "./style.css"
import './App.css'
import Home from "./pages/Home"

import Layout from "./layouts/Layout"

function App() {

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home/>},
      
    ]
  }
])

 return <RouterProvider router={router} />

}
export default App
