import React from "react";

const Banner = () => {
  return (
    <div className="min-h-[calc(100vh-85px)] flex flex-col lg:flex-row items-center px-6 lg:px-16">
      <div>
        <h1 className="text-5xl lg:text-7xl font-bold">
          <span>One Step</span> <br />
          <span> Closer To Your</span> <br />
          <span className="text-blue-950"> Dream Job</span>
        </h1>
        <p className="text-lg lg:text-2xl my-3 font-light w-[80%] pl-1">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="my-btn">Get Started</button>
      </div>
      <div className="order-first lg:order-last lg:w-1/2">
        <img className="w-full" src="officeWork.gif" alt="" />
      </div>
    </div>
  );
};

export default Banner;
