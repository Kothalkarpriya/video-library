import { createContext, useContext, useState, useReducer } from "react";
import PlaylistReducer from "../backend/utils/PlaylistReducer";

const PlaylistContext = createContext();

const PlaylistContextProvider = ({ children }) => {
  const [modalDisplay, setModalDisplay] = useState(false);
  const [playlistModalData, setPlaylistModalData] = useState({});
  const [playlistDetailState, playlistDetailStateDispatch] = useReducer(
    PlaylistReducer,
    {
      playlist: [],
    }
  );
  return (
    <PlaylistContext.Provider
      value={{
        modalDisplay,
        setModalDisplay,
        playlistModalData,
        setPlaylistModalData,
        playlistDetailState,
        playlistDetailStateDispatch,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylistContext = () => useContext(PlaylistContext);

export { PlaylistContextProvider, usePlaylistContext };
