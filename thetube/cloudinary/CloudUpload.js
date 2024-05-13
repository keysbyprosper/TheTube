"use client";
import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";

import React from "react";

const CloudUpload = () => {
  const [videoUrl, setVideoUrl] = useState("");

  const handleSuccess = (response) => {
    const { secure_url } = response.info;
    setVideoUrl(secure_url);
    console.log("Uploaded video URL:", secure_url);
  };


  return (
    <div>
      <CldUploadWidget
        uploadPreset="pftx6g2k"
        onSuccess={(response) => handleSuccess(response)}>
        {({ open }) => {
          return <button onClick={() => open()}>Upload a Video</button>;
        }}
      </CldUploadWidget>

      {videoUrl && (
        <div>
          <h2>Uploaded Video URL:</h2>
          <p>{videoUrl}</p>
        </div>
      )}
    </div>
  );
};

export default CloudUpload;
