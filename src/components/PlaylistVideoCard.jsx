import React from "react";
import { useNavigate } from "react-router-dom";
import "../assests/styles/modal.css";
import { usePlaylistContext } from "../context/context";
import { AiFillDelete } from "react-icons/ai";

export default function PlaylistVideoCard({ videoItem, listDetail, image }) {
  const navigate = useNavigate();
  const { playlistDetailStateDispatch } = usePlaylistContext();
  const playlistData = {
    id: videoItem.id,
    title: videoItem.title,
    videoImage: image,
    videoUrl: videoItem.videoUrl,
  };

  return (
    <div className="card video">
      <div className="container">
        <div className="image">
          <img src={videoItem.videoImage} alt="video-cover" className="img" />
        </div>
        <div className="text">
          <h4 className="title">{videoItem.title}</h4>
        </div>
        <div className="card-buttons">
          <button
            className="primary-btn btn"
            onClick={() => navigate("/VideoCardPage", { state: playlistData })}
          >
            Watch Now
          </button>
          <button
            className="primary-btn btn"
            onClick={() =>
              playlistDetailStateDispatch({
                type: "REMOVE_VIDEO",
                payload: { videoItem, listDetail },
              })
            }
          >
            Remove <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
