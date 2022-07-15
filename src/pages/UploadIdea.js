// this component is to upload the idea on the website for the user to be sued 
import React, { useState } from "react";
import Navigation from "../components/Navigation";
import "../css/upload.css"


const UploadIdea = ()=>{
    console.log("here you can upload the problem idea\n");

    // DEFINING THE STATES FOR THIS PURPOSE 
    const [idea, setIdea] = useState("");
    const [category, setCategory] = useState("");
    const [otherknow, setOtherknow] = useState("");
    const [rating, setRating] = useState(0);
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [description, setDescription] = useState("");
    const [ideafile, setIdeafile] = useState("");
    const [thumbnail, setThumbnail] = useState("");


    // DEFINING THE ON CHANGE HANDLERS FOR THIS PURPOSE 
    const handle_on_change_ideaname = (e)=>{
        console.log(e.target.value);
        setIdea(e.target.value);
    }

    const handle_on_change_category = (e)=>{
        console.log(e.target.value);
        setCategory(e.target.value);
    }

    const handle_on_change_othersknow = (e)=>{
        console.log(e.target.value);
        setOtherknow(e.target.value);
    }

    const handle_on_change_rating = (e)=>{
        console.log(e.target.value);
        setRating(e.target.value);
    }

    const handle_on_change_email = (e)=>{
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handle_on_change_phone = (e)=>{
        console.log(e.target.value);
        setPhone(e.target.value);
    }

    const handle_on_change_description = (e)=>{
        console.log(e.target.value);
        setDescription(e.target.value);
    }

    const handle_on_change_ideafile = (e)=>{
        console.log(e.target.files[0]);
        setIdeafile(e.target.files[0]);
    }

    const handle_on_change_thumbnail = (e)=>{
        console.log(e.target.files[0]);
        setThumbnail(e.target.files[0]);
    }


    // DEFINING THE EVENT HANDLERS FOR THIS APPLICATION 
    const handle_on_upload = ()=>{
        console.log("The user has submitted the idea.");
        // DEFINING THE DATA TO BE SENT TO THE BACKEND 
        const data = {
            idea : idea,
            category : category, 
            otherknow : otherknow,
            rating : rating, 
            email : email, 
            phone : phone, 
            description : description, 
            ideafile : ideafile, 
            thumbnail : thumbnail
        };

        console.log("from here the backend will handle the idea  submission\n");
        
        // SAY EVERYTHING WENT FINE 
        return;
    }

    return (
        <>
            <Navigation></Navigation>
            {/* <h1>here you can upload the problems or post the problems </h1> */}
            <div className="container" id="uploadidea">
                <div className="container" id="heading">
                    <h3>Upload the Idea in detail</h3>
                </div>
                <div className="container shadow p-3 mb-5 bg-white rounded" id="uploadingform">

                    <form>
                        <div className="row mb-4">
                            <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example1">Idea Name</label>
                                <input type="text" id="form6Example1" className="form-control" onChange={handle_on_change_ideaname} />
                            </div>
                            </div>
                            <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example2">Category</label>
                                <input type="text" id="form6Example2" className="form-control" onChange={handle_on_change_category}/>
                            </div>
                            </div>
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label" for="form6Example3">Does your family/friends face the issue as well(type yes or no)</label>
                            <input type="text" id="form6Example3" className="form-control" onChange={handle_on_change_othersknow}/>
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label" for="form6Example4">Rate the intensity of problem out of 10</label>
                            <input type="text" id="form6Example4" className="form-control" onChange={handle_on_change_rating}/>
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label" for="form6Example5">Email</label>
                            <input type="email" id="form6Example5" className="form-control" onChange={handle_on_change_email}/>
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label" for="form6Example6">Phone</label>
                            <input type="number" id="form6Example6" className="form-control" onChange={handle_on_change_phone}/>
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label" for="form6Example7">More Detail About Idea</label>
                            <textarea className="form-control" id="form6Example7" rows="4" onChange={handle_on_change_description}></textarea>
                        </div>

                        <div className="form-outline mb-4">Upload More Detailed explanation of idea</div>
                        {/* CODE TO INPUT THE FILE FROM THE USER TO KNOW MORE ABOUT THE PROJECT  */}
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                            </div>
                            <div className="custom-file">
                                {/* <label className="custom-file-label">Upload More Detailed explanation of idea</label> */}
                                <input type="file" className="custom-file-input" id="inputGroupFile01"
                                aria-describedby="inputGroupFileAddon01" onChange={handle_on_change_ideafile}/>
                                <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
                            </div>
                        </div>

                        
                        <div className="form-outline mb-4">Upload a thumbnail for your post</div>
                        {/* CODE TO INPUT THE FILE FROM THE USER TO KNOW MORE ABOUT THE PROJECT  */}
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                            </div>
                            <div className="custom-file">
                                {/* <label className="custom-file-label">Upload More Detailed explanation of idea</label> */}
                                <input type="file" className="custom-file-input" id="inputGroupFile01"
                                aria-describedby="inputGroupFileAddon01" onChange={handle_on_change_thumbnail}/>
                                <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
                            </div>
                        </div>

                        {/* <div className="form-check d-flex justify-content-center mb-4">
                            <input className="form-check-input me-2" type="checkbox" value="" id="form6Example8" checked />
                            <label className="form-check-label" for="form6Example8"> Create an account? </label>
                        </div> */}

                        <button  className="btn btn-primary btn-block mb-4" onClick={handle_on_upload}>Upload Idea</button>
                    </form>
                </div>
            </div>
        </>
    )
}



// say everything went fine 
export default UploadIdea;