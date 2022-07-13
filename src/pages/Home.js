// this is home page for the solve it 
// in this i will be showing the ideas recently posted 

import React from "react";
import Navigation from "../components/Navigation";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';


const style1 = {
    "width" : "18rem"
}

// defining the home page for this purpose /
const Home = ()=>{
    console.log("this is home page");

    return (
        <>
            <Navigation></Navigation>
            {/* <h1>hi this is home page </h1> */}
            <MDBCard style={{ maxWidth: '22rem' }}>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                    <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                </MDBRipple>
                <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn href='#'>Button</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            {/* <div className="container">
                <div className="row">
                    <div className="col-sm">
                        One of three columns
                    </div>
                    <div className="col-md">
                        One of three columns
                        {/* <div className="card" style={style1}>
                            <img src="https://source.unsplash.com/WLUHO9A_xik/1600x900" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Problem of water supply</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div> */}
                    {/* </div> */}
                    {/* <div className="col-sm">
                        One of three columns
                    </div>
                </div> */}
            {/* </div> */}
            
        </>
    )
}

// say everything went fine 
export default Home;