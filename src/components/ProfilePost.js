// import { useSelector } from "react-redux"

// // THIS WILL BE USED TO SHOW THE POSTS THAT ARE SAVED OR UPVOTED AND UPLOADED BY THE USER 
// const ProfilePosts = (props)=>{

//     const [alreadyUpvoted, setAlreadyUpvoted] = useState(false);
//     const [alreadySaved, setAlreadySaved] = useState(false);
//     const [upvotes, setUpvotes] = useState(postsList[props.keys].upvotes);


//     const handle_on_save = async()=>{
//         console.log("The user is trying to save the idea or post in his watchlist for this purpose");
//         if(!userName)
//         {
//             nav("/signin");

//             // SAY EVERYTHING WENT FINE 
//             return;
//         }

//         if(alreadySaved)
//         {
//             console.log("Already saved");
            
//             // SAY EVERYTHING WENT FINE 
//             return;
//         }
//         // WE HAVE TO GET THE DETAILS OF THE USER AND THE IDEA 
//         // const currIdeaId = postsList[props.keys].ideaId;
//         // let currUserId = null;
//         let currUserId = props.userDetails.currUserID;
//         let currIdeaId = props.details._id;
        

//         // NOW WE HAVE TO MAKE THE POST REQUEST TO THE BACKEND TO ADD THIS TO THE LIST OF SAVED IN DB 
//         const URL = "http://127.0.0.1:8000/save";
//         const headers = {
//             'Content-Type' : 'application/json',
//             "Access-Control-Allow-Origin" : "*",
//             "withCredentials": true
            
//         }

//         const data  = {
//             ideaID : currIdeaId,
//             userID : currUserId
//         }
//         const response = await axios.post(URL, data, headers);
//         setAlreadySaved(true);

//         // SAY EVERYTHING WENT FINE 
//         return;



//     }


//     useEffect(() => {
//        if(props.identifier == 1)
//        {
//         setAlreadyUpvoted(true);
//         // setAlreadySaved(false);
//        }
//        else if(props.identifier == 2)
//        {
//         setAlreadySaved(true);
//         // setAlreadyUpvoted(false);
//        }
//     }, []);

//     // const userName = useSelector((state) => state.userNameReducer.userName);
//     if(props.identifier == 1)
//     {
//         // setAlreadyUpvoted()
//         // THEN WE HAVE TO RENDER THE POST FOR THE UPVOTED IDEAS OF THE CURRENT USER FOR THIS PURPOSE 

//         return (
//             <>
//                 <div className="card">
//                     <div className="container" id="profile">
//                         <div className="container">
                            
//                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
//                                 <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
//                             </svg>
//                             {/* <div className="container"> */}
//                                 <p>{props.userDetails.username}</p>
//                             {/* <div className="container"> */}
//                                 <h6>Posted by {props.userDetails.firstname} 5 hours ago</h6>
    
//                             {/* </div> */}
//                         </div>
//                         {/* <div className="container" id="seedetails" > */}
//                         {/* <button type="button" value={props.details.key} onClick={handle_on_show_details} class="btn btn-primary">See Details</button> */}
                       
    
//                     </div>
                    
//                     <div className="container" id="idea">
//                         <h3>{props.details.ideaname}</h3>
    
//                     </div>
//                     <div className="container">
//                         {/* <p>This is details of the Idea in short. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident unde dolores, assumenda itaque voluptatum, cumque sint maxime accusamus, tempora incidunt atque reprehenderit ducimus iusto nostrum quo ex ratione totam suscipit.
//                         Autem repudiandae vitae aliquid reiciendis maiores, assumenda quibusdam deleniti nemo accusantium aliquam quisquam quos eum ipsa aspernatur perferendis, ut officiis commodi, beatae nisi! Dolorum sapiente ut, sunt itaque molestias ab?
                        
//                         At rerum inventore sed delectus, laboriosam repellendus nisi magnam officiis quae, error modi! Optio, numquam corporis dolores iste molestias rerum sint, non id ad voluptatibus libero labore nesciunt deserunt laboriosam.</p> */}
//                         <p>{(props.details.description).substring(1, 700)}</p>
    
    
//                     </div>
//                 {/* <div className="card" style="width: 18rem;"> */}
//                     <div className="container">
//                         <img src={props.details.url} className="card-img-top" alt="Image"/>
    
//                     </div>
//                     <div className="card-body" id="footer">
//                         <div className="container d-flex justify-content-space" id="upvote" onClick={handle_on_upvote}>
//                             <p>{upvotes}</p>
    
//                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
//                                 <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
//                             </svg>
//                             {/* <i class="icon icon-upvote _2Jxk822qXs4DaXwsN7yyHA"></i>        */}
//                             <p style={{"color" : "blue"}}>Upvoted</p>
//                             {/* <p>Upvote</p> */}
    
//                         </div>
//                         <div className="container d-flex justify-content-space" id="share">
                            
//                             {/* <p>{props.details.shares}</p> */}
//                             <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
//                             <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
//                             </svg>
                            
//                             <p>Share</p>
    
//                         </div>
    
//                         <div className="container d-flex justify-content-space" id="save" onClick={handle_on_save}>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmarks" viewBox="0 0 16 16">
//                                 <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z"/>
//                                 <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"/>
//                             </svg>
//                             {/* <p style={{"color" : "blue"}}>Saved</p>  */}
//                             {alreadySaved ? <p style={{"color" : "blue"}}>Saved</p> : <p>Save</p>}

                            
                            
    
//                         </div>
//                         <div className="container d-flex justify-content-space" id="comment">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
//                             <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
//                             </svg>
                            
//                             <p>Comment</p>
    
//                         </div>
                        
    
//                             {/* <h5 className="card-title">Card title</h5>
//                             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                             <a href="#" className="btn btn-primary">Go somewhere</a> */}
//                     </div>
//                 </div>
//             </>
//         )
//     }
// }

// // SAY EVERYTHING WENT FINE 
// export default ProfilePosts;