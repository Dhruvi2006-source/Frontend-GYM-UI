import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="main bg-slate-200">
        <div className="1stbox h-[450px] bg-blue-400 flex flex-col justify-center items-center">
          <div className="firstline text-[1.1rem]">WHAT WE BELIEBE IN</div>
          <div className="secnd text-6xl font-extrabold">
            Join the Primal Tribe Today!
          </div>
          <div className="btn mb-8 mt-6 ml-7 h-[40px] w-45 font-mono  bg-white rounded-md text-[15px] flex items-center justify-center hover:bg-black hover:text-white hover:cursor-pointer">
            <Link to="/reserve">RESERVE YOUR SPOT</Link>
          </div>
        </div>
        <div className="2ndbox border-t-2">
          <div className="title flex justify-end h-[80px] text-5xl mt-5 mr-5 font-bold">
            PrimalTraining
          </div>
        </div>
        <div className="info flex justify-between p-8.5 ">
          <div>
            <div className="title font-bold text-[1.5rem] mb-2">CONTACT</div>
            <div className="detail">
              <div className="email font-bold text-[0.9rem]">
                Email: hello@figma.com
              </div>
              <div className="phone font-bold text-[0.9rem]">
                Phone: (203) 555-5555
              </div>
            </div>
          </div>
          <div>
            <div className="title font-bold text-[1.5rem] mb-2">
              OPENING HOURS
            </div>
            <div className="detail">
              <div className="grid grid-cols-2 gap-15 font-bold text-[0.9rem]">
                MON - FRI<div>5:00 - 23:00</div>
              </div>
              <div className="grid grid-cols-2 gap-15 font-bold text-[0.9rem]">
                SATURDAYS <div>8:00 - 16:00</div>
              </div>
              <div className="grid grid-cols-2 gap-15 font-bold text-[0.9rem]">
                SUNDAYS <div>8:00 - 13:00</div>
              </div>
              <div className="grid grid-cols-2 gap-15 font-bold text-[0.9rem]">
                HOLIDAYS <div>8:00 - 16:00</div>
              </div>
            </div>
          </div>
          <div>
            <div className="title font-bold text-[1.5rem] mb-2">SOCIAL</div>
            <div className="detail font-bold text-[0.9rem] underline">
              <div>
                <Link to="/">Instagram</Link>
              </div>
              <div>
                <Link to="/">X</Link>
              </div>
              <div>
                <Link to="/">LinkedIn</Link>
              </div>
              <div>
                <Link to="/">Spotify</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
