import React from "react";
import {Routes,Route} from 'react-router-dom'
import Employees from "./components/Employees";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import FindEmployee from "./components/FindEmployee";
import { Toaster } from "react-hot-toast";

export default function App(){
    return(
        <React.Fragment>
            <div className="container">
                  <Toaster/>
               <Routes>
                    <Route path="/" element={<Employees/>}/>
                    <Route path="/add" element={<AddEmployee/>}/>
                    <Route path="/edit/:id" element={<EditEmployee/>}/>
                    <Route path="/find/:id" element={<FindEmployee/>}/>
               </Routes>
            </div>
        </React.Fragment>
    )
}
