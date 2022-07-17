// this is signin page 
import React from "react";
import Navigation from "../components/Navigation";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { isLoggedInAction } from "../redux/action/loggedin";
import { userNameAction } from "../redux/action/userNameAction";

// DEFINING THE STYLE FOR THIS CONTAINER ELEMENT FOR MAKING IT TO APPEAR IN MIDDLE 
const container1 = {
    "marginTop" : "10%",
    "width" : "50%"
};


const Signin = ()=>{
    // console.log("this is signin page");
    // const history = useHistory();
    // DEFINING THE STATES FOR THIS PURPOSE 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const isLoggedIn = 
    const dispatch = useDispatch();
    // DEFINING THE HANDLERS FOR THIS PURPOSE 
    const nav = useNavigate();
    const handle_email_change = (e)=>{
        // console.log(e.target.value);
        setEmail(e.target.value)
    }

    const handle_password_change = (e)=>{
        // console.log(e.target.value);
        setPassword(e.target.value);
    }

    const handle_on_submit = async ()=>{
        // e.preventDefault();
        console.log("the email is ", email);
        console.log("the password is ", password);

        // DEFINING THE DATA TO BE SENT TO BACKEND FOR SIGNIN PURPOSE 
        const data = {  
            email : email,
            password : password
        }
        const URL = "http://127.0.0.1:8000/signin";
        const headers = {
            'Content-Type' : 'application/json',
            "Access-Control-Allow-Origin" : "*",
            "withCredentials": true
        }


        let response = await axios.post(URL, data, headers);
        console.log("The response from the backend is as follows ");
        // response = response.data;
        console.log(response);
        console.log("done");
        if(response.data.status == 200)
        {
            const curr_user = response.data.curr_user;
            // STORE THE USERNAME HERE 
            const user_name = curr_user.firstname + curr_user.lastname;
            // HERE WE HAVE TO DISPATCH THE ACTION TO STORE THE VALUE OF CURRENT USER 
            dispatch(userNameAction(user_name));


            nav("/");
        }
        else
        {
            console.log("The user is not authenticated completely\n");
            nav("/signin");
        }
        // if(response === 1)
        // {
        //     dispatch(isLoggedInAction(true));
        //     // history.push("/");
        // }

        // console.log("From here the backend will handle the signin part\n");

        // say everything went fine 
        return;
        
    }

    // JUST AFTER RENDERING THIS 


    return (
        <>
            {/* <Navigation></Navigation> */}
            <div className="container" style={container1}>

                <div>
                    <h3>Sign In</h3>
                    <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={handle_email_change}
                    />
                    </div>
                    <div className="mb-3">
                    <label>Password</label> 
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        onChange={handle_password_change}
                    />
                    </div>
                    <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                        Remember me
                        </label>
                    </div>
                    </div>
                    <div className="d-grid">
                    <button  className="btn btn-primary" onClick={handle_on_submit} >
                        Submit
                    </button>
                    </div>
                    <p className="forgot-password text-right">
                    Not Registered <a href="/register">Registere Here</a>
                    </p>
                </div>
            </div>

        </>
    )
}

// say everything went fine 
export default Signin;