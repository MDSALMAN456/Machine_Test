import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";

const Signup=()=>{

    const[User,setUser]=useState({
        name:"",
        mobile:"",
        password:"",
        cpassword:""
    });

    const history = useHistory();
    const getInput=(event)=>{
        const{name,value}=event.target;
        setUser({...User,[name]:value})
    };

    const getSubmit=(event)=>{
       event.preventDefault();
        if(User.mobile.length !==10){
        window.alert("Mobile Number must be 10 digit")
       }
        else if(User.password !== User.cpassword){
           window.alert("password does not match")
       }
       else{
           localStorage.setItem("userInfo",JSON.stringify(User));
           history.push("/login");     
       }
    };

    return (
        <>
        <div className="container signup_wrapper">
            <div className="row">
                <div className="col-4 shadow mx-auto mt-4 signup">
                    <h2 className="pt-4 px-3 font-weight-bold">Create Better together</h2>
                    <h4 className="pt-1 px-3">Join Our Community</h4>                  
                    <form onSubmit={getSubmit}>
                    <h2 className="pt-2 px-3 font-weight-bold">SignUp</h2> 
                    <div className="mx-4">                   
                      <input type="text"  className="form-control mt-2 mb-3" placeholder="Enter Your Name" value={User.name} name="name"  onChange={getInput} required/>
                      <input type="number"  className="form-control mb-3" placeholder="Enter Your Mobile" value={User.mobile} name="mobile" onChange={getInput} required/>
                      <input type="password"  className="form-control mb-3" placeholder="Enter Your Password" value={User.password} name="password" onChange={getInput} required/>
                      <input type="password"  className="form-control" placeholder="Confirm Your Password" value={User.cpassword} name="cpassword" onChange={getInput} required/>
                      <button type="submit"  className="btn btn-primary mt-4 w-100">Sign Up</button>
                      <p className="pt-2 text-center">By signing up, you agree to our <strong>Terms</strong>,
                       <strong> Data Policy</strong> and <strong>Privacy Policy</strong>.</p>
                    </div>
                    <div className="mt-3 px-4 text-center">
                      <p className="pb-2">Already have an account?
                      <NavLink className="pl-1 text-decoration-none" exact to="/login"> Log In</NavLink> </p>
                      </div>
                    
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
export default Signup;