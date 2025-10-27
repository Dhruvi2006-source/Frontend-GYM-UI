import React from "react";

const About = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* PAGE TITLE */}
      <div className="flex justify-center items-center text-center font-extrabold font-sans text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[7rem] py-10 bg-white">
        ABOUT US
      </div>

      {/* ---------- First Section ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-3 bg-indigo-400 text-white">
        <div className="col-span-2 flex flex-col justify-between p-6 sm:p-10 gap-6">
          <div className="font-bold leading-tight text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-5xl">
            Tap into Your Primal Power.
            <br /> Forge a Stronger You.
          </div>
          <div>
            <div className="font-bold text-[1.2rem] mb-2">OUR VISION</div>
            <div className="text-[1rem] sm:text-[1.1rem] leading-relaxed">
              Primal Training is committed to delivering a training experience
              rooted in raw strength, functional fitness, and unwavering
              community support. We empower our members to tap into their primal
              power, achieve their goals, and live a life of strength,
              resilience, and determination.
            </div>
          </div>
        </div>
        <div className="img">
          <img src="src\assets\Aboutpage1.png" alt="" />
        </div>
      </div>
      {/* ---------------------------------------Second Box-------------------------------------------------------*/}
      <div className="2ndbox grid grid-cols-3 border-1 bg-slate-200">
        <div className="text col-span-2">
          <div className="">
            <img src="src\assets\Aboutpage2.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col justify-between p-6 sm:p-10 order-1 md:order-2">
          <div className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold leading-tight text-indigo-500 mb-4">
            DYNAMIC OPEN GYM
          </div>
          <div className="text-[1rem] sm:text-[1.1rem] font-sans leading-relaxed">
            At Primal Training, we strip away the fluff and focus on the
            fundamentals. Our expert coaches guide you through intense,
            functional workouts designed to build raw strength, resilience, and
            a body capable of anything.
          </div>
        </div>
      </div>
      {/* ---------------------------------------Third Box-------------------------------------------------------*/}
      <div className="3rd grid grid-cols-3 ">
        <img src="src\assets\Aboutpage3.png" alt="" className="col-span-3" />
      </div>
    </div>
  );
};

export default About;
