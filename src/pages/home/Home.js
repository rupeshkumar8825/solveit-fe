// this is home page for the solve it 
// in this i will be showing the ideas recently posted 

import React from "react";
import Navigation from "../../components/Navigation";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
// import TrendingCard from "../../components/TrendingCard";
import TrendingCard from "../../components/TrendingCard";
import PopularPosts from "./PopularPosts";
// import Post from "../../components/Post";
import Category from "./Category";
import { Navigate, Redirect } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import axios from "axios";
import "../../css/Home.css"
import { useSelector } from "react-redux";

const style1 = {
    "width" : "18rem"
}


// defining the home page for this purpose /
const Home = ()=>{
    console.log("this is home page");
    const isLoggedIn = useSelector((state) => state.IsLoggedInReducer.isLoggedIn)
    // console.log("The current status of user is ", isLoggedIn.IsLoggedInReducer.isLoggedIn);
    console.log("The current status of user is ", isLoggedIn);
    const nav = useNavigate();

    const getAuthentication = async ()=>{
        const URL = "http://localhost:8080/";
        const headers = {
            'Content-Type' : 'application/json',
            "Access-Control-Allow-Origin" : "*"
        }
		const response = await axios.get(URL, headers);
		console.log(response.data)
		if(response.data.status == 200)
		{
			// THIS MEANS THAT USER IS ALREADY LOGGED IN 
			console.log("The user is already loggedin\n");
		}
		else if(response.data.status == 401)
		{
			// THEN THE USER IS NOT AUTHENTICATED HENCE WE HAVE TO SEND IT TO THE SIGN IN PAGE 
			// navigate('/signin');
			console.log("The request status if ", 401);
			// <Redirect to="/signin"/>
            nav('/signin')
			// browserHistory.push("/signin")

		}
    }
    useEffect(() => {
		// WE HAVE TO MAKE THE AXIOS POST REQUEST 
        getAuthentication();

		
	}, []);


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
          
            <div className="container" id="home">
                <PopularPosts></PopularPosts>
                <Category></Category>

            </div>

            
        </>
    )
}

// say everything went fine 
export default Home;