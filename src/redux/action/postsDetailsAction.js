// THIS ACTION WILL STORE THE VALUES OF URLS OF ALL THE IMAGES ALONG WITH THE IDEAS_ID FOR CONVININECE 
// DEFINING THE ACTION  FOR THIS PURPOSE 
export const postsDetailsAction = (postsList)=>{
    return {
        type : 'STORE IMAGE',
        payload : postsList
    }
}

// SAY EVERYTHING WENT FINE 