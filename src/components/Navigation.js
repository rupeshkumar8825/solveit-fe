// in this i will make the navigation bar for solve it 
import React from "react";
import { Navbar, Nav,  Container, Button, Form, FormControl} from "react-bootstrap";
// import { MDBCol, MDBIcon } from "mdbreact";
import 'bootstrap/dist/css/bootstrap.css';
// import { Link } from 'react-router-dom';
const textcolor = {
    "color" : "white",
    // "fontWeight" : "light"
}
// defining the functional component for this purpose 
const  Navigation = ()=>{
    console.log("this is navigation menu ");

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand className="mr-10" href="/">Solveit</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse  id="responsive-navbar-nav">
                    {/* <Nav className="me-10" > */}
                    <Nav className="me-auto" >
                    <Nav.Link className = "ml-5 " activeClassName= "active" style={textcolor} href="/">Home</Nav.Link>
                    <Nav.Link className = "ml-5 " activeClassName= "active" style={textcolor}  href="/trending">Trending Problems</Nav.Link>
                    <Nav.Link className = "ml-5 " activeClassName= "active" style={textcolor} href="/unicorn">Unicorn Tracker</Nav.Link>
                    <Nav.Link className = "ml-5 " activeClassName= "active" style={textcolor} href="/upload">Upload Problem</Nav.Link>
                    <Nav.Link className = "ml-5 " activeClassName= "active" style={textcolor} href="/register">Signin/Register</Nav.Link>
                    
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