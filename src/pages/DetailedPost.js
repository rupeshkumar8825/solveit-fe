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
                       
                        <p>{(postsList[id].description).substring(1, 700)}</p>


                    </div>
                {/* <div className="card" style="width: 18rem;"> */}
                    <div className="container">
                        <img src={postsList[id].url} className="card-img-top" alt="Image"/>

                    </div>
                    <div className="card-body" id="footer">
                        <div className="container d-flex justify-content-space" id="upvote">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                            </svg>
                            {/* <i class="icon icon-upvote _2Jxk822qXs4DaXwsN7yyHA"></i>        */}
                            <p>Upvote</p>

                        </div>
                        <div className="container d-flex justify-content-space" id="share">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                            </svg>
                            
                            <p>Share</p>

                        </div>

                        <div className="container d-flex justify-content-space" id="save">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmarks" viewBox="0 0 16 16">
                                <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z"/>
                                <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"/>
                            </svg>
                            
                            <p>Save</p>

                        </div>
                        <div className="container d-flex justify-content-space" id="comment">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                            <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                            </svg>
                            
                            <p>Comment</p>

                        </div>
                        

                            
                    </div>
                </div>
            </div>
        </>
    )
}

// SAY EVERYTHING WENT FINE 
export default DetailedPost;