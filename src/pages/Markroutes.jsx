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
            <Route element={<Marklayout/>}>
                
                <Route path=":id" element={<Product/>}/>
            </Route>
        </Routes>
        <Marklayout/>
    </>
  )
}
