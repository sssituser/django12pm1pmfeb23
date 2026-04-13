import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'
export default function Products(){
    const[products,setProducts]=useState([])// useState hook
    function getProducts(){
        axios.get("http://localhost:8000/products/")
        .then((res)=>{
            setProducts(res.data)
        })
        .catch((error)=>{
            alert(error)
        })
    }
    function del(id){
        axios.delete(`http://localhost:8000/products/${id}/`)
        .then(()=>{
            alert("Record Deleted")
            getProducts()
        })
        .catch((er)=>alert(er+"........"))
    }
  useEffect(()=>{
    getProducts()
  },[])
    return(
        <React.Fragment>
           <section className="mt-5">
              <div className="container">
                  <p className="lead text-primary">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum labore ad atque ut dolore! Quod veniam dolorem odit ad sit laboriosam perspiciatis dicta doloremque accusamus nostrum minus dignissimos provident repudiandae esse tenetur molestiae corporis, officiis amet velit, praesentium similique ipsum dolores. Porro, non iure. Aliquam soluta id ipsam amet veniam hic corporis necessitatibus delectus a quae? Dolor ab neque unde molestiae maxime, deserunt doloribus vel, a asperiores sint mollitia distinctio?
                </p>
                <div className="row mb-5">
                    <div className="col-md-8">
                        <Link to='/add' className="btn btn-md btn-secondary">Register Product</Link>
                    </div>
                    <div className="col-md-4">
                        <input type="search" className="form-control"/>
                    </div>
                </div>
              </div>
           </section>
           <section>
             <div className="container">
               
               
                <div className="row">
                    <div className="col">
                       {
                            products.length>0 ?
                           <table className="table table-bordered table-hover table-striped text-center">
                              <thead className="bg-secondary text-white">
                                <tr>
                                    <th>Product ID</th>
                                    <th>Product Name</th>
                                    <th>Product Price</th>
                                    <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                {
                                    products.map((prod)=>{
                                        return(
                                            <tr>
                                                <td>{prod.prodid}</td>
                                                <td>{prod.prodname}</td>
                                                <td>{prod.prodprice}</td>
                                                <td>
                                                    <Link to={`/find/${prod.id}`}><i className="fa fa-eye text-primary fa-2x mr-3"/></Link>
                                                    <Link to={`/edit/${prod.id}`}><i className="fa fa-pen text-warning fa-2x mr-3"/></Link>
                                                    <i onClick={()=>{del(prod.id)}} className="fa fa-trash fa-2x text-danger"/>

                                                </td>
                                            </tr>
                                        )

                                    })
                                }
                              </tbody>
                           </table>
                            :
                            <p className="h1">
                                <p className="h1 text-danger text-center">Records Not Found</p>
                            </p>
                       }
                    </div>
                </div>
            </div>
           </section>
        </React.Fragment>
    )
}