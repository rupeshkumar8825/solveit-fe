// THIS ACTION IS TO STORE THE UPVOTED LIST OF THE CURRENT USER 
export const userUpvotedListAction = (upvotedList)=>{
    return {
        type : 'USER UPVOTED',
        payload : upvotedList
    }
}

// SAY EVERYTHING WENT FINE 
