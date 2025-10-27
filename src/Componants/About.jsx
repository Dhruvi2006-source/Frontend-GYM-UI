import React from "react";

const About = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* ---------- PAGE TITLE ---------- */}
      <div className="flex justify-center items-center text-center font-extrabold font-sans text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[7rem] py-10 bg-white">
        ABOUT US
      </div>

      {/* ---------- FIRST SECTION ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-3 bg-indigo-400 text-white">
        <div className="md:col-span-2 flex flex-col justify-between p-6 sm:p-10 gap-6 order-2 md:order-1">
          <h2 className="font-bold leading-tight text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-5xl">
            Tap into Your Primal Power.
            <br /> Forge a Stronger You.
          </h2>

          <div>
            <h3 className="font-bold text-[1.3rem] mb-2">OUR VISION</h3>
            <p className="text-[1rem] sm:text-[1.1rem] leading-relaxed">
              Primal Training is committed to delivering a training experience
              rooted in raw strength, functional fitness, and unwavering
              community support. We empower our members to tap into their primal
              power, achieve their goals, and live a life of strength,
              resilience, and determination.
            </p>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <img
            src="/assets/Aboutpage1.png"
            alt="Primal Training"
            className="w-full h-full object-cover"
          />
          <img src="/assets/Aboutpage1.png" alt="Primal Training" />
        </div>
      </div>

      {/* ---------- SECOND SECTION ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-3 bg-slate-200">
        <div className="order-1 md:order-1">
          <img
            src="/assets/Aboutpage2.png"
            alt="Dynamic Gym"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-10 order-2 md:order-2">
          <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold leading-tight text-indigo-500 mb-4">
            DYNAMIC OPEN GYM
          </h2>
          <p className="text-[1rem] sm:text-[1.1rem] font-sans leading-relaxed">
            At Primal Training, we strip away the fluff and focus on the
            fundamentals. Our expert coaches guide you through intense,
            functional workouts designed to build raw strength, resilience, and
            a body capable of anything.
          </p>
        </div>
      </div>

      {/* ---------- THIRD SECTION ---------- */}
      <div className="w-full">
        <img
          src="/assets/Aboutpage3.png"
          alt="Primal Community"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default About;
