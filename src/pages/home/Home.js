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
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import axios from "axios";
import "../../css/Home.css"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userNameAction } from "../../redux/action/userNameAction";

// import {jest} from '@jest/globals'

const style1 = {
    "width" : "18rem"
}


// defining the home page for this purpose /
const Home = ()=>{
    console.log("this is home page");
    const isLoggedIn = useSelector((state) => state.IsLoggedInReducer.isLoggedIn)
    const username = useSelector((state)=> state.userNameReducer.username);
    console.log("The current status of user is ", isLoggedIn);
    const [img, setImg] = useState("");

    const dispatch = useDispatch();

    const getAuthentication = async ()=>{
        const url = "http://127.0.0.1:8000/";
        const headers = {
            // 'Content-Type' : 'application/json',
            // 'Content-Type' : 'image/png',
            'responseType': 'blob',
            "Access-Control-Allow-Origin" : "*",
            "withCredentials": true

        }

		const response = await axios.get(url, headers);
		// console.log(response.data)

		// if(response.data.status == 200)
		// {
		// 	// THIS MEANS THAT USER IS ALREADY LOGGED IN 
		// 	// console.log("The user is already loggedin\n");
        //     // console.log(response.data.curr_user);

        //     let user_name = response.data.curr_user.username;
        //     console.log(response.data.fileLocation);
        //     dispatch(userNameAction(user_name));
        //     // username = user_name;
		// }
		// else if(response.data.status == 401)
		// {
            // const blob  = await response.blob();
            // console.log("The file data is as follows\n");
            // const imageBlob = await response.blob();
            console.log("The image blob is as follows\n");
            console.log(response.data);
            const imageObjectURL = URL.createObjectURL(response.data);
            console.log("The image url is as follows\n");
            console.log(imageObjectURL);
            setImg(imageObjectURL);
            console.log(response.data)
            // global.url.createObjectURL = jest.fn();
            // const imgURL = url.createObjectURL(response.data);
            // const reader = new FileReader();
            // reader.readAsDataURL(blob);
            // reader.onloadend = () => {
            // const base64data = reader.result;
            // setImg(base64data);
            // console.log("The image url is as follows\n\n");
            // console.log(imgURL);
            // setImg(imgURL);
			// THEN THE USER IS NOT AUTHENTICATED HENCE WE HAVE TO SEND IT TO THE SIGN IN PAGE 
            console.log("No user exists. And this user is not signed in yet");
		// }
    }
    useEffect(() => {

		// WE HAVE TO MAKE THE AXIOS POST REQUEST 
        getAuthentication();

		
	}, []);


    return (
        <>
            <div className="container">
                <div className="trendingHeading">
                    <h4>Trending Ideas</h4>

                </div>
                <div className="container2">
                    <TrendingCard imgsrc = {img}></TrendingCard>
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