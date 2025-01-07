import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { auth } from "../../firebase/Firebase.init";

const googleProvider=new GoogleAuthProvider

const AuthProvider = ({children}) => {

const [user, setUser]=useState(null);
const [loading, setLoading]=useState(true);

const createUser=(email, password)=>{
  setLoading(true);
  return createUserWithEmailAndPassword(auth, email, password);
}

const signInUser=(email, password)=>{
  setLoading(true);
  return signInWithEmailAndPassword(auth,email,password);
}

const signInWithGoogle=()=>{
  setLoading(true);
  return signInWithPopup(auth, googleProvider)
}
const signOutUser=()=>{
  setLoading(true);
  return signOut(auth);
}

useEffect(()=>{
  const unsubscribe= onAuthStateChanged(auth,currentUser =>{
    setUser(currentUser);
    console.log('state captured', currentUser)
    setLoading(false);
  })
  return()=>{
    unsubscribe();
  }
},[])

    const authInfo={
      user,
      loading,
      createUser,
      signInUser,
      signInWithGoogle,
      signOutUser,
      
    }


console.log(user)
    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};



export default AuthProvider;