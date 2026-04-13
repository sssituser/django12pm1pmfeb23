import React, { useEffect, useState } from "react";
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'
export default function FindProduct(){
   let {id} = useParams()
   const[product,setProduct]=useState({})
   function getProductById(){
        axios.get(`http://localhost:8000/products/${id}/`)
        .then((res)=>{
            setProduct(res.data)
        })
        .catch((error)=>{
            alert(error)
        })
   }
   useEffect(()=>{
    getProductById()
   },[])
    return(
        <React.Fragment>
            <div className="container">
               
              
                <div className="row d-flex justify-content-sm-center">
                    <div className="col-md-5">
                        <div className="card animated zoomIn">
                            <div className="card-header text-center bg-secondary text-white">
                               <p className="h1"> Product Information</p>
                            </div>
                            <div className="card-body">
                                <ul className="list-group text-primary">
                                    <li className="list-group-item">
                                        <p className="h3">Product ID  : {product.prodid}</p>
                                    </li>
                                    <li className="list-group-item">
                                        <p className="h3">Product Name  : {product.prodname}</p>
                                    </li>
                                    <li className="list-group-item">
                                        <p className="h3">Product Price  : {product.prodprice}</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-footer">
                                <Link to={`/edit/${id}`} className="btn btn-outline-secondary btn-sm">Edit</Link>
                                <Link to='/' className="btn btn-outline-warning btn-sm float-right">Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}