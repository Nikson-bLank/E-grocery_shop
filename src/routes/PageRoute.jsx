import { Route, Routes } from "react-router-dom"

import Home from "../pages/Home"
import ProductDetails from "../pages/products/ProductDetails"
import Products from "../pages/products/ProductDetails"


const PageRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/product/:id" element={<ProductDetails/>}></Route>
        
    </Routes>
  )
}

export default PageRoute