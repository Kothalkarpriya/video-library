import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home || </Link>
      <Link to="/Playlist">Playlist || </Link>
      <Link to="/VideoListing">VideoListing </Link>
      <Link to="/Login">Login || </Link>
      <Link to="/SignUp">SignUp || </Link>
      <Link to="/Logout">Logout|| </Link>
      <Link to="/History">History || </Link>
      <Link to="/Favourites">Favourites || </Link>
      <Link to="/WatchLater">WatchLater </Link>
    </nav>
  );
}
