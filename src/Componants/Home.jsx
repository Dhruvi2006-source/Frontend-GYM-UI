import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="flex justify-center items-center font-extrabold font-sans whitespace-nowrap text-[6rem] h-[150px]">
        TRAIN HARD.
        <div className="text-indigo-400">LIVE BETTER</div>
      </div>
      <div className="body1 grid grid-cols-3 border-1 bg-slate-200">
        <div className="img col-span-2 ">
          <img src="\assets\Homepage1.png" />
        </div>
        <div className="content1 flex justify-between flex-col p-5 gap-6">
          <div className="heading font-bold font-sans leading-none text-[2.5rem]">
            FOR THE COMMITTED
          </div>
          <div className="desc text-[1.1rem] ">
            Train like an athlete with top-tier equipment and expert
            programming. Whether you're building muscle or breaking PRs, we help
            you push past limits.
            <div className="link mb-8 mt-4 ml-3 h-[40px] w-30 flex items-center justify-center hover:bg-black hover:text-white hover:rounded-md hover:cursor-pointer">
              <div className="">
                <Link to="/about" className="text-[15px]">
                  ABOUT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body2 grid grid-cols-3 bg-slate-200 ">
        <div className="desc1 border-r-1 border-black flex flex-col justify-between">
          <div className="heading text-[2.9rem] flex justify-center font-bold">
            Guided by experts
          </div>
          <div className="body mb-30 mr-8 ml-6 text-[1.15rem]">
            We believe in creating a positive environment where you can thrive.
            We're here to help you achieve your goals and unlock your full
            potential.
          </div>
        </div>
        <div className="desc2 flex flex-col justify-between">
          <div className="heading text-[2.5rem] flex justify-center font-bold mt-2">
            DYNAMIC OPEN GYM
          </div>
          <div className="body mb-23 mr-8 ml-6 text-[1.15rem]">
            Our facility is the optimal environment for strength training and
            performance, fully equipped with top-of-the-line tools, ample
            training areas, and a focus on functional movement.
          </div>
        </div>
        <div className="img">
          <img src="\assets\Homepage2.png" />
        </div>
      </div>
      <div className="last ">
        <div className="title h-[150px] flex flex-row gap-5.5 text-8xl items-center font-extrabold border-1 pl-5">
          JOIN THE 
          <div className="text-indigo-500">COMMUNITY</div>
        </div>
        <div className="Lstcontainer grid grid-cols-3 bg-slate-200">
          <div className="text grid grid-rows-5">
            <div className="border-b-1 p-5 text-[2.5rem] font-bold leading-none">
              DISCOVER YOUR POTENTIAL
            </div>
            <div className="p-5 border-b-1">
              <div className="subTitle text-[1.5rem] font-bold">
                Expert Coaching
              </div>
              <div className="body text-[1.1rem]">
                Trainers who are passionate about your progress.
              </div>
            </div>
            <div className="p-5 border-b-1">
              <div className="subTitle text-[1.5rem] font-bold">
                Results-Driven Programs
              </div>
              <div className="body text-[1.1rem]">
                Workouts that deliver tangible, measurable results.
              </div>
            </div>
            <div className="p-5 border-b-1">
              <div className="subTitle text-[1.5rem] font-bold">
                A Supportive Tribe
              </div>
              <div className="body text-[1.1rem]">
                A community that pushes you to be your best.
              </div>
            </div>
            <div className=" mb-8 mt-6 ml-7 h-[40px] font-mono w-30 flex items-center justify-center hover:bg-black hover:text-white hover:rounded-md hover:cursor-pointer">
              <Link to="/reserve">VIEW CLASSES</Link>
            </div>
          </div>
          <div className="img col-span-2 w-fit">
            <img src="\assets\Homepage3.png" className="w-7xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
