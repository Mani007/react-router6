import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

export default function Product() {
  const {id} = useParams()
  const obj = useOutletContext()
    return (
    <>
    <div>
      <h1>This is the product Description of </h1>  
        <h3>This is Product <strong>{id}</strong></h3>
        <h5>The context parm is {obj.hello}</h5>
    </div>
    </>
  )
}
