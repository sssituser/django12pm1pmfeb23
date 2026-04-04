import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'

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
        <div className="container animated jello mt-5">
          
            <div className="row d-flex justify-content-center">
              <div className="col-md-5">
                <div className="card ">
                  <div className="card-header bg-primary">
                    <p className="h2 text-white text-center">Employee Infomration</p>
                  </div>
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
                        <img src={employee.imgurls} height={50} width={200} className='img-fluid img-thumbnail'/>
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer">
                    <Link to={`/edit/${employee.id}`} className='btn btn-sm btn-outline-primary'>Edit
                    </Link>
                     <Link to={`/`} className='btn btn-sm btn-outline-amber float-right'>Back
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default FindEmployee