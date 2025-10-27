import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-200">
      {/* Top Section */}
      <div className="flex flex-col justify-center items-center text-center bg-blue-400 py-16 px-4">
        <p className="text-lg tracking-wide text-white">WHAT WE BELIEVE IN</p>
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mt-2 mb-8">
          Join the Primal Tribe Today!
        </h2>
        <Link
          to="/reserve"
          className="px-6 py-2 bg-white text-black font-mono rounded-md text-sm hover:bg-black hover:text-white transition-all duration-300"
        >
          RESERVE YOUR SPOT
        </Link>
      </div>

      {/* Bottom Section */}
      <div className="border-t-2 py-10 px-8 md:px-16">
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-3xl md:text-5xl font-bold text-right w-full">
            PrimalTraining
          </h3>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 text-sm font-semibold">
          {/* Contact */}
          <div>
            <h4 className="text-xl mb-3 font-bold">CONTACT</h4>
            <p>Email: hello@figma.com</p>
            <p>Phone: (203) 555-5555</p>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-xl mb-3 font-bold">OPENING HOURS</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>MON - FRI</span> <span>5:00 - 23:00</span>
              </div>
              <div className="flex justify-between">
                <span>SATURDAYS</span> <span>8:00 - 16:00</span>
              </div>
              <div className="flex justify-between">
                <span>SUNDAYS</span> <span>8:00 - 13:00</span>
              </div>
              <div className="flex justify-between">
                <span>HOLIDAYS</span> <span>8:00 - 16:00</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl mb-3 font-bold">SOCIAL</h4>
            <div className="flex flex-col space-y-2 underline">
              <Link to="/">Instagram</Link>
              <Link to="/">X</Link>
              <Link to="/">LinkedIn</Link>
              <Link to="/">Spotify</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
