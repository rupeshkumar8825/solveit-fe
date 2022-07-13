// this component is to upload the idea on the website for the user to be sued 
import React from "react";
import Navigation from "../components/Navigation";
import "../css/upload.css"


const UploadIdea = ()=>{
    console.log("here you can upload the problem idea\n");

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
                                <input type="text" id="form6Example1" className="form-control" />
                            </div>
                            </div>
                            <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example2">Category</label>
                                <input type="text" id="form6Example2" className="form-control" />
                            </div>
                            </div>
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label" for="form6Example3">Does your family/friends face the issue as well(type yes or no)</label>
                            <input type="text" id="form6Example3" className="form-control" />
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label" for="form6Example4">Rate the intensity of problem out of 10</label>
                            <input type="text" id="form6Example4" className="form-control" />
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label" for="form6Example5">Email</label>
                            <input type="email" id="form6Example5" className="form-control" />
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label" for="form6Example6">Phone</label>
                            <input type="number" id="form6Example6" className="form-control" />
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label" for="form6Example7">More Detail About Idea</label>
                            <textarea className="form-control" id="form6Example7" rows="4"></textarea>
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
                                aria-describedby="inputGroupFileAddon01"/>
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
                                aria-describedby="inputGroupFileAddon01"/>
                                <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
                            </div>
                        </div>

                        {/* <div className="form-check d-flex justify-content-center mb-4">
                            <input className="form-check-input me-2" type="checkbox" value="" id="form6Example8" checked />
                            <label className="form-check-label" for="form6Example8"> Create an account? </label>
                        </div> */}

                        <button  className="btn btn-primary btn-block mb-4">Upload Idea</button>
                    </form>
                </div>
            </div>
        </>
    )
}



// say everything went fine 
export default UploadIdea;