"use client";
import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import React from "react";

const CloudUpload = ({ setVideoUrl }) => {
  // Accept setVideoUrl as a prop
  const handleSuccess = (response) => {
    const { secure_url } = response.info;
    setVideoUrl(secure_url); // Use the setter function to update the video URL in the parent component
    console.log("Uploaded video URL:", secure_url);
  };

  return (
    <div>
      <CldUploadWidget
        uploadPreset="pftx6g2k"
        onSuccess={(response) => handleSuccess(response)}>
        {({ open }) => {
          return (
            <button
              type="button"
              className="bg-blue-500 text-white font-bold py-1 mb-2 px-4 rounded-md shadow-md transition duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={(e) => {
                e.preventDefault(); // Prevent default action to avoid form submission if inside a form
                open();
              }}>
              Upload a Video
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default CloudUpload;
