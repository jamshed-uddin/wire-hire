import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex justify-between items-center px-6 lg:px-16 py-3 lg:py-0 shadow-lg bg-light-beige z-50">
      <div>
        <Link to={"/"}>
          {" "}
          <h1 className="text-4xl font-bold">Wire Hire</h1>
        </Link>
      </div>

      {/*  nav button  section starts*/}
      <div
        className={`text-center block lg:flex lg:w-[65%] justify-between items-center px-16 lg:px-0 py-28 lg:py-0  z-40 lg:bg-inherit  lg:static transition-all duration-700  ${
          isOpen ? "absolute top-0 right-0" : "absolute top-0 -right-96"
        } bg-white`}
      >
        <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-10 font-semibold nav-links ">
          <NavLink
            onClick={() => setOpen(false)}
            className={`link px-2 py-1 lg:py-0 ${({ isActive }) =>
              isActive ? "active" : "default"}`}
            to={"/"}
          >
            Home
          </NavLink>

          <NavLink
            onClick={() => setOpen(false)}
            className={`link px-2 py-1 lg:py-0 ${({ isActive }) =>
              isActive ? "active" : "default"}`}
            to={"/statistics"}
          >
            Statistics
          </NavLink>

          <NavLink
            onClick={() => setOpen(false)}
            className={`link px-2 py-1 lg:py-0 ${({ isActive }) =>
              isActive ? "active" : "default"}`}
            to={"/appliedjob"}
          >
            Applied Jobs
          </NavLink>

          <NavLink
            onClick={() => setOpen(false)}
            className={`link px-2 py-1 lg:py-0 ${({ isActive }) =>
              isActive ? "active" : "default"}`}
            to={"/blogs"}
          >
            Blogs
          </NavLink>
        </div>

        <div className="mt-4 lg:mt-0">
          <button className="my-btn">Start Applying</button>
        </div>
      </div>
      {/*  nav button  section ends*/}

      <div className="lg:hidden z-30 text-3xl cursor-pointer">
        {isOpen ? (
          <FontAwesomeIcon onClick={() => setOpen(false)} icon={faXmark} />
        ) : (
          <FontAwesomeIcon onClick={() => setOpen(true)} icon={faBars} />
        )}
      </div>
    </div>
  );
};

export default Header;
