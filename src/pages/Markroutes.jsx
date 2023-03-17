import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Marketplace from './Marketplace'
import Marklayout from './Marklayout'
import Product from './Product'

export default function Markroutes() {
  return (
    <>
    
        <Routes>
        <Route index element={<Marketplace/>}/>
        
        <Route path=":id" element={<Product/>}/>
        </Routes>
        <Marklayout/>
    </>
  )
}
