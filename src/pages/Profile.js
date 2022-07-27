// THIS SECTION I WILL SHOW THE PROFILE OF THE PARTICULAR USER AND I WILL SHOW THE LIST OF SAVED AND UPVOTED LIST OF THE IDEAS 

import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";

import { userNameAction } from "../redux/action/userNameAction";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const container1 = {
    "marginTop" : "10%",
    "width" : "50%"
};

// DEFINING THE COMPONENT FOR THIS PURPOSE 
const Profile = ()=>{
    
    const userName = useSelector((state) => state.userNameReducer.username);
    const [username, setUsername] = useState("");
    const dispatch = useDispatch();
    console.log("The user name is ", userName);

    // DEFINING THE GET AUTHENTICATION FUNCTION TO AUTHENTICATE AND AT THE SAME TIME TO FETCH ALL USERS AND IDEAS AND STORE IT IN THE REDUX STORE 
    const getAuthentication = async ()=>{
        const url = "http://127.0.0.1:8000/";
        const headers = {
            'Content-Type' : 'application/json',
            "Access-Control-Allow-Origin" : "*",
            "withCredentials": true
            
        }
        
		const response = await axios.get(url, headers);
		if(response.data.status == 200)
		{
            let user_name = response.data.curr_user.username;
            setUsername(user_name);
            dispatch(userNameAction(user_name));

		}
		else if(response.data.status == 401)
		{
            console.log("No user is signed in yet\n");
		}
    }

    // WE HAVE TO CALL THE USEEFFECT AND GET THE DETAILS OF THE USERS FOR THIS PURPOSE 
    useEffect(() => {
        getAuthentication();
        
    }, []);
    return(
        <>
        
            <h1>Hi this is profile section of the user {userName}</h1>
            <div className="container" style={container1}>

                    <h3>Register Here</h3>
                    <div className="mb-3">
                        <p>Username</p>
                        <div className="container" style={{"backgroundColor" : "white"}}>
                            <p>{userName}</p>

                        </div>
                    
                    </div>

                    <div className="mb-3">
                        <p>First Name</p>
                        <div className="container" style={{"backgroundColor" : "white"}}>
                            <p>{userName}</p>

                        </div>
                    </div>


                    <div className="mb-3">
                        <p>Last Name</p>
                        <div className="container" style={{"backgroundColor" : "white"}}>
                            <p>{userName}</p>

                        </div>
                    </div>

                    <div className="mb-3">
                        <p>Email</p>
                        <div className="container" style={{"backgroundColor" : "white"}}>
                            <p>{userName}</p>

                        </div>
                    </div>

                    <div className="mb-3">
                        <p>Phone Number</p>
                        <div className="container" style={{"backgroundColor" : "white"}}>
                            <p>{userName}</p>

                        </div>
                    </div>

                    <div className="mb-3">
                        <p>Upvoted</p>
                        <div className="container" style={{"backgroundColor" : "white"}}>
                            <p>{userName}</p>

                        </div>
                    </div>

                    <div className="mb-3">
                        <p>Saved Ideas</p>
                        <div className="container" style={{"backgroundColor" : "white"}}>
                            <p>{userName}</p>

                        </div>
                    </div>

            </div>
        </>
    )
}

// SAY EVERYTHING WENT FINE 
export default Profile;