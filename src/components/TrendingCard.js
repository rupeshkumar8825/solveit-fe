// this is the component for trending card coponent 
import React from "react";

import "../css/Home.css"

const TrendingCard = (props)=>{
    return (
        <>
            {/* <div className="col-12 col-sm-8 col-md-6 col-lg-4"> */}
            
                <div className="card">
                    <img className="card-img" src={props.imgsrc} alt="Idea"/>
                    <div className="card-img-overlay text-white d-flex flex-column justify-content-center overlay" >
                    {/* <h4 className="card-title">Bologna</h4> */}
                    <h4>Bologna</h4>
                    {/* <h6 className="card-subtitle mb-2">Emilia-Romagna Region, Italy</h6> */}
                    {/* <h6>Emilia-Romagna Region, Italy</h6> */}
                    <p>It is the seventh most po lorem  </p>
                    {/* <p className="card-text">It is the seventh most populous city in Italy, at the heart of a metropolitan area of about one million people. </p> */}
                    {/* <div className="link d-flex">
                        <a href="#" className="card-link text-warning">Read More</a>
                        <a href="#" className="card-link text-warning">Book a Trip</a>
                    </div> */}
                    </div>
                </div>
            
        </>
    )
};

// say everything went fine 
export default TrendingCard;