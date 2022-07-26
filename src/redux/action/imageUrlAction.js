// THIS ACTION WILL STORE THE VALUES OF URLS OF ALL THE IMAGES ALONG WITH THE IDEAS_ID FOR CONVININECE 
// DEFINING THE ACTION  FOR THIS PURPOSE 
export const imageUrlAction = (imgList)=>{
    return {
        type : 'STORE IMAGE',
        payload : imgList
    }
}

// SAY EVERYTHING WENT FINE 