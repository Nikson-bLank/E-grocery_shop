import { Route, Routes } from "react-router-dom"

import Home from "../pages/Home"
import ProductDetails from "../pages/products/ProductDetails"
import Products from "../pages/products/Products"


const PageRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/category/:id/products" element={<Products/>}></Route>
        <Route path="/product/:id" element={<ProductDetails/>}></Route>
        {/* <Route path="/category/:id" element={<Products/>}></Route> */}
    </Routes>
  )
}

export default PageRoute