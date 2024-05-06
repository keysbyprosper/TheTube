"use client";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { fireInit } from "./firebase";

const LoginWithGoogle = () => {
  fireInit();
  console.log("hello world");
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

export default LoginWithGoogle;
