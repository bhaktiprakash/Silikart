import EventDemo from "./components/EventDemo"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "./style.css"
import FormDemo from "./components/FormDemo"
import ApiDemo from "./components/ApiDemo"

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from "./components/Layout"

function App() {
//  const router = createBrowserRouter([
//   { path: "/", element: <EventDemo name="Third" />},
//   { path: "/form", element: <FormDemo /> },
//   { path: "/api", element: <ApiDemo /> }
//  ])

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <EventDemo name="Third" />},
      { path: "/form", element: <FormDemo /> },
      { path: "/api", element: <ApiDemo /> }
    ]
  }
])

 return <RouterProvider router={router} />

  // return (
    // <>
    // {/* <EventDemo name="first" /> */}
    // {/* <EventDemo name="second" /> */}
    // {/* <FormDemo /> */}
    // <ApiDemo />
    // </>
  // )
}
export default App
