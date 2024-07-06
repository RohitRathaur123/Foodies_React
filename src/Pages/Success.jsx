import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

export const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-cyan-100">
        {loading ? (
          <PropagateLoader color="red" />
        ) : (
          <div>
            <h2 className="font-bold text-3xl mb-4 text-center">
              Order Successful!
            </h2>
            <p className="font-semibold">
              Your order has been successfully placed. Thank you for choosing
              us! We will notify you once your food is on its way.
            </p>
            <h3 className="text-xl font-semibold text-center">
              {new Date().toUTCString().slice(0, 16)}
            </h3>
          </div>
        )}
      </div>
    </>
  );
};
