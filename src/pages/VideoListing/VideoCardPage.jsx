import "../../assests/styles/video-card-page.css";
import { useLocation } from "react-router-dom";
// import ReactPlayer from "react-player";

export default function VideoCardPage(item) {
  const { state } = useLocation();
  console.log(state);
  return (
    <section>
      <article>
        <div>
          <iframe
            controls
            width="400"
            height="400"
            autoplay
            loop
            muted
            preload="auto"
            title={state.title}
            poster={state.videoImage}
            src={state.videoUrl}
          ></iframe>
        </div>
      </article>
      <aside></aside>
    </section>
  );
}
