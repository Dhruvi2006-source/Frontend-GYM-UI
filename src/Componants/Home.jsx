import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* HERO SECTION */}
      <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left font-extrabold font-sans whitespace-nowrap text-[2.5rem] sm:text-[4rem] md:text-[6rem] h-auto md:h-[150px] py-8">
        TRAIN HARD.
        <div className="text-indigo-400 ml-2 md:ml-4">LIVE BETTER</div>
      </div>

      {/* BODY 1 */}
      <div className="body1 grid grid-cols-1 md:grid-cols-3 bg-slate-200">
        <div className="img md:col-span-2">
          <img
            src="/assets/Homepage1.png"
            alt="Homepage1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="content1 flex justify-between flex-col p-6 gap-6">
          <div className="heading font-bold font-sans leading-none text-[2rem] sm:text-[2.5rem]">
            FOR THE COMMITTED
          </div>
          <div className="desc text-[1rem] sm:text-[1.1rem]">
            Train like an athlete with top-tier equipment and expert
            programming. Whether you're building muscle or breaking PRs, we help
            you push past limits.
            <div className="link mb-8 mt-4 ml-0 sm:ml-3 h-[40px] w-fit px-5 flex items-center justify-center border border-black hover:bg-black hover:text-white rounded-md hover:cursor-pointer">
              <Link to="/about" className="text-[15px]">
                ABOUT US
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* BODY 2 */}
      <div className="body2 grid grid-cols-1 md:grid-cols-3 bg-slate-200">
        <div className="desc1 border-b md:border-b-0 md:border-r border-black flex flex-col justify-between p-6">
          <div className="heading text-[2rem] sm:text-[2.5rem] md:text-[2.9rem] flex justify-center font-bold text-center md:text-left">
            Guided by experts
          </div>
          <div className="body mt-4 text-[1rem] sm:text-[1.15rem] text-center md:text-left">
            We believe in creating a positive environment where you can thrive.
            We're here to help you achieve your goals and unlock your full
            potential.
          </div>
        </div>
        <div className="desc2 flex flex-col justify-between p-6">
          <div className="heading text-[2rem] sm:text-[2.5rem] flex justify-center font-bold mt-2 text-center md:text-left">
            DYNAMIC OPEN GYM
          </div>
          <div className="body mt-4 text-[1rem] sm:text-[1.15rem] text-center md:text-left">
            Our facility is the optimal environment for strength training and
            performance, fully equipped with top-of-the-line tools, ample
            training areas, and a focus on functional movement.
          </div>
        </div>
        <div className="img">
          <img
            src="/assets/Homepage2.png"
            alt="Homepage2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* LAST SECTION */}
      <div className="last">
        <div className="title flex flex-col md:flex-row gap-3 md:gap-5 items-center justify-center text-[2.5rem] sm:text-6xl md:text-8xl font-extrabold py-8 border-b border-black text-center md:text-left">
          JOIN THE <div className="text-indigo-500">COMMUNITY</div>
        </div>

        <div className="Lstcontainer grid grid-cols-1 md:grid-cols-3 bg-slate-200">
          <div className="text grid grid-rows-5 p-5">
            <div className="border-b py-4 text-[2rem] sm:text-[2.5rem] font-bold leading-none">
              DISCOVER YOUR POTENTIAL
            </div>

            <div className="p-4 border-b">
              <div className="subTitle text-[1.3rem] sm:text-[1.5rem] font-bold">
                Expert Coaching
              </div>
              <div className="body text-[1rem] sm:text-[1.1rem]">
                Trainers who are passionate about your progress.
              </div>
            </div>

            <div className="p-4 border-b">
              <div className="subTitle text-[1.3rem] sm:text-[1.5rem] font-bold">
                Results-Driven Programs
              </div>
              <div className="body text-[1rem] sm:text-[1.1rem]">
                Workouts that deliver tangible, measurable results.
              </div>
            </div>

            <div className="p-4 border-b">
              <div className="subTitle text-[1.3rem] sm:text-[1.5rem] font-bold">
                A Supportive Tribe
              </div>
              <div className="body text-[1rem] sm:text-[1.1rem]">
                A community that pushes you to be your best.
              </div>
            </div>

            <div className="mt-6 h-[40px] font-mono w-fit px-5 flex items-center justify-center border border-black hover:bg-black hover:text-white rounded-md hover:cursor-pointer">
              <Link to="/reserve">VIEW CLASSES</Link>
            </div>
          </div>

          <div className="img col-span-2">
            <img
              src="/assets/Homepage3.png"
              alt="Homepage3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
