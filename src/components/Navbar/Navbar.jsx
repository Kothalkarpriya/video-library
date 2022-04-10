import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home || </Link>
      <Link to="/Playlist">Playlist || </Link>
      <Link to="/VideoListing">VideoListing </Link>
    </nav>
  );
}
