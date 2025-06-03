import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "./Firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(false)

   const provider = new GoogleAuthProvider();
   function googleSignin(){
    setLoading(true)
    return signInWithPopup(auth,provider);
   }

   function handleRegister(email , pass){
      setLoading(true)
      return createUserWithEmailAndPassword(auth , email , pass);
   }

   function updateData(name , photo){
     return updateProfile(auth.currentUser, {
      displayName: name ,
      photoURL: photo
     })
   }


   function handleLogin(email , pass){
   setLoading(true)
   return signInWithEmailAndPassword(auth , email , pass);
   }

   function handleLogout(){
    setLoading(true)
    return signOut(auth)
    .then(() => {
      console.log("User signed out successfully");
      // Optionally, redirect the user to the login page or homepage
    })
    .catch((error) => {
      console.error("Error signing out:", error);
    });
   }

   useEffect(()=>{
   const unSub = onAuthStateChanged(auth , currentUser=>{
      if(currentUser){
        setUser(currentUser);
        setLoading(false)
      }else{
        setLoading(true);
        setUser(null)
      }
    })

    return ()=> unSub()
   },[])

 
    const obj = {
      googleSignin,
      user , setUser,
      loading,
      handleRegister,
      handleLogin,
      handleLogout,
      updateData
    }
  return <AuthContext.Provider value={obj}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
