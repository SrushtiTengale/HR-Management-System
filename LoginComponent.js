import axios from "axios";
import React, { useRef, useState } from "react";
import { Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export const Login=()=>{
    const [message,setMessage]=useState("");
    const txtuser=useRef();
    const txtpass=useRef();
    const navigate=useNavigate();
    const mystyle=useState({"color":"red"})
    const txtemail=useRef("");
    const [adminstatus,setAdminStatus]=useState(true);
    const [userstatus,setUserStatus]=useState(true);
    const CheckLogin=()=>{
        var uname=txtuser.current.value;
        var pass=txtpass.current.value;
        if(uname=="admin" && pass=="admin"){
            localStorage.setItem("user",uname);
                navigate("/admin");
        }
        else{
         setMessage("Invalid user name or password");   
        }
    }
    const CheckUserLogin=()=>{
        var email=txtemail.current.value;
        axios({
            url:'https://gorest.co.in/public/v2/users',
            method:'get',
            contentType:'application/json'
        }).then(e=>{
            var data=e.data;
            data.forEach(function(d,k){
                if(d.email==email){

                    console.log(d)
                    localStorage.setItem("user_id",d.id);
                        navigate("/profile");
                }
                else{
                 setMessage("Invalid email address");   
                }
            })
        })
      
    }
    const ShowAdminLogin=()=>{
        setAdminStatus(false);
        setUserStatus(true);
    }
    
    const ShowUserLogin=()=>{
        setAdminStatus(true);
        setUserStatus(false); 
    }
    return(
        <div>
            <div>
            <Navbar expand="lg" className="bg-body-tertiary">
      <div className="container-fluid">
        <Navbar.Brand href="#">HRMS-Admin Panel</Navbar.Brand>
        
      </div>
    </Navbar>
    <div className="container-fluid">
        <div className="row">
            <div className="col-4">
                 
            </div>
            <div className="col-4">
            <input type="button" value="Admin Login" className="btn btn-primary" onClick={()=>ShowAdminLogin()} />
            &nbsp;
            &nbsp;
            <input type="button" value="User Login" className="btn btn-primary" onClick={()=>ShowUserLogin()} />

                    <div className="card" hidden={adminstatus}>
                        <div className="card-header">
                            <div className="card-title">Admin Login</div>
                        </div>
                        <div className="card-body">
                            <div className="mg-3">
                                <label>User Name</label>
                                <input type="text" ref={txtuser} className="form-control" />
                            </div>
                            <div className="mg-3">
                                <label>Password</label>
                                <input type="password" ref={txtpass} className="form-control"/>
                            </div>

                        </div>
                        <div className="card-footer">
                        <input type="button" value="Login" className="btn btn-primary" onClick={()=>CheckLogin()} />
                        <p style={{mystyle}}>{message}</p>
                        </div>
                    </div>

                    <div className="card" hidden={userstatus}>
                        <div className="card-header">
                            <div className="card-title">User Login</div>
                        </div>
                        <div className="card-body">
                            <div className="mg-3">
                                <label>Email Addres</label>
                                <input type="text" ref={txtemail} className="form-control" />
                            </div>
                             

                        </div>
                        <div className="card-footer">
                            <input type="button" value="Login" className="btn btn-primary" onClick={()=>CheckUserLogin()} />
                        <p style={{mystyle}}>{message}</p>
                        </div>
                    </div>
            </div>

        </div>
    </div> 
            </div>
        </div>
    )
}