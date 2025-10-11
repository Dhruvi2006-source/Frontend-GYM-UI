import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex items-center font-extrabold font-sans whitespace-nowrap text-[7rem] h-[150px]">
        ABOUT US
      </div>
      {/* -----------------------------------------First Box------------------------------------------------------- */}
      <div className="1stbox grid grid-cols-3 border-1 bg-indigo-400">
        <div className="text col-span-2 flex flex-col justify-between p-5">
          <div className="font-bold leading-none text-5xl">
            Tap into Your Primal Power. <br></br>Forge a Stronger You.
          </div>
          <div className="">
            <div className="font-bold text-[1.099rem]">OUR VISION</div>
            <div className="">
              Primal Training is committed to delivering a training experience
              rooted in raw strength, functional fitness, and unwavering
              community support. We empower our members to tap into their primal
              power, achieve their goals, and live a life of strength,
              resilience, and unwavering determination.
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
        <div className="flex flex-col justify-between p-5">
          <div className="text-[41px] font-bold leading-none ">
            DYNAMIC OPEN GYM
          </div>

          <div className="text-[1.099rem] font-sans leading-6">
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
