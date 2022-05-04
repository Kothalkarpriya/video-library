import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Playlist,
  VideoListing,
  Login,
  Logout,
  Favourites,
  SignUp,
  History,
  WatchLater,
  VideoCardPage,
} from "../pages/pages";

export default function RoutePath() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Playlist" element={<Playlist />} />
      <Route path="/VideoListing" element={<VideoListing />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/History" element={<History />} />
      <Route path="/Logout" element={<Logout />} />
      <Route path="/Favourites" element={<Favourites />} />
      <Route path="/WatchLater" element={<WatchLater />} />
      <Route path="/VideoCardPage" element={<VideoCardPage />} />
    </Routes>
  );
}
