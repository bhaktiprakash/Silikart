import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    {/* <a href='/'>Home</a> &nbsp;&nbsp;
    <a href='/form'>Form</a> &nbsp;&nbsp;
    <a href='/api'>API</a> &nbsp;&nbsp; */}

    <Link to='/'>Home</Link> &nbsp;&nbsp;
    <Link to='/form'>Form</Link> &nbsp;&nbsp;
    <Link to='/api'>API</Link> &nbsp;&nbsp;
    </div>
  )
}

export default Navbar
