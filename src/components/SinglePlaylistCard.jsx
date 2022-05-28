import React from "react";
import { AiFillDelete } from "react-icons/ai";
import "../assests/styles/playlist.css";
import { useNavigate } from "react-router-dom";
import { usePlaylistContext } from "../context/context";

export default function SinglePlaylistCard() {
  const navigate = useNavigate();
  const { playlistDetailStateDispatch } = usePlaylistContext();

  return (
    <div
      className="card playlist-card"
      onClick={() => navigate("/PlaylistPage")}
    >
      <div className="container text-only">
        <div className="text">
          <h2>PlayList Name</h2>
          <button
            onClick={() =>
              playlistDetailStateDispatch({ type: "REMOVE_PLAYLIST" })
            }
          >
            <AiFillDelete className="icon" />
          </button>
        </div>
        <img src="image" alt="palylist" />
      </div>
    </div>
  );
}
