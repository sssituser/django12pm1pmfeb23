import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddProduct(){
let navi = useNavigate()
const[product,setProduct]=useState({
    prodid:"",
    prodname:"",
    prodprice:""
})
function updateInput(event){
    
    setProduct({
        ...product,
        [event.target.name]:event.target.value
    })
}
function save(event){
    event.preventDefault()
    axios.post("http://localhost:8000/products/",product)
    .then(()=>{
        alert("Product Added..")
        navi('/')
    })
    .catch((er)=>alert(er))
}
    return(
        <React.Fragment>
            <div className="container">
                
                <div className="row d-flex justify-content-center mt-5">
                    <div className="col-md-5">
                            <div className="card">
                                <div className="card-headder text-center bg-primary text-white">
                                    <p className="h2">Add Product Here</p>
                                </div>
                                <div className="card-body">
                                    <form action="" onSubmit={save}>
                                            <div className="form-group">
                                                <input type="number"
                                                value={product.prodid}
                                                name="prodid"
                                                onChange={updateInput}
                                                placeholder="ProductID" className="form-control"/>
                                            </div>
                                             <div className="form-group">
                                                <input type="text"
                                                value={product.prodname}
                                                name="prodname"
                                                onChange={updateInput}
                                                placeholder="Product Name" className="form-control"/>
                                            </div>
                                             <div className="form-group">
                                                <input type="number"
                                                value={product.prodprice}
                                                name="prodprice"
                                                onChange={updateInput}
                                                placeholder="Product Price" className="form-control"/>
                                            </div>
                                            <button className=" btn btn-primary btn-md">Save</button>
                                            <Link to='/' className=" btn btn-warning btn-sm float-right">BacK</Link>
                                    </form>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}