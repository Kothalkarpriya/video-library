import { createContext, useContext, useState, useReducer } from "react";
import PlaylistReducer from "../backend/utils/PlaylistReducer";

const PlaylistContext = createContext();

const PlaylistContextProvider = ({ children }) => {
  const [modalDisplay, setModalDisplay] = useState(false);
  const [playlistModalData, setPlaylistModalData] = useState({});
  const [playlistDetailState, setPlaylistDetailState] = useReducer(
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
        setPlaylistDetailState,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylistContext = () => useContext(PlaylistContext);

export { PlaylistContextProvider, usePlaylistContext };
