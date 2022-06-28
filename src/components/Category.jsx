import React from "react";
import { useAxios } from "../backend/utils/useAxios";
import { CategoryItem } from "./components";
import "../assests/styles/category.css";

export default function Category() {
  const { apiResponse, loading } = useAxios("/api/categories");
  const { categories } = apiResponse;
  return (
    <div className="video-category">
      <p className="category-heading">Categories</p>
      <div className="category-container">
        {loading ? (
          <h4>Loading...</h4>
        ) : (
          categories.map((item) => {
            return <CategoryItem item={item} key={item._id} />;
          })
        )}
      </div>
    </div>
  );
}
