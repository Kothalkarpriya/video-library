import "../../assests/styles/video-listing.css"
import {AddToWatchBtns} from "../components";

export default function VideoCard({
  id,
  videoTitle,
  views,
  creator,
  videoUrl,
  videoImage,
}) {
  return (
    <div className="card video">
      <div className="container">
        <div className="image">
          <img src={videoImage} alt="sunset-and-glass-mug" className="img" />
        </div>
        <div className="text">
          <h4>{videoTitle}</h4>
        </div>
        <div className="card-buttons">
          <AddToWatchBtns />
        </div>
      </div>
    </div>
  );
}
