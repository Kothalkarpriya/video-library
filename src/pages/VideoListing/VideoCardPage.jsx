import "../../assests/styles/video-card-page.css";
import { useLocation } from "react-router-dom";
import { AddToWatchBtns, MustWatch, Modal } from "../../components/components";
import { useHistory } from "../../context/context";

export default function VideoCardPage() {
  const { state } = useLocation();
  const { dispatchHistory } = useHistory();
  const defaultHistory = {
    id: state.id,
    title: state.title,
    videoImage: state.videoImage,
    videoUrl: state.videoUrl,
  };

  return (
    <>
      <section
        className="video-card-page"
        onClick={() =>
          dispatchHistory({ type: "WATCHED_VIDEO", payload: defaultHistory })
        }
      >
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
      <Modal />
    </>
  );
}
