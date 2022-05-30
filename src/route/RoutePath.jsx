import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Playlist,
  VideoListing,
  Login,
  Favourites,
  SignUp,
  History,
  WatchLater,
  VideoCardPage,
  PlaylistPage,
} from "../pages/pages";
import { Modal } from "../components/components";

export default function RoutePath() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Playlist" element={<Playlist />} />
      <Route path="/VideoListing" element={<VideoListing />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/History" element={<History />} />
      <Route path="/Favourites" element={<Favourites />} />
      <Route path="/WatchLater" element={<WatchLater />} />
      <Route path="/VideoCardPage" element={<VideoCardPage />} />
      <Route path="/Playlist/:listId" element={<PlaylistPage />} />
      <Route path="/Modal" element={<Modal />} />
    </Routes>
  );
}
