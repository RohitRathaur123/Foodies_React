import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

export const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <>
      <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6">
        <div className="flex">
          <img
            src="master-chef.jpg"
            alt=""
            className="w-[60px] h-[60px] inline rounded-full"
          />
          <div className="text-2xl font-bold pl-1 pr-1 ml-1 text-white bg-red-700 rounded-lg flex items-center justify-center">
            Foodies
          </div>
        </div>
        <h3 className="flex justify-center text-xl items-center font-semibold ml-48 ">
          Discover the best food & drinks in Delhi NCR
        </h3>
        <div>
          <input
            type="search"
            name="search"
            id=""
            placeholder="Search here"
            autoComplete="off"
            onChange={(e) => dispatch(setSearch(e.target.value))}
            className="font-semibold p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
          />
        </div>
      </nav>
    </>
  );
};
