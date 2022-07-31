// THIS PAGE WILL RENDER THE DETAILS OF THE POST THAT USER DEMANDS 
// DEFINING THE FUNCTIONAL COMPONENT FOR THIS PURPOSE 
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Post from "../components/Post";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ideasAction } from "../redux/action/ideasAction";
import { usersAction } from "../redux/action/usersAction";
import { postsDetailsAction } from "../redux/action/postsDetailsAction";
import { useState } from "react";


const style = {
    "width" : "70%"
}
const DetailedPost = ()=>{
    const {id} = useParams();
    console.log("The requested post id is ", id);
    // const [postsList, setPosts] = useState([]);
    // const [Ideas, setIdeas] = useState([]);
    // const [Users, setUsers] = useState([]);
    
    // const [ideaName, setIdeaName] = useState("");
    // const 
    const dispatch = useDispatch();

    // const [user, setUser] = useState("");

    const userName = useSelector((state) => state.userNameReducer.username);
    console.log("The current user name is as follows \n", userName);
    // I HAVE TO FETCH ALL THE LIST OF THE POSTS BEING STORED IN THE STORE FOR THIS PURPOSE 
    const postsList = useSelector((state) => state.postDetailsReducer.postsList);
    const nav = useNavigate();



   
    // DEFINING THE USE EFFECT FOR THIS PURPOSE 
    useEffect(() => {
        // fetchDetails();
        if(!userName)
        {
            nav("/signin");
        }
        
        
    }, [userName]);

    
    // console.log("The list of postsList are as follows");
    // console.log(postsList);
    // const post = 
    return (
        <>
            {/* <h1>Hi this is details of the idea/problems that you requested. Soon we will update the page with full content please bare with us our developers are working on this issue. </h1> */}
            <div className="container" style={style}>

                <div className="card">
                    <div className="container" id="profile">
                        <div className="container">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                            </svg>
                            {/* <div className="container"> */}
                                <p>{postsList[id].username}</p>
                            {/* <div className="container"> */}
                                <h6>Posted by {postsList[id].firstname} 5 hours ago</h6>

                            {/* </div> */}
                        </div>
                        {/* <div className="container" id="seedetails" > */}
                        {/* <button type="button" value={postsList[id].key} onClick={handle_on_show_details} class="btn btn-primary">See Details</button> */}
                    

                    </div>
                    
                    <div className="container" id="idea">
                        <h3>{postsList[id].ideaname}</h3>

                    </div>
                    <div className="container">
                       
                        <p>{(postsList[id].description)}</p>


                    </div>
                {/* <div className="card" style="width: 18rem;"> */}
                    <div className="container">
                        <img src={postsList[id].url} className="card-img-top" alt="Image"/>

                    </div>
                    

                       
                </div>
            </div>
        </>
    )
}

// SAY EVERYTHING WENT FINE 
export default DetailedPost;