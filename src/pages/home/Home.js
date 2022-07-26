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

import { ideasAction } from "../../redux/action/ideasAction";
import { usersAction } from "../../redux/action/usersAction";
import { postsDetailsAction } from "../../redux/action/postsDetailsAction";

// import {jest} from '@jest/globals'

const style1 = {
    "width" : "18rem"
}


// defining the home page for this purpose /
const Home = ()=>{
    console.log("this is home page");
    const [img, setImg] = useState("");

    // const finalImgList = useSelector((state) => state.imgUrlReducer.imgList);
    // console.log("The list of ")
    const dispatch = useDispatch();
    

    // DEFINING THE GET AUTHENTICATION FUNCTION TO AUTHENTICATE AND AT THE SAME TIME TO FETCH ALL USERS AND IDEAS AND STORE IT IN THE REDUX STORE 
    const getAuthentication = async ()=>{
        const url = "http://127.0.0.1:8000/";
        const headers = {
            'Content-Type' : 'application/json',
            "Access-Control-Allow-Origin" : "*",
            "withCredentials": true
            
        }
        
		const response = await axios.get(url, headers);

        const ideas = response.data.ideas;
        const users = response.data.users;
        // STORING THE LIST OF IDEAS AND USERS  
        dispatch(ideasAction(ideas));
        dispatch(usersAction(users));


        let imgList = [];

        ideas.forEach(element => {
            imgList.push(element.thumbnail);
        })


        
        const postsListDetails = [];

        // USING THE FOR LOOP TO STORE ALL THE IMAGES HERE FOR THIS PURPOSE 
        imgList.forEach(async element => {
            // WE HAVE TO MAKE  A GET REQUEST TO BACKEND TO BRING THE IMAGE FOR THIS PURPOSE AND STORE IT IN THE ARRAY 
            const options = {
                'responseType': 'blob',
                "Access-Control-Allow-Origin" : "*",
                "withCredentials": true
            }


            const response2 = await axios.get(`http://127.0.0.1:8000/image?path=${element}`, options);
            const imageObjectURL = URL.createObjectURL(response2.data);
            
        
        
            // AGAIN WE HAVE TO FIND THE ID OF IDEA CORRESPONDING TO THIS PICTURE 
            // let currId = null;
            let curruserId = null;
            let currIdeaId = null;
            let currEmail = null;
            let currfirstname = null;
            let currlastname = null;
            let currphone = null;
            let currusername = null;
            let currcategory = null;
            let currdescription = null;
            let currideaname = null;
            let currothersknow = null;
            let currrating = null;

            // let 
            ideas.forEach(element2 => {
                if(element2.thumbnail === element)
                {
                    currIdeaId = element2._id;
                    curruserId = element2.user_id;
                    currcategory = element2.category;
                    currdescription = element2.description;
                    currideaname = element2.ideaname;
                    currothersknow = element2.othersknow;
                    currrating = element2.rating;
                }
            });

            // NOW I HAVE TO SEARCH THE USER CORRESPONDING TO THAT USER ID 
            users.forEach(element2 => {
                if(element2._id === curruserId)
                {
                    currEmail = element2.email;
                    currfirstname = element2.firstname;
                    currlastname = element2.lastname;
                    currphone = element2.phone;
                    currusername = element2.username;
                }
            });
            const tempObj = {
                userId : curruserId,
                ideaId : currIdeaId,
                email : currEmail,
                firstname : currfirstname,
                lastname : currlastname,
                phone : currphone,
                username : currusername,
                url : imageObjectURL,
                category : currcategory,
                description : currdescription,
                ideaname : currideaname,
                othersknow : currothersknow,
                rating : currrating,


            };
            
            
            postsListDetails.push(tempObj);
            setImg(imageObjectURL);
            

        });
        
        console.log("The list of urls of images that we got is as follows\n");
        console.log(postsListDetails);
        dispatch(postsDetailsAction(postsListDetails));
		if(response.data.status == 200)
		{
            let user_name = response.data.curr_user.username;
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