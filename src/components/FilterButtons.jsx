import React from "react";
import { useFilter } from "../context/context";
import "../assests/styles/category-btn.css";

export default function FilterButtons({ categoryName }) {
  const { filterDispatch } = useFilter();
  return (
    <button className="category-btn btn"
      onClick={() => {
        filterDispatch({ type: "SET_CATEGORY", payload: categoryName });
      }}
    >
      {categoryName}
    </button>
  );
}
