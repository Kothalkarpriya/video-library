import { createContext, useContext } from "react";
import { videos } from "../backend/db/videos";

const VideoContext = createContext(videos);

function VideoContextProvider({ children }) {
  return (
    <VideoContext.Provider value={{ videos }}>{children}</VideoContext.Provider>
  );
}

const GetVideo = () => useContext(VideoContext);

export { VideoContextProvider, GetVideo };
