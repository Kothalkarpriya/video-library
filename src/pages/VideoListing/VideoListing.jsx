import React from "react";
import { GetVideo } from "../../context/context";
import { VideoCard } from "../../components/components";
import "../../assests/styles/video-listing.css";

export default function VideoListing() {
  const { videos } = GetVideo();

  return (
    <section className="videos">
      {videos.map((item) => {
        return (
          <VideoCard
            id={item._id}
            videoTitle={item.title}
            views={item.views}
            creator={item.creator}
            videoUrl={item.videoUrl}
            videoImage={item.videoImage}
          />
        );
      })}
    </section>
  );
}
