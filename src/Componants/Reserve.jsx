import React from "react";
import { Link } from "react-router-dom";

const Reserve = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* PAGE TITLE */}
      <div className="flex flex-col sm:flex-row justify-center items-center font-extrabold font-sans text-center sm:text-left text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[7rem] py-10 gap-3 sm:gap-5 bg-white">
        BOOK A <div className="text-indigo-500">SESSION</div>
      </div>

      {/* CLASS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 bg-slate-200 border border-gray-300 gap-6 p-6">
        {/* STRENGTH SECTION */}
        <div className="border border-gray-300 rounded-lg p-6 flex flex-col justify-between bg-white hover:shadow-xl transition-all duration-300">
          <div>
            <div className="text-[2rem] sm:text-[2.3rem] font-bold leading-tight text-indigo-500 mb-4">
              STRENGTH
            </div>
            <div className="text-[1rem] sm:text-[1.1rem]">
              <div className="p-2 border-b border-gray-300">
                Weekdays at 6AM
              </div>
              <div className="p-2 border-b border-gray-300">
                Weekends and Holidays at 8AM
              </div>
              <div className="pt-3 leading-relaxed">
                Build a foundation of raw power with our comprehensive
                weightlifting and strength training programs.
              </div>
            </div>
          </div>
          <div className="mt-6">
            <Link
              to="#"
              className="block text-center bg-indigo-500 text-white font-mono text-[15px] py-2 rounded-md hover:bg-black transition"
            >
              RESERVE YOUR SPOT
            </Link>
          </div>
        </div>

        {/* CONDITIONING SECTION */}
        <div className="border border-gray-300 rounded-lg p-6 flex flex-col justify-between bg-white hover:shadow-xl transition-all duration-300">
          <div>
            <div className="text-[2rem] sm:text-[2.3rem] font-bold leading-tight text-indigo-500 mb-4">
              CONDITIONING
            </div>
            <div className="text-[1rem] sm:text-[1.1rem]">
              <div className="p-2 border-b border-gray-300">
                Weekdays at 8AM
              </div>
              <div className="p-2 border-b border-gray-300">
                Weekends and Holidays at 10AM
              </div>
              <div className="pt-3 leading-relaxed">
                Push your limits with high-intensity workouts that challenge
                your endurance and build functional fitness.
              </div>
            </div>
          </div>
          <div className="mt-6">
            <Link
              to="#"
              className="block text-center bg-indigo-500 text-white font-mono text-[15px] py-2 rounded-md hover:bg-black transition"
            >
              RESERVE YOUR SPOT
            </Link>
          </div>
        </div>

        {/* COMMUNITY SECTION */}
        <div className="border border-gray-300 rounded-lg p-6 flex flex-col justify-between bg-white hover:shadow-xl transition-all duration-300">
          <div>
            <div className="text-[2rem] sm:text-[2.3rem] font-bold leading-tight text-indigo-500 mb-4">
              COMMUNITY CLASSES
            </div>
            <div className="text-[1rem] sm:text-[1.1rem]">
              <div className="p-2 border-b border-gray-300">
                Every day on the hour
              </div>
              <div className="pt-3 leading-relaxed">
                Experience the power of collective effort with our custom
                Workouts of the Day. Push your limits alongside like-minded
                individuals.
              </div>
            </div>
          </div>
          <div className="mt-6">
            <Link
              to="#"
              className="block text-center bg-indigo-500 text-white font-mono text-[15px] py-2 rounded-md hover:bg-black transition"
            >
              RESERVE YOUR SPOT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
