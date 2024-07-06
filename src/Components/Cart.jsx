import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { ItemCard } from "./ItemCard";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed right-0 top-0 h-full w-full lg:w-[30vw] bg-white p-5 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between my-3">
          <span className="text-xl fold-bold text-gray-800">My Orders</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className=" border-2 border-gray-600 text-gray-600 font-bold p-1 text-[25px] hover:text-red-400 hover:border-red-400 rounded-md cursor-pointer"
          />
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return (
              <ItemCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h2 className="text-center text-xl font-bold text-gray-800">
            Your Card is Empty
          </h2>
        )}
        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Items : {totalQty}</h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount : {totalPrice}
          </h3>
          <hr className="w-[90vw] lg:w-[27vw] my-2" />
          <button
            onClick={() => navigate("/success")}
            className="bg-red-500 font-bold p px-3 py-2 text-white rounded-lg w-full lg:w-[27vw] mb-5"
          >
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full bg-orange-600 text-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${
          totalQty > 0 && "animate-bounce delay-500 transition-all"
        }`}
      />
    </>
  );
};
