import React from "react";

const Footer = () => {
  return (
    <div className=" bg-[#ffffffd1] pt-6 px-6 lg:px-16">
      <div className=" flex lg:flex-row flex-col justify-center lg:w-3/4 mx-auto ">
        <div className="lg:w-1/2 ">
          <h1 className="text-xl font-bold">Wire Hire</h1>
          <p className="lg:w-3/4 text-lg font-light">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <div className="flex items-center py-3 gap-5">
            <p>
              <span className="block text-lg font-semibold">Contact us</span>
              435 Hervey street <br />
              Phone: +34 242 542
            </p>
            <p className="space-x-3">
              <span className="underline cursor-pointer">Facebook</span>
              <span className="underline cursor-pointer">Twitter</span>
              <span className="underline cursor-pointer">Linkedin</span>
            </p>
          </div>
        </div>
        <div className="flex justify-evenly lg:w-1/2">
          <div className="">
            <h1 className="text-xl font-semibold">Company</h1>
            <p className="cursor-pointer">About us</p>
            <p className="cursor-pointer">Work</p>
            <p className="cursor-pointer">Services</p>
            <p className="cursor-pointer">Customers</p>
            <p className="cursor-pointer">Career</p>
          </div>
          <div className="">
            <h1 className="text-xl font-semibold">Support</h1>

            <p className="cursor-pointer">Help desk</p>
            <p className="cursor-pointer">Sales</p>
            <p className="cursor-pointer">Become a partner</p>
            <p className="cursor-pointer">Developer</p>
          </div>
        </div>
      </div>
      <p className="text-center  font-light pt-5">
        @2023 WireHire. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
