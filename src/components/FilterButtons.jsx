import React from "react";
import { useFilter } from "../context/context";
export default function FilterButtons({ categoryName }) {
  const { filterDispatch } = useFilter();
  return (
    <button
      onClick={() => {
        filterDispatch({ type: "SET_CATEGORY", payload: categoryName });
      }}
    >
      {categoryName}
    </button>
  );
}
