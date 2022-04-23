import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Playlist,
  VideoListing,
  Login,
  Logout,
  Favourites,
  SignUp,
  History,
  WatchLater,
} from "../pages/pages";

export default function RoutePath() {
  return (
    <Routes>
      <Route path="/" element={<VideoListing />} />
      <Route path="/Playlist" element={<Playlist />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/History" element={<History />} />
      <Route path="/Logout" element={<Logout />} />
      <Route path="/Favourites" element={<Favourites />} />
      <Route path="/WatchLater" element={<WatchLater />} />
    </Routes>
  );
}
