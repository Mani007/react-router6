import React from 'react'
import { useParams } from 'react-router-dom'

export default function Product() {
  const {id} = useParams()
    return (
    <>
    <div>
      <h1>This is the product Description of </h1>  
        <h3>This is Product <strong>{id}</strong></h3>
    </div>
    </>
  )
}
