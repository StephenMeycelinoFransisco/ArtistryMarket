import React from "react";
import success from '../../assets/Images/Succes.png'
import { Link } from "react-router-dom";

function PaymentSuccess() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-transparent max-w-md p-8 rounded-lg shadow-md text-center">
        <img src={success} alt="" />
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Payment Successful
        </h2>
        <p className="text-gray text-center">
          Your payment has been successfully processed.
        </p>
        <div className="mt-4">
          <Link to={'/home'}>
		  <button
            className="text-purple font-bold bg-black-secondary p-3 rounded-full hover:scale-90 hover:transform-cpu hover:duration-200"
          >
            Continue Shopping
          </button>
		  </Link>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccess;
