
import React from "react";
import { useNavigate } from 'react-router-dom';


const Button = ({ text, route, onClick, isForm = false }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (route != null) {
      navigate(route)
    } else if (onClick != null) {
      onClick();
    }
  };
  return (
    <button
      type="submit"
      onClick={handleClick}
      className={
        isForm
          ? "w-full border-4 rounded-xl text-white border-white bg-gradient-to-r from-orange to-yellow px-8 py-2 text-xl font-medium"
          : "border-4 rounded-3xl text-white border-white bg-gradient-to-r from-orange to-yellow px-8 py-2 text-xl font-medium"
      }
    >
      {text}
    </button>
  );
};

export default Button;
