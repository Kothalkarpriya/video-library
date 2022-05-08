import { useHistory } from "../../context/context";

function HistoryReducer(state, action) {
  switch (action.type) {
    case "WATCHED_VIDEO":
      return {
        ...state,
        historyList: [...state.historyList, action.payload],
      };
    case "REMOVE_FROM_HISTORY":
      return {
        ...state,
        historyList: [
          ...state.historyList.filter((item) => item.id !== action.payload.id),
        ],
      };
    case "CLEAR_HISTORY":
      return {
        ...state,
        historyList: [],
      };
    default:
      return state;
  }
}

function ItemInHistoryList(id) {
  const { state } = useHistory();
  return (
    state.historyList.length >= 1 &&
    state.historyList.filter((item) => item.id === id).length > 0
  );
}

export { HistoryReducer, ItemInHistoryList };
