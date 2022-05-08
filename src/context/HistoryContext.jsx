import { createContext, useContext, useReducer } from "react";
import { HistoryReducer } from "../backend/utils/historyReducer";

const HistoryContext = createContext();
function HistoryContextProvider({ children }) {
  const [state, dispatchHistory] = useReducer(HistoryReducer, {
    historyList: [],
  });
  return (
    <HistoryContext.Provider value={{ state, dispatchHistory }}>
      {children}
    </HistoryContext.Provider>
  );
}

const useHistory = () => useContext(HistoryContext);

export { HistoryContextProvider, useHistory };
