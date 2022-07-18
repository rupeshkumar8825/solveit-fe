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
// import browserHistory
// import { browserHistory } from 'react-router';


import Navigation from "./components/Navigation";



function App() {
	// const navigate =  useNavigate();
	// const isLoggedin = useSelector((state)=> state.isLoggedInReducer);
    const isLoggedIn = useSelector((state) => state.IsLoggedInReducer.isLoggedIn)
	console.log(isLoggedIn)
	const username = useSelector((state)=> state.userNameReducer.username);

	

	// useEffect(async () => {
	// 	// WE HAVE TO MAKE THE AXIOS POST REQUEST 
	// 	const URL = "http://localhost:8080/";
    //     const headers = {
    //         'Content-Type' : 'application/json',
    //         "Access-Control-Allow-Origin" : "*"
    //     }
	// 	const response = await axios.post(URL, headers);
	// 	console.log(response)
	// 	if(response.data.status == 200)
	// 	{
	// 		// THIS MEANS THAT USER IS ALREADY LOGGED IN 
	// 		console.log("The user is already loggedin\n");
	// 	}
	// 	else if(response.data.status == 401)
	// 	{
	// 		// THEN THE USER IS NOT AUTHENTICATED HENCE WE HAVE TO SEND IT TO THE SIGN IN PAGE 
	// 		// navigate('/signin');
	// 		console.log("The request status if ", 401);
	// 		// <Navigate to="/signin"/>
	// 		// browserHistory.push("/signin")

	// 	}
		
	// }, []);

	return (
		<>
			<BrowserRouter>
				<Navigation user_name = {username}></Navigation>
			{/* setting up the routes for solveit without the need of nodejs  */}
				<Routes>
					<Route exact path="/" element={<Home></Home>}></Route>
					{/* <Route path="/trending" element={<Trending></Trending>}></Route> */}
					<Route path="/upload" element={<UploadIdea></UploadIdea>}></Route>
					<Route path="/register" element={<Register></Register>}></Route>
					<Route path="/unicorn" element={<Unicorn></Unicorn>}></Route>
					<Route path="/signin" element={<Signin></Signin>}></Route>
					{/* <Route path="/" element={Home}></Route> */}
				</Routes>
			{/* <Navigation></Navigation> */}
			</BrowserRouter>
			{/* <h1>hi this is home page of solveit </h1> */}
		</>
  );
}

export default App;
