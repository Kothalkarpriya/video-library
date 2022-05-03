// import { BsThreeDotsVertical } from "react-icons/bs";
import { AiFillLike, AiOutlineShareAlt } from "react-icons/ai";
import { MdPlaylistAdd, MdOutlineWatchLater } from "react-icons/md";
import "../assests/styles/addtowatchbtn.css";

export default function AddToWatchBtns() {
  return (
    <div className="card-btn video-btn">
      <MdOutlineWatchLater />
      <MdPlaylistAdd />
      <AiFillLike />
      <AiOutlineShareAlt />
    </div>
  );
}
