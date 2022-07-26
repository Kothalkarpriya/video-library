import { useFilter } from "../context/FilterContext";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../assests/styles/category.css";

export default function CategoryItem({ item }) {
  const navigateVideo = useNavigate();

  const { filterDispatch } = useFilter();
  return (
    <div
      className="video-cat"
      onClick={() => {
        filterDispatch({ type: "SET_CATEGORY", payload: item.categoryName });
        navigateVideo("/VideoListing");
      }}
    >
      <h3>{item.categoryName}</h3>
      <p>{item.description}</p>
    </div>
  );
}
