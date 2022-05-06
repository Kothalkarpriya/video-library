import { AiFillLike, AiOutlineShareAlt } from "react-icons/ai";
import { MdPlaylistAdd, MdOutlineWatchLater } from "react-icons/md";
import "../assests/styles/addtowatchbtn.css";

export default function AddToWatchBtns({ videoItem }) {
  return (
    <section className="card-btn" id="video-btn">
      <div className="btns">
        <button className="btn">
          <AiFillLike className="btn-icon" /> Like
        </button>
        <button className="btn">
          <MdOutlineWatchLater className="btn-icon" /> Watch Later
        </button>
        <button className="btn">
          <MdPlaylistAdd className="btn-icon" /> Add To Playlist
        </button>
        <button className="btn">
          <AiOutlineShareAlt className="btn-icon" /> Share
        </button>
      </div>
      <div>{videoItem}k views</div>
    </section>
  );
}
