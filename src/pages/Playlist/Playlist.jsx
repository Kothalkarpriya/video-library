import "../../assests/styles/playlist.css";
import { PlaylistCard, SinglePlaylistCard } from "../../components/components";
import { Link } from "react-router-dom";
import { usePlaylistContext } from "../../context/context";

export default function Playlist() {
  const { playlist } = usePlaylistContext();
  const playlistMapping = () => {
    return playlist.map((index, item) => {
      return (
        <PlaylistCard
          key={item.id}
          id={item.id}
          sr={index + 1}
          title={item.title}
          Action={"Playlist"}
        />
      );
    });
  };
  return (
    <main>
      <section className="playlist-heading">
        <h2>My Playlist</h2>
        <button className="primary-btn btn">Create New Playlist</button>
      </section>
      {/* <PlaylistPage /> */}
      <section className="playlist-card">
        {playlist ? (
          playlistMapping()
        ) : (
          <Link to="/VideoListing" className="primary-btn btn link">
            Go to Explore
          </Link>
        )}
        {/* <PlaylistCard
          id="id"
          sr="index+1"
          title="title"
          videoUrl="videoUrl"
          Action="Playlist"
        /> */}
        <SinglePlaylistCard />
      </section>
    </main>
  );
}
