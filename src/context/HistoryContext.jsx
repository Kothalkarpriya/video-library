import {createContext, useContext, useReducer} from "react";

const HistoryContext = createContext();
function HistoryContextProvider({children}){
    return(
        <HistoryContext.Provider>{children}</HistoryContext.Provider>
    )
}

const useHistory = () => useContext(HistoryContext);

export {HistoryContextProvider, useHistory}