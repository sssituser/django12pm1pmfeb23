import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,Link, useNavigate } from 'react-router-dom'

function EditEmployee() {
  let navigate  = useNavigate()
  let {id} = useParams()
  let[employee,setEmployee]=useState({})
  function findEmployeeById(){
    axios.get(`http://localhost:9000/employees/${id}`)
    .then((res)=>setEmployee(res.data))
    .catch((error)=>alert(error))
  }
  function updateEmployee(event){
    event.preventDefault()
    axios.put(`http://localhost:9000/employees/${id}`,employee)
    .then(()=>{
      alert("Employee Updated")
       navigate('/')
    })
    .catch((error)=>alert(error))
  }
  function updateInput(event){
    setEmployee({
      ...employee,
      [event.target.name]:event.target.value
    })
 
  }
  useEffect(()=>{
    findEmployeeById()
  },[id])
  return (
    <React.Fragment>
        <div className="container mt-5">
        
          <div className="row d-flex justify-content-center animated zoomIn">
            <div className="col-md-10">
              <div className="card">
                <div className="card-header text-center bg-secondary text-white">
                      <p className="h1">Edit Employee</p>
                </div>
                <div className="card-body">
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-4">
                        <form action="" onSubmit={updateEmployee}>
                    <div className="form-group">
                      <input type="number" name="eid" value={employee.eid} className='form-control' placeholder='EmployeeID'/>
                    </div>
                    <div className="form-group">
                      <input type="text" onChange={updateInput} name="ename" value={employee.ename} className='form-control' placeholder='Employee Name'/>
                    </div>
                    <div className="form-group">
                      <input type="number" onChange={updateInput} name="esal" value={employee.esal} className='form-control' placeholder='Employee Salary'/>
                    </div>
                      <div className="form-group">
                      <input type="text" onChange={updateInput} name="imgurls" value={employee.imgurls} className='form-control' placeholder='Employee Image Url'/>
                    </div>
                    <button className='btn btn-sm btn-outline-primary'>Save</button>
                    <Link to='/' className='btn btn-sm btn-outline-warning'> Back
                    </Link>
                  </form>
                    </div>
                    <div className="col-md-6">
                      <img src={employee.imgurls} style={{width:400,height:200}} alt="" className='img-fluid img-thumbnail' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </React.Fragment>
  )
}

export default EditEmployee