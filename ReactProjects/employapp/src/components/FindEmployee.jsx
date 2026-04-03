import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function FindEmployee() {
  let[employee,setEmployee]=useState({})
  let {id} = useParams()
  function getemployeebyid(){
    axios.get(`http://localhost:9000/employees/${id}`)
    .then((res)=>{
      setEmployee(res.data)
    })
    .catch((error)=>alert(error))
  }
  useEffect(()=>{
    getemployeebyid()
  },[])
  return (
    <React.Fragment>
        <div className="container">
            <p className="h1 text-center">FindEmployee Info</p>
            <div className="row d-flex justify-content-center">
              <div className="col-md-5">
                <div className="card">
                  <div className="card-body">
                    <ul  className='list-group'>
                      <li className='list-group-item'>
                        Employee ID : {employee.eid}
                      </li>
                       <li className='list-group-item'>
                        Employee Name : {employee.ename}
                      </li>
                       <li className='list-group-item'>
                        Employee Salary : {employee.esal}
                      </li>
                      <li className='list-group-item'>
                        <img src={employee.imgurls} height={100} width={100} className='img-fluid img=img-thumbnail'/>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default FindEmployee