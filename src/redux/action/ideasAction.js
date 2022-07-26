// DEFINING THE ACTION TO STORE THE LIST OF IDEAS FOR THIS PURPOSE 
export const ideasAction = (ideasList)=>{
    return {
        type : 'FETCH IDEAS',
        payload : ideasList
    }
}

// SAY EVERYTHING WENT FINE 
