import React from "react";
import { AiFillDelete } from "react-icons/ai";
import "../assests/styles/playlist.css";
import { Link } from "react-router-dom";
import { usePlaylistContext } from "../context/context";

export default function PlaylistCard({ listDetail }) {
  const { playlistName, videoList, playlistId } = listDetail;
  const { playlistDetailStateDispatch } = usePlaylistContext();
  return (
    <div
      className="card playlist-card"
    >
      <div className="container playlist-container">
        <div className="text text-align-left">
          <Link to={`/Playlist/${playlistId}`}>
            <p >{playlistName}</p>
            {videoList.length ? (
              <img
                alt="video thumbnail"
                src={`${videoList.at(-1).videoImage}`}
              />
            ) : (
              <h1>{playlistName} playlist is empty</h1>
            )}
          </Link>
          <button
            onClick={() =>
              playlistDetailStateDispatch({
                type: "REMOVE_PLAYLIST",
                payload: playlistId,
              })
            }
            className="playlist-btn"
          >
            <AiFillDelete className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
