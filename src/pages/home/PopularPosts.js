// this is home page for the solve it 
// in this i will be showing the ideas recently posted 

import React from "react";
import Navigation from "../../components/Navigation";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import TrendingCard from "../../components/TrendingCard";
import Post from "../../components/Post";



import "../../css/Home.css"
import { useSelector } from "react-redux";

const style1 = {
    "width" : "18rem"
}



// defining the home page for this purpose /
const PopularPosts = ()=>{
    console.log("this is home page");
    const imgList = useSelector((state) => state.imgUrlReducer.imgList);
    const ideasList = useSelector((state) => state.ideaReducer.ideasList);

    console.log("The list of images is as follows\n\n");
    console.log(imgList);
    console.log("The list of ideas is as follows\n");
    console.log(ideasList);
    // WE WILL HAVE TO FETCH ALL THE IMAGES 
    // console.

    return (
        <>
           
          
            {/* Now adding the different row here  */}
            <div className="container" id="popularposts">

                <div className="trendingHeading">
                    <h4>Popular Ideas</h4>

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
                </div>
                <div className="row">
                    <div className="container" >
                        <Post></Post>
                    </div>
                </div>
                
            </div>
            

            
        </>
    )
}

// say everything went fine 
export default PopularPosts;