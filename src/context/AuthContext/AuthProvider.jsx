import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { auth } from "../../firebase/Firebase.init";


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
    }
console.log(user)
    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};



export default AuthProvider;