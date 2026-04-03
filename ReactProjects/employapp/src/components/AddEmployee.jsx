import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'

function AddEmployee() {
    
    let navigate = useNavigate()
    
    const[employee,setEmployee]=useState({
        eid:"",
        ename:"",
        esal : "",
        imgurls:""

    })
    function updateInput(event){
       setEmployee(
           {
             ...employee,
            [event.target.name]:event.target.value
           }
        )
    }
    function save(event){
       
        event.preventDefault()
       
        axios.post("http://localhost:9000/employees",employee)
        .then(()=>{
            alert("Employee Added Successfully.....")
            navigate("/")
        })
        .catch((error)=>alert(error))
    }
  return (
    <React.Fragment>
        <div className="container">
            <pre>{JSON.stringify(employee)}</pre>
           <div className="row d-flex justify-content-center mt-5">
            <div className="col-md-5">
                <div className="card">
                    <div className="card-header bg-secondary text-white text-center">
                            <p className="h2">Add Employee</p>
                    </div>
                    <div className="card-body">
                        <form action="" onSubmit={save} >
                                <div className="form-group">
                                    <input type='number' onChange={updateInput} name="eid"  value={employee.eid}   placeholder='Employee ID'  className='form-control'/>
                                </div>
                                <div className="form-group">
                                    <input type='text' onChange={updateInput} name="ename"   value={employee.ename} placeholder='Employee Name'  className='form-control'/>
                                </div>
                                <div className="form-group">
                                    <input type='number'onChange={updateInput} name="esal"   value={employee.esal} placeholder='Employee Salary'  className='form-control'/>
                                </div>
                                <div className="form-group">
                                    <input type='text' onChange={updateInput} name="imgurls" value={employee.imgurls} placeholder='Employee Image Link'  className='form-control'/>
                                </div>
                                <button className='btn btn-sm btn-outline-secondary'>Register</button>
                                <Link to='/' className='btn btn-sm btn-outline-amber float-right'>Back</Link>
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