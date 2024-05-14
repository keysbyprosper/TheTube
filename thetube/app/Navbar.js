'use client'
import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LoginWithGoogle from "@/firebase/LoginWithGoogle.js";
import LogOutWithGoogle from "@/firebase/LogOutWithGoogle";
import Link from "next/link";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-red-500 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 2 2-7 7-2 2zM22 12l-2 2m0 0l-7 7-2-2 7-7 2-2z"
            />
          </svg>
          <h1 className="text-xl font-bold">YouTube</h1>
        </div>
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <span className="text-gray-700">Welcome, {user.displayName}</span>
              <button
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md transition duration-300 hover:bg-gray-300"
                onClick={LogOutWithGoogle}>
                Sign Out
              </button>
              <Link href="/UploadVideo">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-blue-600">
                  Upload
                </button>
              </Link>
            </>
          ) : (
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-red-600"
              onClick={LoginWithGoogle}>
              Sign In
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
