import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-6 lg:px-16 py-3 lg:py-1 shadow-lg bg-white-smoke z-50">
      <div>
        <Link to={"/"}>
          {" "}
          <h1 className="text-4xl font-bold">Wire Hire</h1>
        </Link>
      </div>

      {/*  nav button  section starts*/}
      <div className="text-center block lg:flex lg:w-[65%] justify-between items-center px-16 lg:px-0 py-28 lg:py-0 bg-white-smoke z-20 lg:bg-inherit absolute lg:static top-0 -left-96">
        <ul className="block lg:flex space-y-5 lg:space-y-0 lg:space-x-10 font-semibold   nav-links ">
          <li className="link">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="link">
            <NavLink>Statistics</NavLink>
          </li>
          <li className="link">
            <NavLink to={"/applied-job"}>Applied Jobs</NavLink>
          </li>
          <li className="link">
            <NavLink>Blogs</NavLink>
          </li>
        </ul>

        <div className="">
          <button className="my-btn">Start Applying</button>
        </div>
      </div>
      {/*  nav button  section ends*/}

      <div className="lg:hidden z-30 text-3xl">
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default Header;
