import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <h1 className="text-center text-7xl text-red-500 font-bold">
        Page  Not Found <br />
        <button onClick={handleNavigate} className="btn btn-primary">
         Go Back
        </button>
      </h1>
    </div>
  );
};

export default Error;
