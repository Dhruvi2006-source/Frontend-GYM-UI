import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className=" bg-slate-100 h-[80px] flex justify-between items-center">
      <div className="text-black text-2xl font-sans font-bold text-">
        PrimalTraining
      </div>
      <div className=" items-center flex font-mono">
        <Link to="/" className="text-black text-[18px] m-10 no-underline">
          HOME
        </Link>
        <Link to="/about" className="text-black text-[18px] m-10 no-underline">
          ABOUT
        </Link>
        <Link
          to="/reserve"
          className="text-black m-10 no-underline h-[40px] w-45 bg-indigo-400 rounded-md text-[15px] flex items-center justify-center hover:bg-black hover:text-white hover:cursor-pointer"
        >
          RESERVE YOUR SPOT
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
