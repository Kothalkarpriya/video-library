import "../assests/styles/must-watch.css";
import { VideoCard } from "./components";

export default function WatchLaterCard({ id, title, image, videoUrl }) {
  const defaultWatch = {
    id: id,
    title: title,
    videoImage: image,
    videoUrl: videoUrl,
  };
  return <VideoCard videoItem={defaultWatch} />;
}
