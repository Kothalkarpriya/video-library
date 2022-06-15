import { LikeVideoCard, EmptyVideo } from "../../components/components";
import { useLikeVideo } from "../../context/context";
import "../../assests/styles/must-watch.css";

export default function Favourites() {
  const { state } = useLikeVideo();
  const { dispatchLike } = useLikeVideo();
  const likeVideoItems = state.likeVideoItem;

  const likeVideoMapping = () => {
    return likeVideoItems.map((item, index) => {
      return (
        <LikeVideoCard
          key={item.id}
          id={item.id}
          sr={index + 1}
          title={item.title}
          image={item.videoImage}
          videoUrl={item.videoUrl}
          Action={"Like"}
        />
      );
    });
  };
  return (
    <section>
      <div className="history-container">
        <h2>Your Liked Videos</h2>
        <button
          className="primary-btn btn"
          onClick={() => {
            dispatchLike({ type: "CLEAR_LIKED_VIDEO" });
          }}
        >
          Clear Liked Videos
        </button>
      </div>

      <div className="watch-later-container">
        {likeVideoItems.length ? likeVideoMapping() : EmptyVideo("Like")}
      </div>
    </section>
  );
}
