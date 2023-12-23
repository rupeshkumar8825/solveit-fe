// import logo from './logo.svg';
// import './App.css';
// import Navigation from "./components/Navigation";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import {BrowserRouter, Routes, Route, Switch} from "react-router-dom"
// import Home from "./pages/Home";
import Home from "./pages/home/Home";
import Unicorn from "./pages/Unicorn";
import Trending from "./pages/Trending";
import UploadIdea from "./pages/UploadIdea";
import Signin from "./pages/Signin";
import Register from "./pages/Register";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { ideasAction } from "./redux/action/ideasAction";
import { postsDetailsAction } from "./redux/action/postsDetailsAction";
import { usersAction } from "./redux/action/usersAction";


import Navigation from "./components/Navigation";
import DetailedPost from "./pages/DetailedPost";
import { upvotedListAction } from "./redux/action/upvotedListAction";
import Profile from "./pages/Profile";



function App() {
	
    const [posts, setposts] = useState([]);
	const dispatch = useDispatch();

	const username = useSelector((state)=> state.userNameReducer.username);
	const getListOfIdeas = async ()=>{
        const URL = "http://127.0.0.1:8000/ideas";
        const headers = {
            'Content-Type' : 'application/json',
            "Access-Control-Allow-Origin" : "*",
            "withCredentials": true

        }
		const response = await axios.get(URL, headers);
		console.log(response.data)
		
    }
	const fetchDetails = async()=>{
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
			let currupvotes = 0;
			let currshares = 0;
			// let currsaved = [];
			let currUpvotedIdeas = null;
			
			
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
					currupvotes = element2.upvotes;
					currshares = element2.shares;
					// currsaved = element2.saved;
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
					currUpvotedIdeas = element2.upvotes
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
				upvotes : currupvotes,
				shares : currshares,
				upvotedIdeas : currUpvotedIdeas
				
				
            };
            
            
            postsListDetails.push(tempObj);
            setposts(postsListDetails);
            
			
        });
        
        
        dispatch(postsDetailsAction(postsListDetails));
        
		
		// SAY EVERYTHING WENT FINE 
		return;
	}



	// DEFINING THE ROUTE TO GET THE LIST OF THE UPVOTED IDEAS ID CORRESPONDING TO EACH OF THE USERS 
	const fetchUpvotedSavedList = async ()=>{
		// WE HAVE TO MAKE THE POST REQUEST FOR THIS PURPOSE 
		const url = "http://127.0.0.1:8000/upvotedList";
        const headers = {
            'Content-Type' : 'application/json',
            "Access-Control-Allow-Origin" : "*",
            "withCredentials": true
            
        }
        
		const response = await axios.get(url, headers);
		// console.log("The response from the backend is as follows\n");
		// console.log(response.data);
		const userUpvotedSavedList = response.data.usersUpvotedSavedList;
		// console.log("The list from the backend of the upvoted is as follows\n", userUpvotedSavedList);
		dispatch(upvotedListAction(userUpvotedSavedList));

		// SAY EVERYTHING WENT FINE 
		return;
	}
		
	useEffect(() => {
		// getListOfIdeas();
		fetchDetails();	
		fetchUpvotedSavedList();
	}, []);
	

	return (
		<>
			<BrowserRouter>
				{/* <Navigation></Navigation> */}
			{/* setting up the routes for solveit without the need of nodejs  */}
				<Routes>
					<Route exact path="/" element={<Home></Home>}></Route>
					{/* <Route path="/trending" element={<Trending></Trending>}></Route> */}
					<Route path="/upload" element={<UploadIdea></UploadIdea>}></Route>
					<Route path="/register" element={<Register></Register>}></Route>
					<Route path="/unicorn" element={<Unicorn></Unicorn>}></Route>
					<Route path="/signin" element={<Signin></Signin>}></Route>
					<Route path="/details/:id" element={<DetailedPost></DetailedPost>}></Route>
					<Route path="/profile/:id" element = {<Profile></Profile>}></Route>
					{/* <Route path="/" element={Home}></Route> */}
				</Routes>
			{/* <Navigation></Navigation> */}
			</BrowserRouter>
			{/* <h1>hi this is home page of solveit </h1> */}
		</>
  );
}

export default App;
