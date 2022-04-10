import React from "react";
import { Routes, Route} from "react-router-dom";
import { Playlist, VideoListing, Home } from "../pages/pages";

export default function RoutePath() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Playlist" element={<Playlist />} />
      <Route path="/VideoListing" element={<VideoListing />} />
    </Routes>
  );
}
