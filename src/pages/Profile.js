// THIS SECTION I WILL SHOW THE PROFILE OF THE PARTICULAR USER AND I WILL SHOW THE LIST OF SAVED AND UPVOTED LIST OF THE IDEAS 

import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";

import { userNameAction } from "../redux/action/userNameAction";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "../css/Home.css"
// import ProfilePosts from "../components/ProfilePost";

import { userUpvotedListAction } from "../redux/action/userUpvotedListAction";
import { userSavedListAction } from "../redux/action/userSavedListAction";
import { usersAction } from "../redux/action/usersAction";
import { ideasAction } from "../redux/action/ideasAction";
import PopularPosts from "./home/PopularPosts";
import { useParams } from "react-router-dom";




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
    const {id} = useParams();
    console.log("The requested profile id is ", id);
    // const userName = useSelector((state) => state.userNameReducer.username);
    const [username, setUsername] = useState("");
    const [userID, setuserID] = useState(id);
    // const [firstname, setFirstname] = useState("");
    // const [lastname, setLastname] = useState("");
    // const [phone, setPhone] = useState("");
    // const [email, setEmail] = useState("");
    // const [upvotesNumber, setUpvotesNumber] = useState("");
    // const [savedNumber, setSavedNumber] = useState("");
    // const [first, setfirst] = useState(second)
    const [upvotedPost, setUpvotedPost] = useState(true);
    const [savedPost, setSavedPost] = useState(false);
    const [uploadedPost, setUploadedPost] = useState(false);
    const [posts, setPosts] = useState([]);
    const [currUser, setCurrUser] = useState("");
    // connst 

    const dispatch = useDispatch();
    const userUpvotedList = useSelector((state) => state.userUpvotedListReducer.userUpvotedList);
    const userSavedList = useSelector((state) => state.userSavedListReducer.userSavedList);
    const usersList = useSelector((state) => state.usersReducer.usersList);
    const ideasList = useSelector((state) => state.ideaReducer.ideasList);
    const postsList = useSelector((state) => state.postDetailsReducer.postsList);


    // console.log("The user name is ", username);
    // console.log("The  userID is ", userID);
    // console.log


    const handle_upvoted_ideas = ()=>{
        // console.log("The user wants to see the details about the upvoted ideas\n");
        // console.log("The list of user upvoted list is as follows\n");
        // console.log(userUpvotedList);
        setUpvotedPost(true);
        setSavedPost(false);
        setUploadedPost(false);
        // console.log("The list of posts is as follows\n", postsList);
        return;
    }

    const handle_saved_ideas = ()=>{
        // console.log("The user wants to see the details about the saved ideas\n");
        // console.log("The list of the user saved ideas is as follows\n");
        // console.log(userSavedList);
        setSavedPost(true);
        setUpvotedPost(false);
        setUploadedPost(false);
        // console.log("The list of posts is as follows\n", postsList);

        // SAY EVERYTHING WENT FINE 
        return;
    }


    const handle_uploaded_ideas = ()=>{
        setUploadedPost(true);
        setSavedPost(false);
        setUpvotedPost(false);

        // SAY EVERYTHING WENT FINE 
        return;
    }
  
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
            // setuserID(response.data.curr_user._id);
            // console.log("The userid of the current user is ", userID);
            // setCurrUser(response.data.curr_user);
            usersList.forEach(element => {
                if(element._id === userID)
                {
                    setCurrUser(element);
                }
            });

            // WE HAVE TO SET THE CURRUSER AS SOMETHING ELSE 
            // console.log("The current user is as follows \n");
            // console.log(currUser);
            dispatch(userNameAction(user_name));
            dispatch(usersAction(response.data.users));
            dispatch(ideasAction(response.data.ideas));
            // console.log("the userID is  ", userID);

		}
		else if(response.data.status == 401)
		{
            console.log("No user is signed in yet\n");
		}
    }


    // DEFINING THE FUNCTION TO FETCH THE DETAILS OF THE CURRENT SIGNED IN USER 
    const fetchUsersDetails = async ()=>{
        // WE HAVE TO MAKE THE POST REQUEST THE SERVER TO GET THE DETAILS OF THE USER CURRENTLY SINGNED AND THEN WE WILL DISPLAY THE DETAILS TO THE FINAL USER FOR THIS PURPOSE 
        console.log("The user id whose info we want is as follows\n");
        console.log(userID);


        // const URL = 
        const URL = `http://127.0.0.1:8000/user/${userID}`;
        const headers = {
            'Content-Type' : 'application/json',
            "Access-Control-Allow-Origin" : "*",
            "withCredentials": true
            
        }

        const response = await axios.get(URL, headers);
        console.log("The response and details of the user is as follows\n");
        console.log(response.data);
        dispatch(userUpvotedListAction(response.data.upvotedIdeaList));
        dispatch(userSavedListAction(response.data.savedIdeaList));
        // console.log("The list of posts is as follows\n", postsList);
        

    }


    // USING THE SECOND USE EFFECT TO STORE THE VALUE OF THE POSTS FOR THE UPVOTED AND THE SAVED IDEAS 
    // useEffect(() => {
    //     if(upvotedPost && userUpvotedList && userSavedList)
    //     {
    //         let currPosts = [];
    //         let userDetail = {
    //             currUserID : currUser._id,
    //             userName : currUser.username,
    //             firstname : currUser.firstname,
    //         }
    //         console.log("The list of posts are as follows\n");
    //         console.log(postsList);
    //         // WE HAVE TO STORE THE DETAILS OF THE UPVOTED POST 
    //         for(let i = 0; i<userUpvotedList.length;i++)
    //         {
    //             currPosts.push(
    //                 <div className="row" >
    //                     <div className="container" >
    //                         <ProfilePosts userDetails = {userDetail} postDetails = {userUpvotedList[i]} keys={i} identifier = {1}></ProfilePosts>
    //                     </div>
    //                 </div>
    //             )
    //         }


            
    //     }
        
      
    // }, [upvotedPost, savedPost, userUpvotedList, userSavedList])
    
    // WE HAVE TO CALL THE USEEFFECT AND GET THE DETAILS OF THE USERS FOR THIS PURPOSE 
    useEffect(() => {
        getAuthentication();
        console.log("The useeffect is called \n")
        let timeID = null;
        if(userID)
        {
            // timeID = setTimeout(() => {
                // console.log("came inside the useeffect if else statement for this purpose\n");
                // console.log("called the fetchUsersDetails function ");
                fetchUsersDetails()
            // }, 3000);

        }

        return ()=>{
            clearTimeout(timeID);
        }
        // if(username)
        // {
            // fetchUsersDetails();

        // }
        
    }, [userID, username]);
    return(
        <>
        
            {/* <h1>Hi this is profile section of the user {username} and the current details is {userID} and currentuser is {currUser.username}</h1> */}

            <div class="container rounded bg-white mt-5 mb-5">
                <div class="row">
                    <div class="col-md-7 border-right">
                        <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span class="font-weight-bold">{currUser.username}</span><span class="text-black-50">{currUser.email}</span><span> </span></div>
                    </div>
                    <div class="col-md-5 border-right">
                        <div class="p-3 py-5">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h4 class="text-right">Profile </h4>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-6">
                                    {/* <label class="labels">Name = </label> */}
                                    <p>Name = {currUser.firstname}</p>
                                    {/* <p>John</p> */}
                                    {/* <p>John</p> */}
                                    </div>
                                {/* <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" value="" placeholder="surname"/></div> */}
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-12">
                                    {/* <label class="labels">{currUser.phone}</label> */}
                                    <p>Username : {currUser.username}</p>
                                    {/* <p>Johnny something</p>                                    */}
                                </div>
                                <div class="col-md-12">
                                    {/* <label class="labels">{currUser.phone}</label> */}
                                    <p>Email : {currUser.email}</p>
                                    {/* <p>rk763130@gmail.com</p> */}
                                   
                                </div>
                                <div class="col-md-12">
                                    <p>Phone : {currUser.phone}</p>
                                    {/* <p>8825220213</p> */}
                                </div>
                                <div class="col-md-12">
                                    {currUser.upvotes ?  <p>Upvoted Ideas: {currUser.upvotes.length}</p> : <p>Upvoted Ideas : 0</p>   }
                                    {/* <p>Upvoted ideas : 10</p> */}
                                </div>
                                <div class="col-md-12">
                                {currUser.saved ?  <p>Saved Ideas: {currUser.saved.length}</p> : <p>Saved Ideas : 0</p>   }
                                    {/* <p>Saved Ideas : {currUser.saved.length}</p>                                */}
                                    {/* <p>Saved Ideas : 12</p> */}
                                </div>
                               
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="container" id="button-container">
                <button class="btn btn-primary profile-button" type="button" onClick={handle_upvoted_ideas}>Upvoted Ideas</button>
                <button class="btn btn-primary profile-button" type="button" onClick={handle_saved_ideas}>Saved Ideas</button>
                <button class="btn btn-primary profile-button" type="button" onClick={handle_uploaded_ideas}>Uploaded Ideas</button>

            </div>
            <div className="container" id="home">
                {/* <PopularPosts></PopularPosts> */}
                {/* <Category></Category> */}
               {upvotedPost &&  <PopularPosts username = {username} userID = {userID} identifier = {2}></PopularPosts>}
               {savedPost &&  <PopularPosts username = {username} userID = {userID} identifier = {3}></PopularPosts>}
               {uploadedPost &&  <PopularPosts username = {username} userID = {userID} identifier = {4}></PopularPosts>}
                {/* {upvotedPost && <h1>this is something to have a check of the profile page for this purpose</h1>} */}
            

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