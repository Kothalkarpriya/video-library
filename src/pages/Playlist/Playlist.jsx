import React, { useState } from "react";
import "../../assests/styles/playlist.css";
import { PlaylistCard } from "../../components/components";
import { useNavigate } from "react-router-dom";
import { usePlaylistContext } from "../../context/context";

export default function Playlist() {
  const navigate = useNavigate();
  const { playlistDetailState, playlistDetailStateDispatch } =
    usePlaylistContext();
  const { playlist } = playlistDetailState;
  const [newPlaylistName, setNewPlaylistName] = useState("");
  return (
    <main>  
      <section className="playlist-heading">
        <h2>All Playlist</h2>
        <div className="input-block-input">
          <input
            value={newPlaylistName}
            type="text"
            onChange={(e) => setNewPlaylistName(e.target.value)}
            className="text"
            placeholder="Enter Playlist name here"
          />
          <button
            className="primary-btn btn"
            onClick={() => {
              newPlaylistName &&
                playlistDetailStateDispatch({
                  type: "CREATE_PLAYLIST",
                  payload: newPlaylistName,
                });
              setNewPlaylistName("");
            }}
          >
            Create Playlist
          </button>
        </div>
      </section>
      <section className="playlist">
        {playlist.length ? (
          playlist.map((item) => {
            return <PlaylistCard listDetail={item} key={item.playlistId} />;
          })
        ) : (
          <button
            onClick={() => {
              navigate("/VideoListing");
            }}
            className="primary-btn btn text-align-center"
          >
            Go To Explore
          </button>
        )}
      </section>
    </main>
  );
}
