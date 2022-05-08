import { WatchLaterCard, EmptyVideo } from "../../components/components";
import { useWatchLater } from "../../context/context";
import "../../assests/styles/must-watch.css";

export default function WatchLater() {
  const { state } = useWatchLater();
  const watchLaterItems = state.watchLaterItem;
  console.log(state);
  console.log(watchLaterItems);

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
      <h2>Your WatchList</h2>
      <div className="watch-later-container">
        {watchLaterItems.length
          ? watchLaterMapping()
          : EmptyVideo("WatchLater")}
      </div>
    </section>
  );
}
