import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
export default function Employees() {

    const [employees, setEmployees] = useState([])

    function getEmployees() {
        axios.get("http://localhost:9000/employees")
            .then((res) => {
                setEmployees(res.data)
            })
            .catch((error) => alert(error))
    }
    useEffect(() => {
        getEmployees()
    }, [])

    function del(id){
        axios.delete(`http://localhost:9000/employees/${id}`)
        .then(()=>{
            alert('Record Deleted....')
            getEmployees()
        })
        .catch((error)=>alert(error))
    }
    return (
        <React.Fragment>
            <div className="container">
                <section>

                    <div className="row">
                        <div className="col">
                            <p className="lead text-teal">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor in eligendi illo ipsam animi inventore architecto ipsa explicabo provident saepe obcaecati reiciendis amet mollitia itaque deleniti sint cupiditate ut atque labore, ducimus deserunt blanditiis quia dolorem? Laudantium, molestiae facilis deleniti, provident neque itaque natus suscipit rerum quia vel temporibus nihil iste illo minus doloremque molestias, nobis et eligendi fugit sint non a iusto! Inventore obcaecati, deleniti accusamus voluptatum temporibus voluptatem maxime, ratione culpa ducimus id, laboriosam vero esse odit quos.
                            </p>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-8">
                            <Link to='/add' className="btn btn-sm btn-primary">Add Employee</Link>
                        </div>
                        <div className="col-md-4">
                            <input type="search" className="form-control" />
                        </div>
                    </div>

                </section>
                <section>
                  
                    {
                        employees.length > 0 ?
                            <table className="table table-bordered table-striped table-hover text-center" >
                                <thead className="bg-secondary text-white">
                                    <tr>
                                        <th>Employee ID</th>
                                        <th>Employee Name</th>
                                        <th>Employee Salary</th>
                                        <th>Employee Picture</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        employees.map((emp) => {
                                            return (
                                                <tr>
                                                    <td>{emp.eid}</td>
                                                    <td>{emp.ename}</td>
                                                    <td>{emp.esal}</td>
                                                    <td>
                                                        <img src={emp.imgurls} alt="" height={100} width={100} className="img-fluid"/>
                                                    </td>
                                                    <td>
                                                        <Link to={`/find/${emp.id}`}>
                                                        <i className="fa fa-eye fa-2x text-primary"/>
                                                        </Link>
                                                        <Link to={`/edit/${emp.id}`}>
                                                        <i className="ml-3 fa fa-pen fa-2x text-warning"/>
                                                        </Link>
                                                          <i onClick={()=>{del(emp.id)}} className="ml-3 fa fa-trash fa-2x text-danger"/>
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