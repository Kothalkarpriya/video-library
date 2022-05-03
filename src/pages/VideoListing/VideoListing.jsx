import React from "react";
import { Filter, Videos } from "../../components/components";
import "../../assests/styles/video-listing.css";

export default function VideoListing() {
  return (
    <section className="videos">
      <Filter />
      <Videos />
    </section>
  );
}
