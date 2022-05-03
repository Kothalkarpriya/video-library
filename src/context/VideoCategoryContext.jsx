import { createContext, useContext, useState, useEffect } from "react";
import { useAxios } from "../backend/utils/useAxios";

const VideoCategory = createContext();

function VideoCategoryContext({ children }) {
  const { apiResponse, loading } = useAxios("/api/videos");
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    if (!loading) {
      setVideoList([...apiResponse.videos]);
    }
  }, [apiResponse.videos, loading]);

  return (
    <VideoCategory.Provider value={{ videoList }}>
      {children}
    </VideoCategory.Provider>
  );
}

const useVideoCategory = () => useContext(VideoCategory);

export { VideoCategoryContext, useVideoCategory };
