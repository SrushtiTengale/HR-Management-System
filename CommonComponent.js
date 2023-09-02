import React from "react";
import axios from "axios";
import { Admin } from "./Admin/AdminComponent";
import { Dashboard } from "./Admin/DashboardComponent";
import { User } from "./Admin/UserComponent";
import { Profile } from "./User/ProfileComponent";
import { Login } from "./LoginComponent";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
export const Common=()=>{

    return(
        <div>
            <div>
                <Router>
                    <Routes>
                        <Route path="admin" element={<Admin/>}>
                            <Route path="dashboard" element={<Dashboard/>}/>
                            <Route path="user" element={<User/>}/>
                        </Route>
                        <Route path="profile" element={<Profile/>}/>
                        <Route path="" element={<Login/>}/>
                
                    </Routes>
                </Router>
            </div>
        </div>
    )
}