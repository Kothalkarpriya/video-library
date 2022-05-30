import React from "react";
import "../assests/styles/video-listing.css";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ videoItem }) {
  const navigateVideo = useNavigate();

  return (
    <div className="card video">
      <div className="container">
        <div className="image">
          <img
            src={videoItem.videoImage}
            alt="sunset-and-glass-mug"
            className="img"
            onClick={() => {
              navigateVideo("/VideoCardPage", { state: videoItem });
            }}
          />
        </div>
        <div className="text">
          <h4 className="title">{videoItem.title}</h4>
        </div>
        <div className="card-buttons">
          <button
            className="primary-btn btn"
            onClick={() => {
              navigateVideo("/VideoCardPage", { state: videoItem });
            }}
          >
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );
}
