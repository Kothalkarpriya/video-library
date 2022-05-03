import React from "react";
import { useAxios } from "../backend/utils/useAxios";
import { useFilter } from "../context/context";
import { FilterButtons } from "./components";
import "../assests/styles/category.css";

export default function Filter() {
  const { filterDispatch } = useFilter();
  const { apiResponse, loading } = useAxios("/api/categories");
  const { categories } = apiResponse;
  return (
    <div className="category-container">
      <button className="btn category-btn"
        onClick={() => {
          filterDispatch({ type: "SET_CATEGORY", payload: "All" });
        }}
      >
        All
      </button>
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        categories.map((item) => {
          return <FilterButtons categoryName={item.categoryName} key={item._id}/>;
        })
      )}
    </div>
  );
}
