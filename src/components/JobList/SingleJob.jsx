import {
  faCircleDollarToSlot,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const SingleJob = (props) => {
  const {
    id,
    companyLogo,
    jobTitle,
    companyName,
    remoteOrOnsite,
    location,
    salary,
  } = props.job;

  return (
    <div className="my-border p-6 bg-[#ffffffd1] lg:mb-0 mb-3 max-w-3xl mx-auto lg:mx-0 flex flex-col ">
      <img className="w-fit" src={companyLogo} alt="" />
      <div className="space-y-1 my-4 pb-10">
        <h1 className="text-3xl font-semibold">{jobTitle}</h1>
        <p className="text-xl font-light">{companyName}</p>
        <p className="border border-1 border-regal-blue w-fit px-5 py-1 font-semibold">
          {remoteOrOnsite}
        </p>
        <p className="lg:space-x-4">
          <span className="font-light text-lg lg:inline block">
            <FontAwesomeIcon icon={faLocationDot} /> {location}
          </span>

          <span className="font-light text-lg lg:inline block">
            {" "}
            <FontAwesomeIcon icon={faCircleDollarToSlot} /> {salary}
          </span>
        </p>
      </div>
      <Link to={`/job-detail/${id}`} className="mt-auto">
        <button className="my-btn ">View Details</button>
      </Link>
    </div>
  );
};

export default SingleJob;
