import "../../assests/styles/video-card-page.css";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

export default function VideoCardPage(item) {
  const { state } = useLocation();
  console.log(state);
  return (
    <section>
      <article>
        <div>
          <ReactPlayer
            controls
            width="400"
            height="400"
            autoplay
            loop
            muted
            preload="auto"
            poster={state.videoImage}
            src={state.videoUrl}
          >
          </ReactPlayer>
        </div>
      </article>
      <aside></aside>
    </section>
  );
}
