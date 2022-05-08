import { useLikeVideo } from "../../context/context";

function LikeVideoReducer(state, action) {
  switch (action.type) {
    case "LIKE_ADD":
      return {
        ...state,
        likeVideoItem: [...state.likeVideoItem, action.payload],
      };
    case "LIKE_DEL":
      return {
        ...state,
        likeVideoItem: state.likeVideoItem.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}

function ItemInLikeVideos(id) {
  const { state } = useLikeVideo();

  return (
    state.likeVideoItem.length >= 1 &&
    state.likeVideoItem.filter((item) => item.id === id).length > 0
  );
}

export { LikeVideoReducer, ItemInLikeVideos };
