"use client";
import { CldUploadWidget } from "next-cloudinary";

import React from "react";

const CloudUpload = () => {
  return (
    <div>
      <CldUploadWidget uploadPreset="pftx6g2k">
        {({ open }) => {
          return <button onClick={() => open()}>Upload an Image</button>;
        }}
      </CldUploadWidget>
    </div>
  );
};

export default CloudUpload;
