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
import { useDispatch } from "react-redux";
import { userNameAction } from "../../redux/action/userNameAction";


const style1 = {
    "width" : "18rem"
}


// defining the home page for this purpose /
const Home = ()=>{
    console.log("this is home page");
    const isLoggedIn = useSelector((state) => state.IsLoggedInReducer.isLoggedIn)
    const username = useSelector((state)=> state.userNameReducer.username);
    // console.log("The current status of user is ", isLoggedIn.IsLoggedInReducer.isLoggedIn);
    console.log("The current status of user is ", isLoggedIn);
    // const nav = useNavigate();


    const dispatch = useDispatch();

    const getAuthentication = async ()=>{
        const URL = "http://127.0.0.1:8000/";
        const headers = {
            'Content-Type' : 'application/json',
            "Access-Control-Allow-Origin" : "*",
            "withCredentials": true

        }
		const response = await axios.get(URL, headers);
		console.log(response.data)
		if(response.data.status == 200)
		{
			// THIS MEANS THAT USER IS ALREADY LOGGED IN 
			console.log("The user is already loggedin\n");
            // SO I CAN SET THE USERNAME 
            console.log(response.data.curr_user);
            let user_name = response.data.curr_user.firstname + response.data.curr_user.lastname;
            dispatch(userNameAction(user_name));
            // username = user_name;
		}
		else if(response.data.status == 401)
		{
			// THEN THE USER IS NOT AUTHENTICATED HENCE WE HAVE TO SEND IT TO THE SIGN IN PAGE 
            console.log("No user exists. And this user is not signed in yet");
			// navigate('/signin');
			// <Redirect to="/signin"/>
            // nav('/signin')
			// browserHistory.push("/signin")

		}
    }
    useEffect(() => {
		// WE HAVE TO MAKE THE AXIOS POST REQUEST 
        getAuthentication();

		
	}, []);


    return (
        <>
            {/* <Navigation user_name = {username}></Navigation> */}
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