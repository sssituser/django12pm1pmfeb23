import React from 'react'
import { Link } from 'react-router-dom'
function AddEmployee() {
  return (
    <React.Fragment>
        <div className="container">
           <div className="row d-flex justify-content-center mt-5">
            <div className="col-md-5">
                <div className="card">
                    <div className="card-header bg-secondary text-white text-center">
                            <p className="h2">Add Employee</p>
                    </div>
                    <div className="card-body">
                        <form action="" >
                                <div className="form-group">
                                    <input type='number' placeholder='Employee ID' className='form-control'/>
                                </div>
                                <div className="form-group">
                                    <input type='text' placeholder='Employee Name' className='form-control'/>
                                </div>
                                <div className="form-group">
                                    <input type='number' placeholder='Employee Salary' className='form-control'/>
                                </div>
                                <div className="form-group">
                                    <input type='text' placeholder='Employee Image Link' className='form-control'/>
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