import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // User
  const [user, setUser] = useState(null);
  // Loadin State
  const [loading, setLoading] = useState(true);

  // Forget email handle
  const [forgetPassword, setForgetPassword] = useState("");
  // Creating New User
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Reset password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  //   Update User Profile
  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  // User Login
  const userLogIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   Logout
  const logOut = () => {
    setLoading(true);
    errorToast("Logout successfully");
    return signOut(auth);
  };
  // Sign In with google
  const signInGoogle = (googleProvider) => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Successfull toast
  const successfulToast = (text) => {
    toast.success(text, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  // Error toast
  const errorToast = (text) => {
    toast.error(text, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //   User Auth Info
  const authInfo = {
    user,
    setUser,
    createNewUser,
    updateUserProfile,
    userLogIn,
    logOut,
    signInGoogle,
    loading,
    successfulToast,
    errorToast,
    setForgetPassword,
    forgetPassword,
    resetPassword,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
