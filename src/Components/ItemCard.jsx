import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdCurrencyRupee } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

export const ItemCard = ({ id, name, qty, price, img }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
        <MdDelete
          onClick={() => {
            dispatch(removeFromCart({ id, img, name, price, qty }));
            toast.success(`${name} Removed!`, {
              style: {
                border: "1px solid #713200",
                padding: "16px",
                color: "#713200",
              },
              iconTheme: {
                primary: "#713200",
                secondary: "#FFFAEE",
              },
            });
          }}
          className="absolute right-7 text-gray-600 cursor-pointer"
        />
        <img src={img} alt="cardlogo" className="w-[50px] h-[50px]" />
        <div className="leading-5">
          <h2 className="font-bold text-gray-800">{name}</h2>
          <div className="flex justify-between">
            <span className="text-red-500 font-bold">
              <MdCurrencyRupee className="inline" />
              {price}
            </span>
            <div className="flex justify-center items-center gap-2 absolute right-7">
              <AiOutlinePlus
                onClick={() =>
                  qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
                }
                className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-red-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
              />
              <span>{qty}</span>
              <AiOutlineMinus
                onClick={() =>
                  qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
                }
                className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-red-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
