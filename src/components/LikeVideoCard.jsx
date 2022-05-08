import { useNavigate } from "react-router-dom";
import { useLikeVideo } from "../context/context";

export default function LikeVideoCard({ id, title, image, videoUrl }) {
  const navigateVideo = useNavigate();
  const { dispatchLike } = useLikeVideo();
  const defaultLike = {
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
            src={defaultLike.videoImage}
            alt="sunset-and-glass-mug"
            className="img"
            onClick={() => {
              navigateVideo("/VideoCardPage", { state: defaultLike });
            }}
          />
        </div>
        <div className="text">
          <h4 className="title">{defaultLike.title}</h4>
        </div>
        <div className="card-buttons">
          <button
            className="primary-btn btn"
            onClick={() => {
              navigateVideo("/VideoCardPage", { state: defaultLike });
            }}
          >
            Watch Now
          </button>
          <button
            className="primary-btn btn"
            onClick={() =>
              dispatchLike({ type: "LIKE_DEL", payload: defaultLike })
            }
          >
            Remove from Favourites
          </button>
        </div>
      </div>
    </div>
  );
}
