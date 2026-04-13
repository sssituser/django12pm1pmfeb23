import React from "react";
import {Routes,Route} from 'react-router-dom' 
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import FindProduct from "./components/FindProduct";
export default function App(){
  return(
    <React.Fragment>
      <div className="container">
        <Routes>
          <Route path="/" element={<Products/>}/>
          <Route path="/add" element={<AddProduct/>}/>
          <Route path="/edit/:id" element={<EditProduct/>}/>
           <Route path="/find/:id" element={<FindProduct/>}/>
        </Routes>
      </div>
    </React.Fragment>
  )
}
