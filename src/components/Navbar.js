import React from 'react'
import { Link } from 'react-router-dom';

const navStyle = {
    display:"flex",
    // justify-content:"space-between",
    color:"black",
    gap:"50px",
    text:"none",
  };

const Navbar = () => {
  return (
    <div className='nav' >
        <ul style={navStyle}>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Cart</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>
    </div>
  )
}

export default Navbar