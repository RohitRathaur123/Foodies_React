import React from "react";
import { MdCurrencyRupee } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { addToCart } from "../redux/slices/CartSlice";
import { useDispatch } from "react-redux";
export const FoodCard = ({
  id,
  name,
  price,
  desc,
  img,
  rating,
  handleToast,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2">
        <img
          src={img}
          alt=""
          className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
        />
        <div className="text-sm flex justify-between">
          <h2>{name}</h2>
          <span className="text-red-500 flex justify-center items-center">
            <MdCurrencyRupee />
            {price}
          </span>
        </div>
        <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>
        <div className="flex justify-between">
          <span className="flex justify-center items-center">
            <AiFillStar className="mr-1 text-yellow-400" />
            {rating}
          </span>
          <button
            onClick={() => {
              dispatch(addToCart({ id, name, price, rating, img, qty: 1 }));
              handleToast(name);
            }}
            className="p-1 text-white bg-red-500 hover:bg-red-600 rounded-lg text-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};
