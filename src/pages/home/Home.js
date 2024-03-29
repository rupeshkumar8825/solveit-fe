// this is home page for the solve it 
// in this i will be showing the ideas recently posted 

import React, { useId } from "react";
import Navigation from "../../components/Navigation";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
// import TrendingCard from "../../components/TrendingCard";
import TrendingCard from "../../components/TrendingCard";
import PopularPosts from "./PopularPosts";
// import Post from "../../components/Post";
import Category from "./Category";
import { Navigate, Redirect } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import axios from "axios";
import "../../css/Home.css"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userNameAction } from "../../redux/action/userNameAction";

import { ideasAction } from "../../redux/action/ideasAction";
import { usersAction } from "../../redux/action/usersAction";
import { postsDetailsAction } from "../../redux/action/postsDetailsAction";
// import Navigation from "../../components/Navigation";
// import {jest} from '@jest/globals'

const style1 = {
    "width" : "18rem"
}


// defining the home page for this purpose /
const Home = ()=>{
    console.log("this is home page");
    const [posts, setposts] = useState([]);
    const [username, setUsername] = useState("");
    const [userID, setUserID] = useState("");

    // const finalImgList = useSelector((state) => state.imgUrlReducer.imgList);
    // console.log("The list of ")
    const dispatch = useDispatch();
    // const 
    

    // DEFINING THE GET AUTHENTICATION FUNCTION TO AUTHENTICATE AND AT THE SAME TIME TO FETCH ALL USERS AND IDEAS AND STORE IT IN THE REDUX STORE 
    const getAuthentication = async ()=>{
        const url = "http://127.0.0.1:8000/";
        const headers = {
            'Content-Type' : 'application/json',
            "Access-Control-Allow-Origin" : "*",
            "withCredentials": true
            
        }
        
		const response = await axios.get(url, headers);
		if(response.data.status == 200)
		{
            let user_name = response.data.curr_user.username;
            let user_id = response.data.curr_user._id;
            setUsername(user_name);
            setUserID(user_id);
            dispatch(userNameAction(user_name));

		}
		else if(response.data.status == 401)
		{
            console.log("No user is signed in yet\n");
		}
    }



    useEffect(() => {

		// WE HAVE TO MAKE THE AXIOS POST REQUEST 
        getAuthentication();

		
	}, []);


    return (
        <>
            <Navigation></Navigation>
            {/* <div className="container">
                <div className="trendingHeading">
                    <h4>Trending Ideas</h4>

                </div>
                <div className="container2">
                    <TrendingCard imgsrc = {"https://source.unsplash.com/random/?city,night"}></TrendingCard>
                    <TrendingCard imgsrc = {"https://source.unsplash.com/random/?city,night"}></TrendingCard>
                    <TrendingCard imgsrc = {"https://source.unsplash.com/random/900×700/?fruit"}></TrendingCard>
                    <TrendingCard imgsrc = {"https://source.unsplash.com/random/?people"}></TrendingCard>
                    <TrendingCard imgsrc = {"https://source.unsplash.com/random/?roads"}></TrendingCard>
                    
                </div>

            </div> */}
          
            <div className="container" id="home">
                <PopularPosts username = {username} userID = {userID} identifier = {1}></PopularPosts>
                <Category></Category>

            </div>

            
        </>
    )
}

// say everything went fine 
export default Home;