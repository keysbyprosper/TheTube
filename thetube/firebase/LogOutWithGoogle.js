"use client";
import { getAuth, signOut } from "firebase/auth";
import { fireInit } from "./firebase";

const LogOutWithGoogle = () => {
  fireInit();
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.log("logout successful");
    })
    .catch((error) => {
      console.log("error");
    });
};

export default LogOutWithGoogle;
