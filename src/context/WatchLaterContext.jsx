import { createContext, useContext, useReducer } from "react";
import { WatchLaterReducer } from "../backend/utils/watchLaterReducer";

const WatchLaterContext = createContext();

function WatchLaterContextPro({ children }) {
  const [state, dispatchWatchLater] = useReducer(WatchLaterReducer, {
    watchLaterItem: [],
  });
  return (
    <WatchLaterContext.Provider value={{ state, dispatchWatchLater }}>
      {children}
    </WatchLaterContext.Provider>
  );
}

const useWatchLater = () => useContext(WatchLaterContext);

export { WatchLaterContextPro, useWatchLater };
