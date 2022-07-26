// THIS IS TO STORE THE LIST OF USERS 

export const usersAction = (usersList)=>{
    return {
        type : 'FETCH USERS',
        payload : usersList
    }
}

// SAY EVERYTHING WENT FINE 
