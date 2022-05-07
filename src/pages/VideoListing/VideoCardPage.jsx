import "../../assests/styles/video-card-page.css";
import { useLocation } from "react-router-dom";
import { AddToWatchBtns, MustWatch } from "../../components/components";

export default function VideoCardPage(item) {
  const { state } = useLocation();
  
  return (
    <section className="video-card-page">
      <article>
        <div className="text-align-left">
          <h2>{state.title}</h2>
          <p>By {state.creator}</p>
          <iframe
            controls
            autoplay
            loop
            muted
            preload="auto"
            className="video-item"
            title={state.title}
            poster={state.videoImage}
            src={state.videoUrl}
          ></iframe>
          <AddToWatchBtns videoItem={state} key={state._id} />
        </div>
        <div className="video-description">
          <p>
            <strong>Description</strong>
          </p>
          <p>{state.description}</p>
        </div>
      </article>
      <aside>
        <h2>Must Watch</h2>
        <MustWatch />
      </aside>
    </section>
  );
}
