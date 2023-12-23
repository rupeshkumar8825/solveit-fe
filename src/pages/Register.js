// this is registration page for solve it 
import React from "react";
import Navigation from "../components/Navigation";
import 'bootstrap/dist/css/bootstrap.css';

import { useState } from "react";
import axios from "axios";
// defining the register component 


// DEFINING THE STYLE FOR THIS CONTAINER ELEMENT FOR MAKING IT TO APPEAR IN MIDDLE 
const container1 = {
    "marginTop" : "10%",
    "width" : "50%"
};

const Register = ()=>{
    console.log("this is register page");

    // DEFINING THE STATES 
    const [username, setUsername] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");


    // DEFINING THE DIFFERENT HANDDLERS FOR THIS PURPOWE 
    const handle_on_change_firstname = (e)=>{
        setFirstname(e.target.value);
    }

    const handle_on_change_lastname = (e)=>{
        setLastname(e.target.value);
    }

    const handle_on_change_email = (e)=>{
        setEmail(e.target.value);
    }

    const handle_on_change_phone_number = (e)=>{
        setPhone(e.target.value);
    }

    const handle_on_change_password = (e)=>{
        setPassword(e.target.value);
    }

    const handle_on_change_confirm_password = (e)=>{
        setConfirmpassword(e.target.value);
    }


    const handle_on_change_username = (e)=>{
        setUsername(e.target.value);
    }

    // DEFINIGNG THE HANDLERS FOR HANDLING THE ON SUBMIT EVENT 
    const handle_on_submit = async ()=>{
        
        // DEFINING THE DATA TO BE SENT TO THE BACKEND 
        const data = {
            username : username,
            firstname : firstname,
            lastname : lastname,
            email : email,
            phone : phone,
            password : password, 
            confirmpassword : confirmpassword
        }
        const URL = "http://127.0.0.1:8000/register";

        // SENDING THE POST REQUEST TO THE BACKEND FOR THIS PURPOSE 
        const response = await axios.post(URL, data);
        console.log("The response from the backend is as follows\n");
        console.log(response);

        // SAY EVERYTHING WENT FINE 
        return
        // console.log('The submission is successfully Done. From here the ')
    }
    
    return (
        <>
            
            {/* <Navigation></Navigation> */}
            <div className="container" style={container1}>

                <form>
                    <h3>Register Here</h3>
                    <div className="mb-3">
                    <label>Username</label>
                    <input
                        type="username"
                        className="form-control"
                        placeholder="Enter Username"
                        onChange={handle_on_change_username}
                    />
                    
                    </div>

                    <div className="mb-3">
                    <label>First Name</label>
                    <input
                        type="firstname"
                        className="form-control"
                        placeholder="Enter First name"
                        onChange={handle_on_change_firstname}
                    />
                    
                    </div>

                    <div className="mb-3">
                    <label>Last Name</label>
                    <input
                        type="firstname"
                        className="form-control"
                        placeholder="Enter Last name"
                        onChange={handle_on_change_lastname}
                    />
                    
                    </div>

                    <div className="mb-3">
                    <label>Email</label> 
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={handle_on_change_email}
                    />
                    </div>

                    <div className="mb-3">
                    <label>Phone Number</label> 
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Enter phonenumber"
                        onChange={handle_on_change_phone_number}
                    />
                    </div>


                    <div className="mb-3">
                    <label>Password</label> 
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        onChange={handle_on_change_password}
                    />
                    </div>

                    <div className="mb-3">
                    <label>Confirm Password</label> 
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter confirm password"
                        onChange={handle_on_change_confirm_password}
                    />
                    </div>

                    {/* <div className="mb-3">
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
                    </div> */}
                    <div className="d-grid">
                    <button  className="btn btn-primary" onClick={handle_on_submit}>
                        Submit
                    </button>
                    </div>
                    <p className="forgot-password text-right">
                    Signin <a href="/signin">Signin</a>
                    </p>
                </form>
            </div>

        </>
    )
}

export default Register;