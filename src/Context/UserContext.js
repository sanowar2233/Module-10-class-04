import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
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

    
    const authInfo={user, createUser, signIn, signOut}
    return (
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>  
    );
};

export default UserContext;