// this is home page for the solve it 
// in this i will be showing the ideas recently posted 

import React from "react";
import Navigation from "../components/Navigation";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import TrendingCard from "../components/TrendingCard";


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
                <h3>Trending Ideas</h3>
            </div>
            <div className="container2">
                <TrendingCard imgsrc = {"https://source.unsplash.com/random"}></TrendingCard>
                <TrendingCard imgsrc = {"https://source.unsplash.com/random/?city,night"}></TrendingCard>
                <TrendingCard imgsrc = {"https://source.unsplash.com/random/900×700/?fruit"}></TrendingCard>
                <TrendingCard imgsrc = {"https://source.unsplash.com/random/?people"}></TrendingCard>
                <TrendingCard imgsrc = {"https://source.unsplash.com/random/?roads"}></TrendingCard>
                
            </div>
          
            
            
        </>
    )
}

// say everything went fine 
export default Home;