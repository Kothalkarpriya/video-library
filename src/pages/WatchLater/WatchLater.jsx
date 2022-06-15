import { WatchLaterCard, EmptyVideo } from "../../components/components";
import { useWatchLater } from "../../context/context";
import "../../assests/styles/must-watch.css";

export default function WatchLater() {
  const { state } = useWatchLater();
  const watchLaterItems = state.watchLaterItem;
  const { dispatchWatchLater } = useWatchLater();

  const watchLaterMapping = () => {
    return watchLaterItems.map((item, index) => {
      return (
        <WatchLaterCard
          key={item.id}
          id={item.id}
          sr={index + 1}
          title={item.title}
          image={item.videoImage}
          videoUrl={item.videoUrl}
          Action={"Video"}
        />
      );
    });
  };
  return (
    <section>
      <div className="history-container">
        <h2>Your WatchList</h2>
        <button
          className="primary-btn btn"
          onClick={() => {
            dispatchWatchLater({ type: "CLEAR_WATCH_LATER" });
          }}
        >
          Clear Watch Later
        </button>
      </div>

      <div className="watch-later-container">
        {watchLaterItems.length
          ? watchLaterMapping()
          : EmptyVideo("WatchLater")}
      </div>
    </section>
  );
}
