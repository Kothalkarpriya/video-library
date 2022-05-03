import { filterReducer } from "../backend/utils/filterReducer";
import { createContext, useContext, useReducer } from "react";

const FilterContext = createContext();

function FilterContextProvider({ children }) {
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    filterSelect: "All",
  });
  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
}

const useFilter = () => useContext(FilterContext);
export { FilterContextProvider, useFilter };
