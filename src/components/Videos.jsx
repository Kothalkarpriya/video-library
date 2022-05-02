import React from "react";
import { VideoCard } from "./components";
import "../assests/styles/video-listing.css";
import { useFilter, useVideoCategory } from "../context/context";

export default function Videos() {
  const { videoList } = useVideoCategory();
  const { filterState } = useFilter();
  const filterSelect = filterState;

  const filteredList =
    filterSelect === "All"
      ? videoList
      : videoList.filter((videoItem) => videoItem.category === filterSelect);
  return (
    <div>
      {filteredList.map((item) => {
        return <VideoCard videoItem={item} key={item._id} />;
      })}
    </div>
  );
}
