import { useNavigate } from "react-router-dom";
import { useHistory } from "../context/context";

export default function HistoryCard({ id, title, image, videoUrl }) {
  const navigateVideo = useNavigate();
  const { dispatchHistory } = useHistory();

  const defaultHistory = {
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
            src={defaultHistory.videoImage}
            alt="sunset-and-glass-mug"
            className="img"
            onClick={() => {
              navigateVideo("/VideoCardPage", { state: defaultHistory });
            }}
          />
        </div>
        <div className="text">
          <h4 className="title">{defaultHistory.title}</h4>
        </div>
        <div className="card-buttons">
          <button
            className="primary-btn btn"
            onClick={() => {
              navigateVideo("/VideoCardPage", { state: defaultHistory });
            }}
          >
            Watch Now
          </button>
          <button
            className="primary-btn btn"
            onClick={() =>
              dispatchHistory({ type: "REMOVE_FROM_HISTORY", payload: defaultHistory })
            }
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
