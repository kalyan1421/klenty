import axios from "axios";
import { message } from "antd";



export const userLogin=(reqObj)=>async dispatch=>{
    dispatch({type: "LOADING",payload:true})

    try{
        const respose = await axios.post('/api/users/login',reqObj)
        localStorage.setItem('user' ,JSON.stringify(respose.data))
        message.success("Login Succes")
        dispatch({type:'LOADING',payload:false})
        setTimeout(()=>{
            window.location.href="/"
        },500);
    }
    catch(error){
        console.log(error)
        message.error("Something went worng")
        dispatch({type:'LOADING',payload:false})
    }
}
export const userRegister=(reqObj)=>async dispatch=>{
    dispatch({type: "LOADING",payload:true})

    try{
        const respose = await axios.post('/api/users/register',reqObj)
        message.success("Registration successful")
        setTimeout(()=>{
    
            window.location.href="/login"
        },500);
       
        
        dispatch({type:'LOADING',payload:true})
    }
    catch(error){
        console.log(error)
        message.error("Something went worng")
        dispatch({type:'LOADING',payload:false})
    }
}