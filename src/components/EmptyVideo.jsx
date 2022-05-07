import React from "react";

export default function EmptyVideo(route) {
  function errorFind(route) {
    switch (route) {
      case "WatchLater":
        return "You Have No Videos In Watch Later";
      case "History":
        return "You have not watched any videos Yet.";
      case "Like":
        return "You have not Liked any Videos";
      default:
        break;
    }
  }

  return <h3>{errorFind(route)}</h3>;
}
