import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Modal,Button } from "react-bootstrap";
export const User=()=>{
    const [users,setUsers]=useState([]);
    const txtname=useRef();
    const txtgender=useRef();
    const txtemail=useRef();
    const txtstatus=useRef();
    const [status,setStatus]=useState(false);
    useEffect(function(){
        GetUsers();
    },[]);
    
    const GetUsers=()=>{
        axios({
            url:'https://gorest.co.in/public/v2/users',
            method:'get',
            contentType:'application/json'
        }).then(e=>{
            console.log(e.data)
            setUsers(e.data);
        })
    }
    
const AddUser=()=>{
    setStatus(true)
}

const SubmitUser=()=>{
    var name=txtname.current.value;
    var gender=txtgender.current.value;
    var email=txtemail.current.value;
    var status=txtstatus.current.value;
    var st={"name":name,"email":email,"gender":gender,"status":status};
    axios({
        url:'https://gorest.co.in/public/v2/users',
        method:'post',
        data:st,
        headers:{
            'Authorization':'Bearer f51f4873131d0c51fba887e934d0f4e6f0a7243a8e8c42e8b7f870bc83bc1f95'
        },
        contentType:'application/json'
    }).then(e=>{
       alert("User Added Successfully");
        ClearData();
        GetUsers();
    })
}

const ClearData=()=>{
    txtname.current.value="";
    txtemail.current.value="";
    txtgender.current.value="";
    txtstatus.current.value="";
    setStatus(false);
}
    return(
        <div>
            <div>
            <Modal show={status}>
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="mg-3">
                <label>User Name</label>
                <input type="text" ref={txtname} className="form-control"/>
            </div>
            <div className="mg-3">
                <label>Gender</label>
                <input type="text" ref={txtgender} className="form-control"/>
            </div>
            <div className="mg-3">
                <label>Email Address</label>
                <input type="text" ref={txtemail} className="form-control"/>
            </div>
            <div className="mg-3">
                <label>Status</label>
                <input type="text" ref={txtstatus} className="form-control"/>
            </div>

        </Modal.Body>
        <Modal.Footer>
        
          <Button variant="primary" onClick={()=>SubmitUser()}>
           Submit
          </Button>
          <Button variant="secondary"  onClick={()=>ClearData()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
              <table className="table">
                    <thead>
                        <tr>
                            <td><input type="button" value="Add User" onClick={()=>AddUser()} className="btn btn-primary"/></td>
                            <td>  <h2>All User</h2></td>
                        </tr>
                    </thead>
              </table>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>User Name</th>
                            <th>Gender</th>
                            <th>Email Address</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((d,k)=>(
                                <tr key={k}>
                                    <td>{d.id}</td>
                                    <td>{d.name}</td>
                                    <td>{d.gender}</td>
                                    <td>{d.email}</td>
                                    <td>{d.status}</td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}