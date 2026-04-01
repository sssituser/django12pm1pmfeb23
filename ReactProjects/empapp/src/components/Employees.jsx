import React, { useEffect, useState } from "react";
import {Link}   from 'react-router-dom'
import axios from 'axios'
export default function Employees(){

let[employees,setEmployees]=useState([])

useEffect(()=>{
    axios.get("http://localhost:9000/employees")
    .then((res)=>{
        setEmployees(res.data)
    })
    .catch(
        (error)=>{
            alert(error)
        }
    )
},[])

    return(
        <React.Fragment>
            <div className="container">
                <section>
                    
                    <div className="row">
                        <div className="col">
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, aliquid laborum perferendis ipsum, quidem dolores molestiae, expedita alias delectus aspernatur mollitia maxime beatae quibusdam incidunt labore provident quo fuga facilis facere exercitationem voluptates adipisci necessitatibus! Ea necessitatibus reiciendis delectus similique obcaecati dolorum quibusdam, quam sint nesciunt quasi animi cumque, sapiente odio pariatur dolores id eaque aspernatur inventore vel. Fugit, ipsa!</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-8">
                            <Link to='/' className="btn  btn-primary btn-md">Add</Link>
                        </div>
                        <div className="col-md-4">
                            <input type="search" className="form-control"/>
                        </div>
                    </div>
                </section>

               
                <section>
                    {
                        employees.length>0 ?
                        <table className="table table-bordered table-hover table-striped  text-center">
                            <thead className=" bg-primary text-white">
                                <tr>
                                    <th>Employee ID</th>
                                    <th>Employee Name</th>
                                    <th>Empoyee Salary</th>
                                    <th>Picture</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employees.map((emp)=>{
                                        return(
                                            <tr>
                                                <td>{emp.eid}</td>
                                                <td>{emp.ename}</td>
                                                <td>{emp.esal}</td>
                                                <td>
                                                   <img src={emp.imgurl} alt=""  height={200} width={200} className="img-fluid" />
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        :
                        <p className="h1 text-danger text-center">Records Not Found</p>
                    }
                </section>
            </div>
        </React.Fragment>
    )
}