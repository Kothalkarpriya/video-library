import "../assests/styles/must-watch.css";
import { useNavigate } from "react-router-dom";
import {useWatchLater} from "../context/context";
import "../assests/styles/video-listing.css";
import { MdWatchLater} from "react-icons/md";

export default function WatchLaterCard({ id, title, image, videoUrl }) {
  const navigateVideo = useNavigate();
  const {dispatchWatchLater} = useWatchLater();
  const defaultWatch = {
    id: id,
    title: title,
    videoImage: image,
    videoUrl: videoUrl,
  };
  return (
    <div className="card video">
      <div className="container">
        <div className="image">
          <img
            src={defaultWatch.videoImage}
            alt="sunset-and-glass-mug"
            className="img"
            onClick={() => {
              navigateVideo("/VideoCardPage", { state: defaultWatch });
            }}
          />
        </div>
        <div className="text">
          <h4 className="title">{defaultWatch.title}</h4>
        </div>
        <div className="card-buttons">
        <button
            className="primary-btn btn"
            onClick={() => {
              navigateVideo("/VideoCardPage", { state: defaultWatch });
            }}
          >
           Watch Now
          </button>
          <button
            className="primary-btn btn"
            onClick={() =>
              dispatchWatchLater({ type: "WATCH_DEL", payload: defaultWatch })
            }
          >
            <MdWatchLater className="btn-icon"/>Remove 
          </button>
        </div>
      </div>
    </div>
  );
}
