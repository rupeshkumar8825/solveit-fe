// import logo from './logo.svg';
// import './App.css';
import Navigation from "./components/Navigation";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Unicorn from "./pages/Unicorn";
import Trending from "./pages/Trending";
import UploadIdea from "./pages/UploadIdea";
import Signin from "./pages/Signin";
// import Register from "./pages/Register";



function App() {
  return (
    <>
		{/* setting up the routes for solveit without the need of nodejs  */}
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home></Home>}></Route>
				<Route path="/trending" element={<Trending></Trending>}></Route>
				<Route path="/upload" element={<UploadIdea></UploadIdea>}></Route>
				<Route path="/unicorn" element={<Unicorn></Unicorn>}></Route>
				{/* <Route path="/register" element={<Register></Register>}></Route> */}
				<Route path="/signin" element={<Signin></Signin>}></Route>
				{/* <Route path="/" element={Home}></Route> */}
			</Routes>
		</BrowserRouter>
		{/* <Navigation></Navigation> */}
		{/* <h1>hi this is home page of solveit </h1> */}
    </>
  );
}

export default App;
