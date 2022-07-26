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
            'Content-Type' : 'application/json',
            // 'Content-Type' : 'image/png',
            // 'responseType': 'blob',
            "Access-Control-Allow-Origin" : "*",
            "withCredentials": true

        }

		const response = await axios.get(url, headers);
		// console.log(response.data)

		if(response.data.status == 200)
		{
			// THIS MEANS THAT USER IS ALREADY LOGGED IN 
			// console.log("The user is already loggedin\n");
            // console.log(response.data.curr_user);

            let user_name = response.data.curr_user.username;
            console.log(response.data.fileLocation);
            dispatch(userNameAction(user_name));
            console.log("The list of users is as follows\n");
            console.log(response.data.users);

            console.log("The list of ideas is as follows\n");
            console.log(response.data.ideas);
            // username = user_name;
		}
		else if(response.data.status == 401)
		{
            
            // const imageObjectURL = URL.createObjectURL(response.data);
            // console.log("The image url is as follows\n");
            // console.log(imageObjectURL);
            // console.log(response.data)
            // setImg(imageObjectURL);
            // console.log("The list of users is as follows\n");
            // console.log(response.data.users);

            // console.log("The list of ideas is as follows\n");
            // console.log(response.data.ideas);
            // console.log("There is no user has signed in\n");
            const ideas = response.data.ideas;
            let imgList = [];
            ideas.forEach(element => {
                imgList.push(element.thumbnail);
            })
            // console.log('The list of images is as followss\n');
            // console.log(imgList);

            // USING THE FOR LOOP TO STORE ALL THE IMAGES HERE FOR THIS PURPOSE 
            imgList.forEach(async element => {
                // WE HAVE TO MAKE  A GET REQUEST TO BACKEND TO BRING THE IMAGE FOR THIS PURPOSE AND STORE IT IN THE ARRAY 
                const options = {
                    'responseType': 'blob',
                    "Access-Control-Allow-Origin" : "*",
                    imageName : element,
                    "withCredentials": true
                }
                const response2 = await axios.get(`http://127.0.0.1:8000/image?path=${element}`, options);

                console.log('The response from the image get end point is as follows\n');
                console.log(response2.data);
                // NOW WE HAVE TO CHANGE THIS TO THE IMAGE URL AND THEN WE HAVE TO STORE IT IN THE ARRAY 


            });

            // WE ALSO HAVE TO FETCH ALL THE IMAGES BEFORE HAND AND STORE IT IN THE VARIABLES 


		}
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