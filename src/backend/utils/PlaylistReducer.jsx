import { v4 as uuid } from "uuid";
import { usePlaylistContext } from "../../context/context";

export default function PlaylistReducer(state, action) {
  const { playlistDetailState } = usePlaylistContext();
  const { playlist } = playlistDetailState;

  switch (action.payload) {
    case "CREATE_PLAYLIST":
      return {
        ...state,
        playlist: [
          state.playlist,
          { playlistName: action.payload, playlistId: uuid(), videoList: [] },
        ],
      };
    case "REMOVE_PLAYLIST":
      const updateListAfterPlaylistRemove = playlist.filter(
        (item) => item.playlistId !== action.payload
      );
      return {
        ...state,
        playlist: [...updateListAfterPlaylistRemove],
      };
    case "ADD_VIDEO":
      const { specificPlaylistId, playlistModalData } = action.payload;
      const findPlaylistobj = playlist.find(
        (item) => item.playlistId === specificPlaylistId
      );
      const { videoList } = findPlaylistobj;
      const findVideoInPlaylist = videoList.find(
        (item) => item._id === playlistModalData._id
      );

      if (findVideoInPlaylist) {
        const updatedList = playlist.map((item) =>
          item.playlistId === findVideoInPlaylist.playlistId
            ? {
                ...item,
                videoList: item.videoList.filter(
                  (item) => item._id !== !findVideoInPlaylist._id
                ),
              }
            : item
        );
        return { ...state, playlist: [...updatedList] };
      } else {
        const updatedList = playlist.map((item) =>
          item.playlistId === findPlaylistobj.playlistId
            ? { ...item, videoList: [...item.videoList, playlistModalData] }
            : item
        );
        return {
          ...state,
          playlist: [...updatedList],
        };
      }
    case "REMOVE_VIDEO":
      const { videoItem, listDetail } = action.payload;
      const { playlistId } = listDetail;
      const findVideoPlayListobj = playlist.find(
        (item) => item.playlistId === playlistId
      );
      const updateListAfterRemove = playlist.map((item) =>
        item.playlistId === findVideoPlayListobj.playlistId
          ? {
              ...item,
              videoList: item.videoList.filter(
                (item) => item._id !== videoItem._id
              ),
            }
          : item
      );
      return { ...state, playlist: [...updateListAfterRemove] };

    default:
      return { ...state };
  }
}
