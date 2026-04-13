import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast,{Toaster} from "react-hot-toast";
import axios from 'axios'

function AddEmployee() {

    let navigate = useNavigate()

    const [employee, setEmployee] = useState({
        eid: "",
        ename: "",
        esal: "",
        imgurls: ""
    })

    const [errors, setErrors] = useState({})

    function updateInput(e) {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        })
    }

    // ✅ Validation Function
    function validate() {
        let tempErrors = {}

        if (!employee.eid) {
            tempErrors.eid = "Employee ID is required"
        }

        if (!employee.ename) {
            tempErrors.ename = "Employee name is required"
        } else if (employee.ename.length < 3) {
            tempErrors.ename = "Name must be at least 3 characters"
        }

        if (!employee.esal) {
            tempErrors.esal = "Salary is required"
        } else if (employee.esal <= 0) {
            tempErrors.esal = "Salary must be greater than 0"
        }

        if (!employee.imgurls) {
            tempErrors.imgurls = "Image URL is required"
        } else if (!/^https?:\/\/.+\..+/.test(employee.imgurls)) {
            tempErrors.imgurls = "Enter a valid URL"
        }

        setErrors(tempErrors)
        return Object.keys(tempErrors).length === 0
    }

    function save(e) {
        e.preventDefault()

        if (!validate()) return   // ❌ Stop if errors

        axios.post("http://localhost:8000/employees", employee)
            .then(() => {
                toast.success("Employee Added Successfully",{
                    duration:4000,
                   
                })
                navigate("/")
            })
            .catch((error) => {
                toast.error("Failed to add employee",{
                    duration:1000,
                })
                
            })
    }

    return (
        <React.Fragment>
          
            <div className="container animated zoomIn">
                <div className="row d-flex justify-content-center mt-5">
                    <div className="col-md-5">

                        <div className="card">
                            <div className="card-header bg-secondary text-white text-center">
                                <p className="h2">Add Employee</p>
                            </div>

                            <div className="card-body">
                                <form onSubmit={save}>

                                    {/* ID */}
                                    <div className="mb-3">
                                        <input
                                            type='number'
                                            name="eid"
                                            value={employee.eid}
                                            onChange={updateInput}
                                            placeholder='Employee ID'
                                            className='form-control'
                                        />
                                        {errors.eid && <small className="text-danger">{errors.eid}</small>}
                                    </div>

                                    {/* NAME */}
                                    <div className="mb-3">
                                        <input
                                            type='text'
                                            name="ename"
                                            value={employee.ename}
                                            onChange={updateInput}
                                            placeholder='Employee Name'
                                            className='form-control'
                                        />
                                        {errors.ename && <small className="text-danger">{errors.ename}</small>}
                                    </div>

                                    {/* SALARY */}
                                    <div className="mb-3">
                                        <input
                                            type='number'
                                            name="esal"
                                            value={employee.esal}
                                            onChange={updateInput}
                                            placeholder='Employee Salary'
                                            className='form-control'
                                        />
                                        {errors.esal && <small className="text-danger">{errors.esal}</small>}
                                    </div>

                                    {/* IMAGE */}
                                    <div className="mb-3">
                                        <input
                                            type='text'
                                            name="imgurls"
                                            value={employee.imgurls}
                                            onChange={updateInput}
                                            placeholder='Employee Image Link'
                                            className='form-control'
                                        />
                                        {errors.imgurls && <small className="text-danger">{errors.imgurls}</small>}
                                    </div>

                                    <button className='btn btn-sm btn-outline-secondary'>
                                        Register
                                    </button>

                                    <Link to='/' className='btn btn-sm btn-outline-warning float-right'>
                                        Back
                                    </Link>

                                </form>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
        </React.Fragment>
    )
}

export default AddEmployee