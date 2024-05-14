"use client";
import React, { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import Navbar from "../Navbar.js";
import useStoredUser from "../useStoredUser.js"; // Adjust the path as needed
import CloudUpload from "@/cloudinary/CloudUpload.js";

const Page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const user = useStoredUser(); // Retrieve the user here
  const [time, setTime] = useState(new Date());
  const [videoUrl, setVideoUrl] = useState("");

  async function addVideo() {
    try {
      const docRef = await addDoc(collection(db, "Videos"), {
        title: title,
        description: description,
        user: user.displayName,
        createdAt: time.toLocaleTimeString(),
        VideoUrl: videoUrl,
        // creatorMail: user.mail
      });
      console.log("Document written with ID: ", docRef.id);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Upload Video</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 font-bold mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={handleTitleChange}
                className="w-full px-3 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={handleDescriptionChange}
                className="w-full px-3 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:border-blue-500"></textarea>
            </div>
            <CloudUpload setVideoUrl={setVideoUrl} />
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-blue-600"
              onClick={addVideo}>
              Upload
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
