// THIS SECTION I WILL SHOW THE PROFILE OF THE PARTICULAR USER AND I WILL SHOW THE LIST OF SAVED AND UPVOTED LIST OF THE IDEAS 

import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";

import { userNameAction } from "../redux/action/userNameAction";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "../css/Home.css"
const container1 = {
    "marginTop" : "10%",
    "width" : "50%"
};


// import { useSelector } from "react-redux";

const style1 = {
    "width" : "18rem"
}

// DEFINING THE COMPONENT FOR THIS PURPOSE 
const Profile = ()=>{
    
    // const userName = useSelector((state) => state.userNameReducer.username);
    const [username, setUsername] = useState("");
    const [userID, setuserID] = useState("");
    const dispatch = useDispatch();
    console.log("The user name is ", username);

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
            console.log(response.data);
            setUsername(user_name);
            setuserID(response.data.curr_user._id);
            dispatch(userNameAction(user_name));

		}
		else if(response.data.status == 401)
		{
            console.log("No user is signed in yet\n");
		}
    }


    // DEFINING THE FUNCTION TO FETCH THE DETAILS OF THE CURRENT SIGNED IN USER 
    const fetchUsersDetails = ()=>{
        // WE HAVE TO MAKE THE POST REQUEST THE SERVER TO GET THE DETAILS OF THE USER CURRENTLY SINGNED AND THEN WE WILL DISPLAY THE DETAILS TO THE FINAL USER FOR THIS PURPOSE 
        console.log("The user id whose info we want is as follows\n");
        console.log(userID);

    }
    // WE HAVE TO CALL THE USEEFFECT AND GET THE DETAILS OF THE USERS FOR THIS PURPOSE 
    useEffect(() => {
        getAuthentication();
        let timeID = null;
        timeID = setTimeout(() => {
            console.log("came inside the useeffect if else statement for this purpose\n");
            console.log("called the fetchUsersDetails function ");
            fetchUsersDetails()
        }, 2000);

        return ()=>{
            clearTimeout(timeID);
        }
        // if(username)
        // {
            // fetchUsersDetails();

        // }
        
    }, []);
    return(
        <>
        
            <h1>Hi this is profile section of the user {username}</h1>

            <div class="container rounded bg-white mt-5 mb-5">
                <div class="row">
                    <div class="col-md-3 border-right">
                        <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span class="font-weight-bold">Edogaru</span><span class="text-black-50">edogaru@mail.com.my</span><span> </span></div>
                    </div>
                    <div class="col-md-5 border-right">
                        <div class="p-3 py-5">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h4 class="text-right">Profile Settings</h4>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-6">
                                    {/* <label class="labels">Name = </label> */}
                                    <p>Name = John Kumar</p>
                                    {/* <p>John</p> */}
                                    </div>
                                <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" value="" placeholder="surname"/></div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder="enter phone number" value=""/></div>
                                <div class="col-md-12"><label class="labels">Address Line 1</label><input type="text" class="form-control" placeholder="enter address line 1" value=""/></div>
                                <div class="col-md-12"><label class="labels">Address Line 2</label><input type="text" class="form-control" placeholder="enter address line 2" value=""/></div>
                                <div class="col-md-12"><label class="labels">Postcode</label><input type="text" class="form-control" placeholder="enter address line 2" value=""/></div>
                                <div class="col-md-12"><label class="labels">State</label><input type="text" class="form-control" placeholder="enter address line 2" value=""/></div>
                                <div class="col-md-12"><label class="labels">Area</label><input type="text" class="form-control" placeholder="enter address line 2" value=""/></div>
                                <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="enter email id" value=""/></div>
                                <div class="col-md-12"><label class="labels">Education</label><input type="text" class="form-control" placeholder="education" value=""/></div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value=""/></div>
                                <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state"/></div>
                            </div>
                            <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="p-3 py-5">
                            <div class="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Experience</span></div><br/>
                            <div class="col-md-12">
                                <label class="labels">Experience in Designing</label>
                                <input type="text" class="form-control" placeholder="experience" value=""/>
                            
                            </div> <br/>
                            <div class="col-md-12">
                                <label class="labels">Additional Details</label>
                                <input type="text" class="form-control" placeholder="additional details" value=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" id="home">
                {/* <PopularPosts></PopularPosts> */}
                {/* <Category></Category> */}

            <div className="card">
                <div className="container" id="profile">
                    <div className="container">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        </svg>
                        {/* <div className="container"> */}
                            <p>Someone</p>
                        {/* <div className="container"> */}
                            <h6>Posted by someone 5 hours ago</h6>

                        {/* </div> */}
                    </div>
                    {/* <div className="container" id="seedetails" > */}
                    <button type="button" value="1"  class="btn btn-primary">See Details</button>
                   

                </div>
                
                <div className="container" id="idea">
                    <h3>someidea</h3>

                </div>
                <div className="container">
                    {/* <p>This is details of the Idea in short. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident unde dolores, assumenda itaque voluptatum, cumque sint maxime accusamus, tempora incidunt atque reprehenderit ducimus iusto nostrum quo ex ratione totam suscipit.
                    Autem repudiandae vitae aliquid reiciendis maiores, assumenda quibusdam deleniti nemo accusantium aliquam quisquam quos eum ipsa aspernatur perferendis, ut officiis commodi, beatae nisi! Dolorum sapiente ut, sunt itaque molestias ab?
                    
                    At rerum inventore sed delectus, laboriosam repellendus nisi magnam officiis quae, error modi! Optio, numquam corporis dolores iste molestias rerum sint, non id ad voluptatibus libero labore nesciunt deserunt laboriosam.</p> */}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis esse quas atque iusto dolore hic perspiciatis vel voluptates neque molestiae, sequi modi tenetur, natus expedita officiis eos mollitia molestias eius quis explicabo! Doloremque, saepe esse velit, distinctio explicabo asperiores eveniet recusandae dolores sed ea, adipisci mollitia debitis facilis architecto deleniti ipsa voluptatum dolore porro sint minima expedita impedit quos beatae fugit. Corporis id incidunt quos vel nisi repudiandae quo qui est accusamus iste sit enim, illo harum expedita dolorum eos deleniti dolorem dolore ut temporibus. Perferendis, nostrum eveniet amet enim doloremque, suscipit, dolor architecto minus voluptates ea veritatis reiciendis ab.</p>


                </div>
                <div className="container" id="popularposts">

                   
                
                
                        <div className="row" >
                        <div className="container" >
                            
                                <div className="container">
                                    <img src= "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" className="card-img-top" alt="Image"/>

                                </div>
                                <div className="card-body" id="footer">
                                    <div className="container d-flex justify-content-space" id="upvote">
                                        <p>2</p>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                                        </svg>
                                        {/* <i class="icon icon-upvote _2Jxk822qXs4DaXwsN7yyHA"></i>        */}
                                        {/* {alreadyUpvoted ? <p style={{"color" : "blue"}}>Upvoted</p> : <p>Upvote</p>} */}
                                        <p>Upvote</p>

                                    </div>
                                    <div className="container d-flex justify-content-space" id="share">
                                        
                                        {/* <p>{props.details.shares}</p> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                                        <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                                        </svg>
                                        
                                        <p>Share</p>

                                    </div>

                                    <div className="container d-flex justify-content-space" id="save" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmarks" viewBox="0 0 16 16">
                                            <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z"/>
                                            <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"/>
                                        </svg>
                                        {/* {alreadySaved ? <p style={{"color" : "blue"}}>Saved</p> : <p>Save</p>} */}
                                        <p>Save</p>
                                        
                                        

                                    </div>
                                    <div className="container d-flex justify-content-space" id="comment">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                                        <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                                        </svg>
                                        
                                        <p>Comment</p>

                                    </div>
                                    

                                        {/* <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

            
            {/* <div className="card" style="width: 18rem;"> */}
            {/* <div className="container" style={container1}>

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

            </div> */}
        </>
    )
}

// SAY EVERYTHING WENT FINE 
export default Profile;