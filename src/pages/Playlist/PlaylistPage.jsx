import "../../assests/styles/playlist.css";
import { PlaylistCard } from "../../components/components";

export default function PlaylistPage() {
  return (
    <div>
      <section className="playlist-heading">
        <h2>PlaylistName</h2>
        <button className="primary-btn btn">DeleteThisPlaylist</button>
      </section>
      <section className="playlist-card">
        <PlaylistCard
          id="id"
          sr="index+1"
          title="title"
          videoUrl="videoUrl"
          Action="Playlist"
        />
      </section>
    </div>
  );
}
