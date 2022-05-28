import React from "react";
import { useNavigate } from "react-router-dom";
import "../assests/styles/modal.css";
import { usePlaylistContext } from "../context/context";

export default function PlaylistCard({ title, id, key, image, videoUrl }) {
  const navigate = useNavigate();
  const { playlistDetailStateDispatch } = usePlaylistContext();

  const defaultPlaylist = {
    key:key,
    id: id,
    title: title,
    videoImage: image,
    videoUrl: videoUrl,
  };

  return (
    <div className="card video">
      <div className="container">
        <div className="image">
          <img src="" alt="video-cover" className="img" />
        </div>
        <div className="text">
          <h4 className="title">Video Title</h4>
        </div>
        <div className="card-buttons">
          <button
            className="primary-btn btn"
            onClick={() => navigate("/VideoCardPage")}
          >
            Watch Now
          </button>
          <button
            className="primary-btn btn"
            onClick={() =>
              playlistDetailStateDispatch({
                type: "REMOVE_VIDEO",
                payload: defaultPlaylist,
              })
            }
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
