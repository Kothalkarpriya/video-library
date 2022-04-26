import "../../assests/styles/video-listing.css"

export default function VideoCard({
  id,
  videoTitle,
  views,
  creator,
  videoUrl,
  videoImage,
}) {
  return (
    <div className="card video">
      <div className="container">
        <div className="image">
          <img src={videoImage} alt="sunset-and-glass-mug" className="img" />
        </div>
        <div className="text">
          <h4>{videoTitle}</h4>
        </div>
        <div className="para">
          {views}K views| 10 hours ago
        </div>
        <div className="card-buttons">
          <div className="card-btn">
            <button type="submit" className="btn">
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
