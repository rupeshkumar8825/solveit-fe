// in this i will make the navigation bar for solve it 
import React from "react";
import { Navbar, Nav,  Container, Button, Form, FormControl} from "react-bootstrap";
// import { MDBCol, MDBIcon } from "mdbreact";
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch, useSelector } from "react-redux";
import { userNameAction } from "../redux/action/userNameAction";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
// import Navigation
// import { Link } from 'react-router-dom';
const textcolor = {
    "color" : "white",
    // "fontWeight" : "light"
}
// defining the functional component for this purpose 
const  Navigation = (props)=>{
    console.log("this is navigation menu ");
    const user_name = useSelector((state) => state.userNameReducer.username);
    const usersList = useSelector((state) => state.usersReducer.usersList);
    console.log("The list of users is from navigation is as follows\n", usersList);
    console.log("The user is as follows", user_name);
    const [userID, setUserID] = useState("");

    // let user_name = useSelector((state) => state.userNameReducer.username);
    // console.log("the current user is", user_name);
    const dispatch = useDispatch();
    const nav = useNavigate();

    useEffect(() => {
        usersList.forEach(element => {
            if(element.username == user_name)
            {
                setUserID(element._id)
            }
        });
        
    }, [usersList]);
    // let user_name = props.user_name;

    // DEFINING THE LOGOUT HANDLER FOR THIS PURPOSE 
    const handle_on_logout = async()=>{
        console.log("The user is trying to logout");
        // WE WILL HAVE TO MAKE THE POST REQUEST TO LOGOUT FROM THIS 
        dispatch(userNameAction(null));

        // const URL = 
        const URL = "http://127.0.0.1:8000/logout";
        const headers = {
            'Content-Type' : 'application/json',
            "Access-Control-Allow-Origin" : "*",
            "withCredentials": true,
            "credentials": "include"

        }
		const response = await axios.get(URL, headers);
		console.log(response.data)

        if(response.data.status == 200)
        {
            console.log("Successfully logged out from the solveit application\n");
            dispatch(userNameAction(null));
            nav('/');
        }
        
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand className="mr-10" href="/">Solveit</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse  id="responsive-navbar-nav">
                    {/* <Nav className="me-10" > */}
                    <Nav className="me-auto" >
                    <Nav.Link className = "ml-5 "  style={textcolor} href="/">Home</Nav.Link>
                    {/* <Nav.Link className = "ml-5 "  style={textcolor}  href="/trending">Trending</Nav.Link> */}
                    <Nav.Link className = "ml-5 "  style={textcolor} href="/unicorn">Unicorns</Nav.Link>
                    <Nav.Link className = "ml-5 "  style={textcolor} href="/upload">Upload Idea</Nav.Link>
                    {user_name? <Nav.Link className = "ml-5 "  style={textcolor} href={`/profile/${userID}`}>{user_name} </Nav.Link> : <Nav.Link className = "ml-5 "  style={textcolor} href="/signin">Signin/Signup</Nav.Link> 
                    }
                    {user_name && <Nav.Link className = "ml-5 "  style={textcolor} onClick = {handle_on_logout} >Logout</Nav.Link>} 
                    

                    </Nav>

                    <Nav>
                        
                        <Form className="d-flex">
                            <FormControl
                             size="sm"
                            type="search"
                            placeholder="Search by Category"
                            className="me-2"
                            aria-label="Search"
                            />
                            <Button  size="sm" variant="danger">Search</Button>
                        </Form>
                        {/* <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

// exporting this navbar to be able to use the other components 
export default  Navigation;