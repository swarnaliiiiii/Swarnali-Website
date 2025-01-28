import React from 'react';

const Landing = () => {
  return (
    <div className="bg-black text-white h-screen flex flex-col items-center">
      <div className="mt-10 text-center">
        <h1 className="text-2xl xl:text-9xl font-[garamond] leading-snug">
          Swarnali(
          <span className="text-lg xl:text-3xl font-light align-middle ml-2">
            Web Developer
          </span>
          )Bhattacharyya
        </h1>
      </div>
      <div className="mt-10">
        <div className="relative">
          <div className="w-[15rem] h-[10rem] lg:w-[20rem] lg:h-[12rem] bg-green-500 overflow-hidden">
            <img
              src="/Image1.png"
              alt="Swarnali"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
