import React, { useState } from "react";
import "../assests/styles/modal.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { usePlaylistContext } from "../context/context";

export default function Modal() {
  const [inputToggle, setInputToggle] = useState(false);
  // const [inputValue, setInputValue] = useState("");

  const {
    modalDisplay,
    setModalDisplay,
    // playlistDetailState,
    // playlistDetailStateDispatch,
    // playlistModalData,
  } = usePlaylistContext();

  // const { playlist } = playlistDetailState;

  // const createPlaylistHandler = () => {
  //   if (inputValue) {
  //     const checkPlayListPresent = playlist.find(
  //       (item) => item.playlistName === inputValue
  //     );
  //     if (checkPlayListPresent) {
  //       setInputToggle((prev) => !prev);
  //     } else {
  //       playlistDetailStateDispatch({
  //         type: "CREATE_PLAYLIST",
  //         payload: inputValue,
  //       });
  //       setInputToggle((prev) => !prev);
  //     }

  //     setInputValue("");
  //   } else {
  //     setInputToggle((prev) => !prev);
  //   }
  // };

  // const addVideoToPlaylistHandler = (specificPlaylistId) => {
  //   playlistDetailStateDispatch({
  //     type: "ADD_VIDEO",
  //     payload: { specificPlaylistId, playlistModalData },
  //   });
  // };

  return (
    <section
      className={`${
        modalDisplay ? "maple-flex" : "display-none"
      } playlist-modal-wrap`}
    >
      <div className="playlist-modal">
        <div className="modal-header">
          <h1 className="heading">Save to...</h1>
          <button onClick={() => setModalDisplay(false)}>
            <AiOutlineCloseCircle className="pointer-cursor" />
          </button>
        </div>
        {/* {playlist.map((item) => {
            return (
              <div className="modalContent">
                <input
                  placeholder="My Playlist"
                  type="checkbox"
                  onClick={() => addVideoToPlaylistHandler(item.playlistId)}
                  checked={item.videoList.includes(playlistModalData)}
                />
                <h1>{item.playlistName}</h1>
              </div>
            );
          })}
          {inputToggle && (
            <div className="modalContent">
              <h1>Name:</h1>
              <input
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
          )} */}
        {inputToggle && <input type="text" />}

        <button
          className="newPlaylist"
          onClick={() => setInputToggle((prev) => !prev)}
        >
          Add new Playlist
        </button>
      </div>
    </section>
  );
}
