// THIS WILL STORE WHETHER THE USER IS LOGGED IN OR NOT 
export const isLoggedInAction = (value)=>{
    return {
        type : 'LOGGED IN',
        payload : value
    }
}

// SAY EVERYTHING WENT FINE 