import React from "react";
import { VideoCard } from "./components";
import "../assests/styles/video-listing.css";
import { useFilter, useVideoCategory } from "../context/context";

export default function Videos() {
  const { videoList } = useVideoCategory();
  const {
    filterState: { filterSelect },
  } = useFilter();
  const filteredList =
    filterSelect === "All"
      ? videoList
      : videoList.filter((videoItem) => videoItem.category === filterSelect);
  console.log(videoList);
  return (
    <div className="video-cards">
      {filteredList.map((item) => {
        return <VideoCard videoItem={item} key={item._id} />;
      })}
    </div>
  );
}
