import "../../assests/styles/sidebar.css";
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineHistory, AiFillLike } from "react-icons/ai";
import { MdPlaylistAdd, MdOutlineWatchLater } from "react-icons/md";

export default function Sidebar() {
  return (
    <section className="sidebar-container">
      <Link to="/" className="nav-brand-link side-list">
        <AiFillHome /> Home
      </Link>
      <Link to="/History" className="nav-brand-link side-list">
        <AiOutlineHistory />
        History
      </Link>
      <Link to="/Playlist" className="nav-brand-link side-list">
        <MdPlaylistAdd /> Playlist
      </Link>
      <Link to="/Favourites" className="nav-brand-link side-list">
        <AiFillLike />
        Liked videos
      </Link>
      <Link to="/WatchLater" className="nav-brand-link side-list">
        <MdOutlineWatchLater /> WatchLater
      </Link>
    </section>
  );
}
