import React from "react";
import { useAxios } from "../backend/utils/useAxios";
import { useFilter } from "../context/context";
import { FilterButtons } from "./components";

export default function Filter() {
  const { filterDispatch } = useFilter();
  const { apiResponse, loading } = useAxios("/api/categories");
  const { categories } = apiResponse;
  return (
    <div className="category-container">
      <button
        onClick={() => {
          filterDispatch({ type: "SET_CATEGORY", payload: "ALL" });
        }}
      >
        All
      </button>
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        categories.map((item) => {
          return <FilterButtons categoryName={item.categoryName} />;
        })
      )}
    </div>
  );
}
