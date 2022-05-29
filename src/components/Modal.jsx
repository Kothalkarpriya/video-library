import React, { useState } from "react";
import "../assests/styles/modal.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { usePlaylistContext } from "../context/context";

export default function Modal() {
  const [inputToggle, setInputToggle] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const {
    modalDisplay,
    setModalDisplay,
    playlistDetailState,
    playlistDetailStateDispatch,
    playlistModalData,
  } = usePlaylistContext();

  const { playlist } = playlistDetailState;

  const createPlaylistHandler = () => {
    if (inputValue) {
      const checkPlayListPresent = playlist.find(
        (item) => item.playlistName === inputValue
      );
      if (checkPlayListPresent) {
        setInputToggle((prev) => !prev);
      } else {
        playlistDetailStateDispatch({
          type: "CREATE_PLAYLIST",
          payload: inputValue,
        });
        setInputToggle((prev) => !prev);
      }

      setInputValue("");
    } else {
      setInputToggle((prev) => !prev);
    }
  };

  const addVideoToPlaylistHandler = (specificPlaylistId) => {
    playlistDetailStateDispatch({
      type: "ADD_VIDEO",
      payload: { specificPlaylistId, playlistModalData },
    });
  };

  return (
    <section
      className={`${modalDisplay ? "playlist-modal-wrap" : "display-none"}`}
    >
      <div className="playlist-modal">
        <div className="modal-header">
          <p className="heading">Save to...</p>
          <button onClick={() => setModalDisplay(false)} defaultChecked className="pointer">
            <AiOutlineCloseCircle className="icon" />
          </button>
        </div>
        <div>
          {playlist.map((item) => {
            return (
              <div className="play">
                <input
                  onClick={() => addVideoToPlaylistHandler(item.playlistId)}
                  checked={item.videoList.includes(playlistModalData)}
                  type="checkbox"
                  className="textbox"
                />
                <p className="text">{item.playlistName}</p>
              </div>
            );
          })}
        </div>
        {inputToggle && (
          <div className="play">
            <p className="text">Name:</p>
            <input
              type="text"
              onChange={(e) => setInputValue(e.target.value)}
              defaultChecked
              className="textbox"
              placeholder="Playlist Name"
            />
          </div>
        )}
        <button
          className="primary-btn btn"
          onClick={() => {
            createPlaylistHandler();
          }}
        >
          Add new Playlist
        </button>
      </div>
    </section>
  );
}
