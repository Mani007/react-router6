import React from 'react'
import { Link } from 'react-router-dom'

export default function Marketplace() {
  return (
    <>
    <div>
        <h1>This is the marketplace page </h1>
        <Link to="/product/01">Product 1 <span> &nbsp;</span></Link>
        <Link to="/product/02">Product 2 <span> &nbsp;</span></Link>
        <Link to="/product/03">Product 3 <span> &nbsp;</span></Link>
        <Link to="/product/04">Product 4 <span> &nbsp;</span></Link>
        <Link to="/product/05">Product 5 <span> &nbsp;</span></Link>
    </div>
    </>
  )
}
