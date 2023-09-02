import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Profile=()=>{
    const [user,setUser]=useState({});
    const navigate=useNavigate();

    useEffect(function(){

        getUser();
    },[])
    const getUser=()=>{

        var id=localStorage.getItem("user_id");
        axios({
            url:'https://gorest.co.in/public/v2/users/'+id,
            method:'get',
            contentType:'application/json'
        }).then(e=>{
            setUser(e.data)
        })
    }
    const Logout=()=>{
        localStorage.removeItem("user_id");
        navigate("/");
    }
    return(
        <div>
            <div className="container-fluid">
       <input type="button" value="Logout" onClick={()=>Logout()}/>

                <h2>Profile Component</h2>
                <table className="table table-bordered">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>User Id:</td>
                            <td>{user.id}</td>
                        </tr>
                        <tr>
                            <td>User Name:</td>
                            <td>{user.name}</td>
                        </tr>
                        <tr>
                            <td>Gender:</td>
                            <td>{user.gender}</td>
                        </tr>
                        <tr>
                            <td>Email Address:</td>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <td>Status:</td>
                            <td>{user.status}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}