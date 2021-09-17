import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

const Protect = ({component})=>{

    const history = useHistory();

    const userDetails = ()=>{
        let user = JSON.parse(localStorage.getItem("userInfo"));
        if(user===null || user===undefined){
            history.push("/login")
        }
    }

    useEffect(()=>{
        userDetails()
    },[]);

    return(
        <>
        {
            component()
        }
        </>
    )
}

export default Protect;