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
import RouteAuth from "./RouteAuth";

export default function RoutePath() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/Playlist"
        element={
          <RouteAuth>
            <Playlist />
          </RouteAuth>
        }
      />
      <Route path="/VideoListing" element={<VideoListing />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route
        path="/History"
        element={
          <RouteAuth>
            <History />
          </RouteAuth>
        }
      />
      <Route
        path="/Favourites"
        element={
          <RouteAuth>
            <Favourites />
          </RouteAuth>
        }
      />
      <Route
        path="/WatchLater"
        element={
          <RouteAuth>
            <WatchLater />
          </RouteAuth>
        }
      />
      <Route
        path="/VideoCardPage"
        element={
          <RouteAuth>
            <VideoCardPage />
          </RouteAuth>
        }
      />
      <Route
        path="/Playlist/:listId"
        element={
          <RouteAuth>
            <PlaylistPage />
          </RouteAuth>
        }
      />
      <Route
        path="/Modal"
        element={
          <RouteAuth>
            <Modal />
          </RouteAuth>
        }
      />
    </Routes>
  );
}
