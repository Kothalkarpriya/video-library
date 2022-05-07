import "../assests/styles/must-watch.css";
import { VideoCard } from "./components";
import { useFilter, useVideoCategory } from "../context/context";

export default function MustWatch() {
  const { videoList } = useVideoCategory();
  const {
    filterState: { filterSelect },
  } = useFilter();
  const filteredList =
    filterSelect === "All"
      ? videoList
      : videoList.filter((videoItem) => videoItem.category !== filterSelect);
  return (
    <div className="must-watch-video">
      {filteredList.map((item) => {
        return <VideoCard videoItem={item} key={item._id} />;
      })}
    </div>
  );
}