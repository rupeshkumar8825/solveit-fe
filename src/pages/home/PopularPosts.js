// this is home page for the solve it 
// in this i will be showing the ideas recently posted 

import React from "react";
import Navigation from "../../components/Navigation";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import TrendingCard from "../../components/TrendingCard";
import Post from "../../components/Post";



import "../../css/Home.css"
import { useSelector } from "react-redux";

// const style1 = {
//     "width" : "18rem"
// }



// defining the home page for this purpose /
const PopularPosts = ()=>{
    console.log("this is home page");
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
    let posts = [];
    let len = postsList.length;

    if(len == 0)
    {
        return(
            <h1>Loading</h1>
        )
    }
    // USING THE FOR LOOP FOR THIS PURPOSE 
    for(let i = 0;i<postsList.length;i++)
    {
        // console.log(postsList[i]);
        posts.push(
            <div className="row" >
                <div className="container" >
                    <Post details = {postsList[i]} keys={i}></Post>
                </div>
            </div>
        )
    }
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