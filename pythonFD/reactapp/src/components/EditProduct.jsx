import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams,Link } from "react-router-dom";
export default function EditProduct(){
    const[product,setProduct]=useState({})
    let {id} = useParams()
    let navi = useNavigate();
    function getpro(){
        axios.get(`http://localhost:8000/products/${id}/`)   
        .then((res)=>{setProduct(res.data)})
        .catch((error)=>{
            alert(error)
        })

    }
    useEffect(()=>{
        getpro()
    },[])

    function updateInput(event){
     
        setProduct({
            ...product,
            [event.target.name]:event.target.value
        })

    }    
    function save(){
        axios.put(`http://localhost:8000/products/${id}/`,product)
        .then(()=>alert('Record is updated'))
        navi('/')
        .catch((error)=>{
            alert(error)
        })
    }
    return(
        <React.Fragment>
            <div className="container">
                <p className="h1 text-center text-secondary">EditProduct</p>
               
                <div className="row d-flex  justify-content-center">
                    <div className="col-md-5">
                        <div className="card animated jello">
                        <div className="card-header text-center text-white   bg-secondary   ">
                                <p className="h1">Edit Page</p>
                        </div>
                        <div className="card-body">
                            <form action="" onSubmit={save}>
                               <div className="form-group">
                                 <input type="number" 
                                name='prodid' value={product.prodid}
                                onChange={updateInput}
                                className="form-control"
                                />
                                </div>
                               <div className="form-group">
                                 <input type="text" 
                                name='prodname' value={product.prodname}
                                 onChange={updateInput}
                                className="form-control"
                                />
                                </div>

                                  <div className="form-group">
                                 <input type="number" 
                                name='prodprice' value={product.prodprice}
                                 onChange={updateInput}
                                className="form-control"
                                />
                                </div>
                               
                               <button className="btn btn-primary btn-sm">Save</button>
                                <Link to='/' className='btn btn-sm btn-outline-warning float-right'>Back</Link>                              
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}