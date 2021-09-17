import React, { useState } from "react";
import { NavLink ,useHistory } from "react-router-dom";

const Login=()=>{

    const[User,setUser]=useState({
        mobile:"",
        password:""
    });

    const history = useHistory()
    const getInput=(event)=>{
        const{name,value}=event.target;
        setUser({...User,[name]:value})
    };

    const getSubmit=(event)=>{
        event.preventDefault();
        let data = JSON.parse(localStorage.getItem("userInfo"));
        if(data===null || data===undefined){
            window.alert('invalid user details')
        }else{
            if(data.mobile === User.mobile && data.password=== User.password){
                history.push("/dashboard")
            }
            else{
                window.alert('invalid user details')
            }
        }
    };

    return (
        <>
         <div className="container login_page">
            <div className="row mt-5">
                <div className="col-4 shadow mx-auto my-4 login">
                    <h2 className="pt-4 px-3 font-weight-bold">Create Better together</h2>
                    <h4 className="pt-3 px-3">Join Our Community</h4>                  
                    <form onSubmit={getSubmit}>
                    <h2 className="pt-3 px-3">Login</h2> 
                    <div className="mb-4 mx-4">                   
                      <input type="number" className="form-control my-4 w-100 login_mobile" placeholder="Enter Your Mobile" required
                      value={User.mobile} name="mobile"  onChange={getInput}/>
                      <input type="password" className="form-control mb-2 w-100" id="password_field" placeholder="Enter Your Password" required
                       value={User.password} name="password" onChange={getInput}/>
                      <button type="submit" className="btn btn-primary mt-4 w-100">Log In</button>
                      <p className="font-weight-bold pt-1">Forgot password?</p>
                    </div>
                    <div className="mt-3 px-4 pb-3 text-center">
                      <p>Don't have an account? 
                      <NavLink className="pl-1 text-decoration-none" exact to="/">Sign up</NavLink></p>
                      </div>
                    
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
export default Login;