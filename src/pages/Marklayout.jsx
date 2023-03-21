import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Marklayout() {
  const [number, setNumber] = useState(6)
  return (
    <>
    <div>
    <Outlet context={{hello:"World!!!"}}/>
        <Link to="/product/01">Product 1 </Link> <br/> 
        <Link to="/product/02">Product 2 </Link> <br/>
        <Link to="/product/03">Product 3 </Link> <br/>
        <Link to="/product/04">Product 4 </Link> <br/>
        <Link to="/product/05">Product 5 </Link> <br/>
        <Link to={`/product/${number}`}>Product {number} </Link> <br/>
        <input type="number" value={number} onChange={e => setNumber(e.target.value)} />
          </div>
    </>
  )
}
