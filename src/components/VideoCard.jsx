import "../assests/styles/video-listing.css";
import { AddToWatchBtns } from "./components";

export default function VideoCard({ videoItem }) {
  return (
    <div className="card video">
      <div className="container">
        <div className="image">
          <img
            src={videoItem.videoImage}
            alt="sunset-and-glass-mug"
            className="img"
          />
        </div>
        <div className="text">
          <h4>{videoItem.videoTitle}</h4>
        </div>
        <div className="card-buttons">
          <AddToWatchBtns />
        </div>
      </div>
    </div>
  );
}
