// THIS IS THE ACTION TO STORE THE VALUE OF THE UPVOTED IDEAS CORRESPONDING TO THE USER 
export const upvotedListAction = (upvotedList)=>{
    return {
        type : 'UPVOTED LIST',
        payload : upvotedList
    }
}

// SAY EVERYTHING WENT FINE 