import React from "react";
import { Link } from "react-router-dom";
const Reserve = () => {
  return (
    <div>
      <div className="flex items-center font-extrabold gap-5.5 font-sans whitespace-nowrap text-[7rem] h-[150px]">
        BOOK A <div className="text-indigo-500">SESSION</div>
      </div>

      <div className="grid grid-cols-3 bg-slate-200 border gap-6 pl-6 w-full mx-0">
        <div className="border-r">
          <div className="h-[150px] text-[40px] font-bold leading-none pt-7">
            STRENGTH
          </div>
          <div className="">
            <div className="p-2 w-[95%] text-[1.2rem] border-b ">
              Weekdays at 6AM
            </div>
            <div className="p-2 w-[95%] text-[1.2rem] border-b">
              Weekends and Holidays at 8AM
            </div>
            <div className="h-[25vh] text-[1.2rem] pt-3 w-[95%] font-sans">
              Build a foundation of raw power with our comprehensive
              weightlifting and strength training programs.
            </div>
          </div>
          <div className="text-black m-10 no-underline font-mono h-[40px] bg-indigo-400 rounded-md text-[15px] flex items-center justify-center hover:bg-black hover:text-white hover:cursor-pointer">
            <Link to="#">RESERVE YOUR SPOT</Link>
          </div>
        </div>
        <div className="border-r">
          <div className="h-[150px] text-[40px] font-bold leading-none pt-7">
            CONDITIONING
          </div>
          <div className="">
            <div className="p-2 w-[95%] text-[1.2rem] border-b ">
              Weekdays at 8AM
            </div>
            <div className="p-2 w-[95%] text-[1.2rem] border-b">
              Weekends and Holidays at 10AM
            </div>
            <div className="h-[25vh] text-[1.2rem] pt-3 w-[95%] font-sans">
              Push your limits with high-intensity workouts that challenge your
              cardiovascular endurance and build functional fitness.
            </div>
          </div>
          <div className="text-black m-10 no-underline font-mono h-[40px] bg-indigo-400 rounded-md text-[15px] flex items-center justify-center hover:bg-black hover:text-white hover:cursor-pointer">
            <Link to="#">RESERVE YOUR SPOT</Link>
          </div>
        </div>
        <div>
          <div className="h-[150px] text-[40px] font-bold leading-none pt-7">
            COMMUNITY CLASSES
          </div>
          <div className="">
            <div className="p-2 w-[95%] text-[1.2rem] min-h-[45px]">
              {" "}
            </div>
            <div className="p-2 w-[95%] text-[1.2rem] border-b">
              Every day on the hour
            </div>
            <div className="h-[25vh] text-[1.2rem] pt-3 w-[95%] font-sans">
              Experience the power of collective effort with our custom Workout
              of the Day. Push your limits alongside like-minded individuals.
            </div>
          </div>
          <div className="text-black m-10 no-underline font-mono h-[40px] bg-indigo-400 rounded-md text-[15px] flex items-center justify-center hover:bg-black hover:text-white hover:cursor-pointer">
            <Link to="#">RESERVE YOUR SPOT</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
