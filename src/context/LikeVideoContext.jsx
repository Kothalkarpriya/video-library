import { createContext, useContext, useReducer } from "react";
import { LikeVideoReducer } from "../backend/utils/LikeVideoReducer";

const LikeVideo = createContext();

function LikeVideoContext({ children }) {
  const [state, dispatchLike] = useReducer(LikeVideoReducer, {
    likeVideoItem: [],
  });
  return (
    <LikeVideo.Provider value={{ state, dispatchLike }}>
      {children}
    </LikeVideo.Provider>
  );
}

const useLikeVideo = () => useContext(LikeVideo);

export { LikeVideoContext, useLikeVideo };
