import React from "react";
import {Filter, Videos} from "../../components/components";
export default function VideoListing() {
  return (
    <section className="videos">
      <Filter />
      <Videos />
    </section>
  );
}
