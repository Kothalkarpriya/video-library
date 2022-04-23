export default function VideoCard({
  id,
  videoTitle,
  views,
  creator,
  videoUrl,
  videoImage,
}) {
  return (
    <div className="card">
      <div className="container">
        <div className="image">
          <img src={videoImage} alt="sunset-and-glass-mug" className="img" />
        </div>
        <div className="text">
          <h2>{videoTitle}</h2>
        </div>
        <div className="para">
          {views}||{creator}
        </div>
        <div className="card-buttons">
          <div className="card-btn">
            <button type="submit" className="btn card-btn-items">
              READ
            </button>
            <button type="submit" className="btn card-btn-items">
              BOOKMARK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
