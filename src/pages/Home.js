// this is home page for the solve it 
// in this i will be showing the ideas recently posted 

import React from "react";
import Navigation from "../components/Navigation";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import TrendingCard from "../components/TrendingCard";
import Post from "../components/Post";



import "../css/Home.css"

const style1 = {
    "width" : "18rem"
}



// defining the home page for this purpose /
const Home = ()=>{
    console.log("this is home page");

    return (
        <>
            <Navigation></Navigation>
            <div className="container">
                <div className="trendingHeading">
                    <h4>Trending Ideas</h4>

                </div>
                <div className="container2">
                    <TrendingCard imgsrc = {"https://source.unsplash.com/random"}></TrendingCard>
                    <TrendingCard imgsrc = {"https://source.unsplash.com/random/?city,night"}></TrendingCard>
                    <TrendingCard imgsrc = {"https://source.unsplash.com/random/900×700/?fruit"}></TrendingCard>
                    <TrendingCard imgsrc = {"https://source.unsplash.com/random/?people"}></TrendingCard>
                    <TrendingCard imgsrc = {"https://source.unsplash.com/random/?roads"}></TrendingCard>
                    
                </div>

            </div>
          
            {/* Now adding the different row here  */}
            <div className="container">

                <div className="trendingHeading">
                    <h4>Popular Posts</h4>

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
export default Home;