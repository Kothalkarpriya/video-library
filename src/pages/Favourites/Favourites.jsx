import { LikeVideoCard, EmptyVideo } from "../../components/components";
import { useLikeVideo } from "../../context/context";
import "../../assests/styles/must-watch.css";

export default function Favourites() {
  const { state } = useLikeVideo();
  const likeVideoItems = state.likeVideoItem;

  console.log(state);
  console.log(likeVideoItems);

  const likeVideoMapping = () => {
    return likeVideoItems.map((item, index) => {
      return (
        <LikeVideoCard
          key={item.id}
          id={item.id}
          sr={index + 1}
          title={item.title}
          image={item.videoImage}
          videoUrl={item.videoUrl}
          Action={"Like"}
        />
      );
    });
  };
  return (
    <section>
      <h2>Your Liked Videos</h2>
      <div className="watch-later-container">
        {likeVideoItems.length ? likeVideoMapping() : EmptyVideo("Like")}
      </div>
    </section>
  );
}
