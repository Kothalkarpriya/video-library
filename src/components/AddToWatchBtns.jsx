import { AiFillLike, AiOutlineShareAlt, AiFillDislike } from "react-icons/ai";
import { MdPlaylistAdd, MdOutlineWatchLater } from "react-icons/md";
import "../assests/styles/addtowatchbtn.css";
import { ItemInWatchLater } from "../backend/utils/watchLaterReducer";
import {
  useWatchLater,
  useLikeVideo,
  usePlaylistContext,
} from "../context/context";
import { ItemInLikeVideos } from "../backend/utils/LikeVideoReducer";

export default function AddToWatchBtns({ videoItem }) {
  const { dispatchWatchLater } = useWatchLater();
  const { dispatchLike } = useLikeVideo();
  const { setModalDisplay } = usePlaylistContext();

  const defaultWatch = {
    id: videoItem.id,
    videoImage: videoItem.videoImage,
    title: videoItem.title,
    videoUrl: videoItem.videoUrl,
    category: videoItem.category,
  };

  const defaultLike = {
    id: videoItem.id,
    videoImage: videoItem.videoImage,
    title: videoItem.title,
    videoUrl: videoItem.videoUrl,
    category: videoItem.category,
  };
  return (
    <section className="card-btn" id="video-btn">
      <div className="btns">
        {ItemInLikeVideos(videoItem.id) === false ? (
          <button
            className="btn"
            onClick={() =>
              dispatchLike({
                type: "LIKE_ADD",
                payload: defaultLike,
              })
            }
          >
            <AiFillLike className="btn-icon" /> Like
          </button>
        ) : (
          <button
            className="btn"
            onClick={() =>
              dispatchLike({
                type: "LIKE_DEL",
                payload: defaultLike,
              })
            }
          >
            <AiFillDislike className="btn-icon" /> Dislike
          </button>
        )}

        {ItemInWatchLater(videoItem.id) === false ? (
          <button
            className="btn"
            onClick={() =>
              dispatchWatchLater({ type: "WATCH_ADD", payload: defaultWatch })
            }
          >
            <MdOutlineWatchLater className="btn-icon" /> Watch Later
          </button>
        ) : (
          <button
            className="btn"
            onClick={() =>
              dispatchWatchLater({ type: "WATCH_DEL", payload: defaultWatch })
            }
          >
            <MdOutlineWatchLater className="btn-icon" />
            Remove from Watch Later
          </button>
        )}

        <button className="btn" onClick={() => setModalDisplay(true)}>
          <MdPlaylistAdd className="btn-icon" />
          Add To Playlist
        </button>

        <button className="btn">
          <AiOutlineShareAlt className="btn-icon" /> Share
        </button>
      </div>
      <div>{videoItem.views}k views</div>
    </section>
  );
}
