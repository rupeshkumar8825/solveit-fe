// this is home page for the solve it 
// in this i will be showing the ideas recently posted 

import React from "react";
import Navigation from "../../components/Navigation";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import TrendingCard from "../../components/TrendingCard";
import Post from "../../components/Post";
import { useState } from "react";
import { useEffect } from "react";


import "../../css/Home.css"
import { useSelector } from "react-redux";

// const style1 = {
//     "width" : "18rem"
// }



// defining the home page for this purpose /
const PopularPosts = (props)=>{
    // console.log("this is home page");
    const [posts, setPosts] = useState([]);
    const postsList = useSelector((state) => state.postDetailsReducer.postsList);
    const ideasList = useSelector((state) => state.ideaReducer.ideasList);
    const usersList = useSelector((state) => state.usersReducer.usersList);

    // console.log("The List of details of all the posts are as follows \n\n");
    // console.log(postsList);
    // console.log("The list of ideas is as follows\n");
    // console.log(ideasList);

    // console.log("The list of users is as follows\n");
    // console.log(usersList);
    // WE WILL HAVE TO FETCH ALL THE IMAGES 
    // console.
    // MAPPING THE EACH COMPONENT FOR THIS PURPOSE 


    const generatePosts = ()=>{
        console.log("called the generate posts function from useeffect\n");
        console.log(postsList);

        let currPosts = [];

        let len = postsList.length;
        console.log(len);
        // if(len == 0)
        // {
        //     return(
        //         <h1>Loading</h1>
        //     )
        // }
        // USING THE FOR LOOP FOR THIS PURPOSE 
        for(let i = 0;i<postsList.length;i++)
        {
            // console.log(postsList[i]);
            currPosts.push(
                <div className="row" >
                    <div className="container" >
                        <Post details = {postsList[i]} keys={i} identifier = {props.identifier}></Post>
                    </div>
                </div>
            )
        }
        console.log("The current posts are as follows\n", currPosts);
        setPosts(currPosts);

        // SAY EVERYTHING WENT FINE 
        return;
    }


    // DEFINING THE FUNCTION TO GENERATE ONLY THOSE POSTS WHICH ARE UPVOTED BY THE CURRENT USER 
    // const generatePostsUpvoted = ()=>{
    //     console.log("Inside the function to generate only the upvoted posts\n");
    //     console.log("The current postslist is as follows\n");
    //     console.log(postsList);
    //     console.log("The username inside the function is ", props.username);
    //     console.log("The userid inside the function is ", props.userID);

    // }
    // generatePosts();
    // DEFINING THE USEEFFECT FOR THIS COMPONENT 
    useEffect(() => {
        console.log("The list of posts is ", postsList);
        // let timeID = null;
        // WE CAN SET A TIME INTERVAL FOR THIS PURPOSE 
        // if(props.identifier == 1)
        // {
        let timeID = setTimeout(() => {
            generatePosts();
        }, 1000);

        // }
        // else if(props.identifier == 2)
        // {
        //     console.log("we have to render only the upvoted by the current user itself\n");
        //     let timeID = setTimeout(() => {
        //         generatePostsUpvoted();
        //         // generatePosts();
        //     }, 1000);
        // }

        return ()=>{
            clearTimeout(timeID)
        }
        // generatePosts();
    }, [postsList]);
    // NOW I HAVE TO USE THE DETAILS AND THEN RENDER THE POSTS FOR THIS PURPOSE 
    return (
        <>
           
            
            {/* Now adding the different row here  */}
            <div className="container" id="popularposts">

                <div className="trendingHeading">
                    <h4>Popular Ideas</h4>

                </div>
                {posts}
                {/* <div className="row">
                    <div className="container" >
                        <Post></Post>
                    </div>
                </div>
                <div className="row">
                    <div className="container" >
                        <Post></Post>
                    </div>
                </div>
                <div className="row">
                    <div className="container" >
                        <Post></Post>
                    </div>
                </div> */}
                
            </div>
            

            
        </>
    )
}

// say everything went fine 
export default PopularPosts;