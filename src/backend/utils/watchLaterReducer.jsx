import { useWatchLater } from "../../context/context";

function WatchLaterReducer(state, action) {
  switch (action.type) {
    case "WATCH_ADD":
      return {
        ...state,
        watchLaterItem: [...state.watchLaterItem, action.payload],
      };
    case "WATCH_DEL":
      return {
        ...state,
        watchLaterItem: state.watchLaterItem.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "CLEAR_WATCH_LATER":
      return {
        ...state,
        watchLaterItem: [],
      };
    default:
      return state;
  }
}

function ItemInWatchLater(id) {
  const { state } = useWatchLater();
  return (
    state.watchLaterItem.length >= 1 &&
    state.watchLaterItem.filter((item) => item.id === id).length > 0
  );
}

export { WatchLaterReducer, ItemInWatchLater };
