import React from "react";
import { NavLink,useHistory } from "react-router-dom";

const Dashboard=()=>{

    const history=useHistory();
    const getLogout=()=>{
        localStorage.removeItem("userInfo");
        history.push("/login")
    };

    return(
        <>
        <div className="container">
            <button onClick={getLogout} className="logout_btn btn btn-danger mt-3">Logout</button>
            <div className="row no-gutters">
                <div className="col-7 mx-auto mt-5">  
                <NavLink exact to="/dashboard/welcome" className="btn btn-secondary px-5 py-3">Welcome</NavLink>
                <NavLink exact to="/dashboard/goodbye" className="btn btn-info ml-5 px-5 py-3 ">Good-Bye</NavLink>
                </div>
            </div>
        </div>
        </>
    )
}
export default Dashboard;