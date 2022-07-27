// THIS PAGE WILL RENDER THE DETAILS OF THE POST THAT USER DEMANDS 
// DEFINING THE FUNCTIONAL COMPONENT FOR THIS PURPOSE 
import React from "react";
import { useParams } from "react-router-dom";

const DetailedPost = ()=>{
    const {id} = useParams();
    console.log("The requested post id is ", id);
    return (
        <>
            <h1>Hi this is details of the idea/problems that you requested. Soon we will update the page with full content please bare with us our developers are working on this issue. </h1>
        </>
    )
}

// SAY EVERYTHING WENT FINE 
export default DetailedPost;