import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../Firebase/Firebase.config'

export const AuthContext=createContext();
const auth=getAuth(app)

const UserContext = ({children}) => {

    // const user={email:'abc'}
    const [user,setUser]=useState(null)

    // 2
    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // 3

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // 4

    const logOut=()=>{
        return signOut(auth)
    }

    // 5 -- show email in navbar

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, currentUser=>{
             console.log('current user',currentUser)
             setUser(currentUser)
         });
         return()=>unSubscribe()
 
     },[])
 
    
    const authInfo={user, createUser, signIn, signOut, logOut}
    return (
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>  
    );
};

export default UserContext;