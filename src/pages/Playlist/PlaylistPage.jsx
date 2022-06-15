import "../../assests/styles/playlist.css";
import { PlaylistVideoCard } from "../../components/components";
import { useParams } from "react-router-dom";
import { usePlaylistContext } from "../../context/context";

export default function PlaylistPage() {
  const { listId } = useParams();
  const { playlistDetailState } = usePlaylistContext();
  const { playlist } = playlistDetailState;
  const foundPlaylist = playlist.find((item) => item.playlistId === listId);
  const { videoList, playlistName } = foundPlaylist;
  return (
    <div>
      <section>
        <div className="playlist-heading">
          <h2>Playlist: {playlistName}</h2>
        </div>

        <section className="playlist">
          {videoList.length ? (
            videoList.map((item) => {
              return (
                <PlaylistVideoCard
                  listDetail={foundPlaylist}
                  videoItem={item}
                  key={item._id}
                  image={videoList.videoImage}
                />
              );
            })
          ) : (
            <h1>Your {playlistName} list is empty</h1>
          )}
        </section>
      </section>
    </div>
  );
}
