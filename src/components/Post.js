// this is component for the post on the solveit 
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Post = (props)=>{
    // console.log("The props are as follows\n");
    // console.log(props);
    const userName = useSelector((state) => state.userNameReducer.username);
    const nav =  useNavigate();
    const postsList = useSelector((state) => state.postDetailsReducer.postsList);
    const usersList = useSelector((state) => state.usersReducer.usersList);
    const upvotedSavedList = useSelector((state) => state.upvotedListReducer.upvotedList);
    console.log("The list of upvoted is as follows\n");
    console.log(upvotedSavedList);
    // console.log("The userslist is as follows \n", usersList);
    console.log("The list of posts are as follows\n");
    console.log(postsList);
    const [upvotes, setUpvotes] = useState(postsList[props.keys].upvotes);
    // const [saveds, setSaveds] = useState(postsList[props.keys].saved);
    const [alreadyUpvoted, setAlreadyUpvoted] = useState(false);
    const [alreadySaved, setAlreadySaved] = useState(false);
    // const [currUserIdd, setCurrUserIdd] = useState("");

    // HANDLER FOR SHOWING MORE DETAILS ABOUT THE PRODUCT 
    // IN THIS CASE FIRST WE HAVE TO CHECK WHETHER THE USER IS SIGNED IN OR NOT 
    const handle_on_show_details = (e)=>{
        // console.log("The user wants to see the details of the project");
        // console.log(e);
        // APPLYING THE IF ELSE STATEMENT TO CHECK WHETHER THE USER IS SIGNED IN OR NOT 
        if(!userName)
        {
            // THEN WE HAVE TO DIVERT THIS TO THE SIGNIN PAGE 
            nav('/signin');
            
            // SAY EVERYTHING WENT FINE 
            return;
        }

        // OTHER WISE WE HAVE TO TRANSFER THIS TO SHOW THE DETAILS OF THE PROJECT 
        // console.log("The value of clicked show details button is as follows\n");
        // console.log(props.keys);
        nav(`/details/${props.keys}`);
    }

    // DEFINING THE HANDLER FOR UPVOTING THE IDEAS AND UPDATING THIS IN THE DATABASE FOR THIS PURPOSE 
    const handle_on_upvote = async ()=>{

        // CHECKING WHETHER THIS IS SINGNED IN USER OR NOT 
        if(!userName)
        {
            nav('/signin');

            // SAY EVERYTHING WENT FINE 
            return;
        }
        if(alreadyUpvoted)
        {
            console.log("already upvoted\n");
            
            // SAY EVERYTHING WENT FINE 
            return;
        }
        // let currUser = postsList[props.keys].username;
        let currIdea = postsList[props.keys].ideaId;
        // console.log("The upvoted idea is ", currIdea);
        // console.log("The user that upvoted this idea is ", userName);
        
        
        // WE HAVE TO FIRST FETCH THE VALUE OF THE ID OF THE IDEA AND ALSO THE ID OF THE USER 
        let newUpvote = upvotes + 1;
        setUpvotes(newUpvote);
        // NOW WE HAVE TO MAKE THE POST REQUEST  TO THE BACKEND TO UPDATE VALUE OF TOTAL NUMBER OF UPDATES 
		const URL = "http://127.0.0.1:8000/upvote";
        const headers = {
            'Content-Type' : 'application/json',
            "Access-Control-Allow-Origin" : "*",
            "withCredentials": true
            
        }

        let currUserId = null;
        let currUser = userName;
        // WE HAVE TO FETCH THE USERID GIVEN THE USERNAME 
        usersList.forEach(element => {
            if(element.username === currUser)
            {
                currUserId = element._id;
                
            }
        });

        
        setAlreadyUpvoted(true);
        const data = {
            ideaID : currIdea,
            userID : currUserId
        }
        
        const response = await axios.post(URL, data, headers);
        // console.log("The response from backend after making the upvote is as follows\n");
        // console.log(response.data);

        // NOW WE ALSO HAVE TO UPDATE THE VALUE OF TOTAL UPDATES OF THIS IDEA 
        postsList[props.keys].upvotes = postsList[props.keys].upvotes + 1;

        // SAY EVERYTHING WENT FINE 
        return;
    }


    // HANDLING THE SAVING EVENT 
    const handle_on_save = async()=>{
        console.log("The user is trying to save the idea or post in his watchlist for this purpose");
        if(!userName)
        {
            nav("/signin");

            // SAY EVERYTHING WENT FINE 
            return;
        }

        if(alreadySaved)
        {
            console.log("Already saved");
            
            // SAY EVERYTHING WENT FINE 
            return;
        }
        // WE HAVE TO GET THE DETAILS OF THE USER AND THE IDEA 
        const currIdeaId = postsList[props.keys].ideaId;
        let currUserId = null;
        let currUser = userName;
        usersList.forEach(element => {
            if(element.username === currUser)
            {
                currUserId = element._id;
                
            }
        });

        // NOW WE HAVE TO MAKE THE POST REQUEST TO THE BACKEND TO ADD THIS TO THE LIST OF SAVED IN DB 
        const URL = "http://127.0.0.1:8000/save";
        const headers = {
            'Content-Type' : 'application/json',
            "Access-Control-Allow-Origin" : "*",
            "withCredentials": true
            
        }

        const data  = {
            ideaID : currIdeaId,
            userID : currUserId
        }
        const response = await axios.post(URL, data, headers);
        setAlreadySaved(true);

        // SAY EVERYTHING WENT FINE 
        return;



    }

    // USING THE USEEFFECT TO CHECK WHETHER THIS POST IS ALREADY UPVOTED OR NOT 
    useEffect(() => {
        if(userName)
        {
            
            let currUserUpvotedList = [];
            let currUserSavedList = [];
            let currIdeaId = postsList[props.keys].ideaId;
            let currUser = userName;
            let currUserId = null;
            
            // WE HAVE TO FETCH THE USERID GIVEN THE USERNAME 
            usersList.forEach(element => {
                if(element.username === currUser)
                {
                    currUserId = element._id;
                    
                }
            });
            
            
            upvotedSavedList.forEach(element =>{
                // console.log("This is inside userslist element");
                // console.log(element)
                if(currUserId === element.userId)
                {
                    currUserUpvotedList = element.upvotesList;
                    currUserSavedList = element.savedList;
                }
            });

            
            currUserUpvotedList.forEach(element => {
                // console.log(element);
                if(element.ideasID === currIdeaId)
                {
                    setAlreadyUpvoted(true);
                    console.log("Already upvoted");
                    // return;
                }
            });
            
            currUserSavedList.forEach(element => {
                // console.log(element);
                if(element.ideasID === currIdeaId)
                {
                    setAlreadySaved(true);
                    console.log("Already upvoted");
                    // return;
                }
            });
            
        }
        
        
    }, []);

    if(props.identifier == 1)
    {

        return (
            <>
                <div className="card">
                    <div className="container" id="profile">
                        <div className="container">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                            </svg>
                            {/* <div className="container"> */}
                                <p>{props.details.username}</p>
                            {/* <div className="container"> */}
                                <h6>Posted by {props.details.firstname} 5 hours ago</h6>
    
                            {/* </div> */}
                        </div>
                        {/* <div className="container" id="seedetails" > */}
                        <button type="button" value={props.details.key} onClick={handle_on_show_details} class="btn btn-primary">See Details</button>
                       
    
                    </div>
                    
                    <div className="container" id="idea">
                        <h3>{props.details.ideaname}</h3>
    
                    </div>
                    <div className="container">
                        {/* <p>This is details of the Idea in short. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident unde dolores, assumenda itaque voluptatum, cumque sint maxime accusamus, tempora incidunt atque reprehenderit ducimus iusto nostrum quo ex ratione totam suscipit.
                        Autem repudiandae vitae aliquid reiciendis maiores, assumenda quibusdam deleniti nemo accusantium aliquam quisquam quos eum ipsa aspernatur perferendis, ut officiis commodi, beatae nisi! Dolorum sapiente ut, sunt itaque molestias ab?
                        
                        At rerum inventore sed delectus, laboriosam repellendus nisi magnam officiis quae, error modi! Optio, numquam corporis dolores iste molestias rerum sint, non id ad voluptatibus libero labore nesciunt deserunt laboriosam.</p> */}
                        <p>{(props.details.description).substring(1, 700)}</p>
    
    
                    </div>
                {/* <div className="card" style="width: 18rem;"> */}
                    <div className="container">
                        <img src={props.details.url} className="card-img-top" alt="Image"/>
    
                    </div>
                    <div className="card-body" id="footer">
                        <div className="container d-flex justify-content-space" id="upvote" onClick={handle_on_upvote}>
                            <p>{upvotes}</p>
    
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                            </svg>
                            {/* <i class="icon icon-upvote _2Jxk822qXs4DaXwsN7yyHA"></i>        */}
                            {alreadyUpvoted ? <p style={{"color" : "blue"}}>Upvoted</p> : <p>Upvote</p>}
                            {/* <p>Upvote</p> */}
    
                        </div>
                        <div className="container d-flex justify-content-space" id="share">
                            
                            {/* <p>{props.details.shares}</p> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                            </svg>
                            
                            <p>Share</p>
    
                        </div>
    
                        <div className="container d-flex justify-content-space" id="save" onClick={handle_on_save}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmarks" viewBox="0 0 16 16">
                                <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z"/>
                                <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"/>
                            </svg>
                            {alreadySaved ? <p style={{"color" : "blue"}}>Saved</p> : <p>Save</p>}
                            
                            
    
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
            </>
        )
    }
    else if(props.identifier == 2 && alreadyUpvoted)
    {
        return (
            <>
                <div className="card">
                    <div className="container" id="profile">
                        <div className="container">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                            </svg>
                            {/* <div className="container"> */}
                                <p>{props.details.username}</p>
                            {/* <div className="container"> */}
                                <h6>Posted by {props.details.firstname} 5 hours ago</h6>
    
                            {/* </div> */}
                        </div>
                        {/* <div className="container" id="seedetails" > */}
                        <button type="button" value={props.details.key} onClick={handle_on_show_details} class="btn btn-primary">See Details</button>
                       
    
                    </div>
                    
                    <div className="container" id="idea">
                        <h3>{props.details.ideaname}</h3>
    
                    </div>
                    <div className="container">
                        {/* <p>This is details of the Idea in short. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident unde dolores, assumenda itaque voluptatum, cumque sint maxime accusamus, tempora incidunt atque reprehenderit ducimus iusto nostrum quo ex ratione totam suscipit.
                        Autem repudiandae vitae aliquid reiciendis maiores, assumenda quibusdam deleniti nemo accusantium aliquam quisquam quos eum ipsa aspernatur perferendis, ut officiis commodi, beatae nisi! Dolorum sapiente ut, sunt itaque molestias ab?
                        
                        At rerum inventore sed delectus, laboriosam repellendus nisi magnam officiis quae, error modi! Optio, numquam corporis dolores iste molestias rerum sint, non id ad voluptatibus libero labore nesciunt deserunt laboriosam.</p> */}
                        <p>{(props.details.description).substring(1, 700)}</p>
    
    
                    </div>
                {/* <div className="card" style="width: 18rem;"> */}
                    <div className="container">
                        <img src={props.details.url} className="card-img-top" alt="Image"/>
    
                    </div>
                    <div className="card-body" id="footer">
                        <div className="container d-flex justify-content-space" id="upvote" onClick={handle_on_upvote}>
                            <p>{upvotes}</p>
    
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                            </svg>
                            {/* <i class="icon icon-upvote _2Jxk822qXs4DaXwsN7yyHA"></i>        */}
                            {alreadyUpvoted ? <p style={{"color" : "blue"}}>Upvoted</p> : <p>Upvote</p>}
                            {/* <p>Upvote</p> */}
    
                        </div>
                        <div className="container d-flex justify-content-space" id="share">
                            
                            {/* <p>{props.details.shares}</p> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                            </svg>
                            
                            <p>Share</p>
    
                        </div>
    
                        <div className="container d-flex justify-content-space" id="save" onClick={handle_on_save}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmarks" viewBox="0 0 16 16">
                                <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z"/>
                                <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"/>
                            </svg>
                            {alreadySaved ? <p style={{"color" : "blue"}}>Saved</p> : <p>Save</p>}
                            
                            
    
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
            </>
        )
    }
    else if(props.identifier == 3 && alreadySaved)
    {
        return (
            <>
                <div className="card">
                    <div className="container" id="profile">
                        <div className="container">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                            </svg>
                            {/* <div className="container"> */}
                                <p>{props.details.username}</p>
                            {/* <div className="container"> */}
                                <h6>Posted by {props.details.firstname} 5 hours ago</h6>
    
                            {/* </div> */}
                        </div>
                        {/* <div className="container" id="seedetails" > */}
                        <button type="button" value={props.details.key} onClick={handle_on_show_details} class="btn btn-primary">See Details</button>
                       
    
                    </div>
                    
                    <div className="container" id="idea">
                        <h3>{props.details.ideaname}</h3>
    
                    </div>
                    <div className="container">
                        {/* <p>This is details of the Idea in short. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident unde dolores, assumenda itaque voluptatum, cumque sint maxime accusamus, tempora incidunt atque reprehenderit ducimus iusto nostrum quo ex ratione totam suscipit.
                        Autem repudiandae vitae aliquid reiciendis maiores, assumenda quibusdam deleniti nemo accusantium aliquam quisquam quos eum ipsa aspernatur perferendis, ut officiis commodi, beatae nisi! Dolorum sapiente ut, sunt itaque molestias ab?
                        
                        At rerum inventore sed delectus, laboriosam repellendus nisi magnam officiis quae, error modi! Optio, numquam corporis dolores iste molestias rerum sint, non id ad voluptatibus libero labore nesciunt deserunt laboriosam.</p> */}
                        <p>{(props.details.description).substring(1, 700)}</p>
    
    
                    </div>
                {/* <div className="card" style="width: 18rem;"> */}
                    <div className="container">
                        <img src={props.details.url} className="card-img-top" alt="Image"/>
    
                    </div>
                    <div className="card-body" id="footer">
                        <div className="container d-flex justify-content-space" id="upvote" onClick={handle_on_upvote}>
                            <p>{upvotes}</p>
    
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                            </svg>
                            {/* <i class="icon icon-upvote _2Jxk822qXs4DaXwsN7yyHA"></i>        */}
                            {alreadyUpvoted ? <p style={{"color" : "blue"}}>Upvoted</p> : <p>Upvote</p>}
                            {/* <p>Upvote</p> */}
    
                        </div>
                        <div className="container d-flex justify-content-space" id="share">
                            
                            {/* <p>{props.details.shares}</p> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                            </svg>
                            
                            <p>Share</p>
    
                        </div>
    
                        <div className="container d-flex justify-content-space" id="save" onClick={handle_on_save}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmarks" viewBox="0 0 16 16">
                                <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z"/>
                                <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"/>
                            </svg>
                            {alreadySaved ? <p style={{"color" : "blue"}}>Saved</p> : <p>Save</p>}
                            
                            
    
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
            </>
        )
    }
}

export default Post