import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Notfound() {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate("/")
      //navigate("-1") for the previos page
    }, 1000)
  }, [])
  
  return (
    <div>
        <h1>404 Page not found</h1>
    </div>
    
  )
}
