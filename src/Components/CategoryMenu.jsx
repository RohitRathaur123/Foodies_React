import React, { useEffect, useState } from "react";
import FoodData from "../Food/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

export const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };
  useEffect(() => {
    listUniqueCategories();
  }, []);
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <>
      <div>
        <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden justify-center">
          <button
            onClick={() => dispatch(setCategory("All"))}
            className={`px-3 py-3 bg-gray-200 font-bold rounded-lg hover:bg-red-500 hover:text-white ${
              selectedCategory === "All" && "bg-red-500 text-white"
            }`}
          >
            All
          </button>
          {categories.map((category, index) => {
            return (
              <button
                onClick={() => dispatch(setCategory(category))}
                key={index}
                className={`px-3 py-3 bg-gray-200 font-bold rounded-lg hover:bg-red-500 hover:text-white ${
                  selectedCategory === category && "bg-red-500 text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
