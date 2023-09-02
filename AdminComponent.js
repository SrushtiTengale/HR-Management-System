import React, { useEffect, useState } from "react";
import axios from "axios";
import { Dashboard } from "./DashboardComponent";
import { User } from "./UserComponent";
import {Link, Outlet, useNavigate} from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
export const Admin=()=>{
    const [divstyle]=useState({"minHeight":"500px","width":"100%"})
    const [data,setData]=useState("");
    const navigate=useNavigate();
    useEffect(function(){

        var name=localStorage.getItem("user");
        setData("Hello "+name);

    },[]);
    const Logout=()=>{
        localStorage.removeItem("user");
        navigate("/");
    }
    return(
        <div>
         
            
            <div>
            <Navbar expand="lg" className="bg-body-tertiary">
      <div className="container-fluid">
        <Navbar.Brand href="#">HRMS-Admin Panel</Navbar.Brand>
        <Nav.Link href="#">{data}</Nav.Link>
       <input type="button" value="Logout" onClick={()=>Logout()}/>
      </div>
    </Navbar>
    <div className="container-fluid">
        <div className="row">
            <div className="col-3">
                <ul className="list-group">
                <li className="list-group-item"><Link to="dashboard">Dashboard</Link></li>
                    <li className="list-group-item"><Link to="user">User</Link></li>
                </ul>
            </div>
            <div className="col-9">
                <div  style={divstyle}>
                    <Outlet></Outlet>
                </div>
                <hr/>
                <div>
                <p>@Copywrite <a href="https://www.abc.com">Abc Company</a></p>
            </div>
            </div>
          
        </div>
    </div>
            </div>
          
 
        </div>
    )
}