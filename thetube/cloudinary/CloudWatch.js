"use client";
import React from "react";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

const CloudWatch = () => {
  return (
    <div>
      <CldVideoPlayer
        width="1920"
        height="1080"
        src="Home/sample"
      />
    </div>
  );
};

export default CloudWatch;
