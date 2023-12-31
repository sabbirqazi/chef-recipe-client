/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  GithubAuthProvider,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const profileUpdate = (name, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  const googleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const githubSignIn = () => {
    const githubProvider = new GithubAuthProvider();
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      console.log("logged in user inside auth state observer", loggedUser);
      setUser(loggedUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    registerUser,
    loginUser,
    profileUpdate,
    googleSignIn,
    githubSignIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
