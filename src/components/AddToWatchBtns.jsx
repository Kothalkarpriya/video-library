import { AiFillLike, AiOutlineShareAlt } from "react-icons/ai";
import { MdPlaylistAdd, MdOutlineWatchLater } from "react-icons/md";
import "../assests/styles/addtowatchbtn.css";
import { ItemInWatchLater } from "../backend/utils/watchLaterReducer";
import { useWatchLater } from "../context/context";

export default function AddToWatchBtns({ videoItem }) {
  const { dispatchWatchLater } = useWatchLater();
  const defaultWatch = {
    id: videoItem.id,
    videoImage: videoItem.videoImage,
    title: videoItem.title,
    videoUrl: videoItem.videoUrl,
    category: videoItem.category,
  };
  return (
    <section className="card-btn" id="video-btn">
      <div className="btns">
        <button className="btn">
          <AiFillLike className="btn-icon" /> Like
        </button>
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

        <button className="btn">
          <MdPlaylistAdd className="btn-icon" /> Add To Playlist
        </button>
        <button className="btn">
          <AiOutlineShareAlt className="btn-icon" /> Share
        </button>
      </div>
      <div>{videoItem.views}k views</div>
    </section>
  );
}
