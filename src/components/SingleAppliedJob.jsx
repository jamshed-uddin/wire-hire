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
  } = props.singleAppliedJob;

  return (
    <div className="my-border bg-white  flex  justify-evenly items-center px-4 py-2 lg:w-3/5 mx-auto mb-3">
      <img className="object-contain w-28 " src={companyLogo} alt="" />
      <div className="pl-4 ">
        <h1 className="text-lg font-semibold">{jobTitle}</h1>
        <p className=" font-light">{companyName}</p>
        <p className="border border-1 border-regal-blue w-fit  font-semibold">
          {remoteOrOnsite}
        </p>
        <p>
          <span className="font-light text-sm  block">
            {" "}
            <FontAwesomeIcon icon={faCircleDollarToSlot} /> {salary}
          </span>
          <span className="font-light text-sm  block">
            <FontAwesomeIcon icon={faLocationDot} /> {location}
          </span>
        </p>
      </div>
      <Link className="ml-auto" to={`/job-detail/${id}`}>
        <button className="my-btn ">View Details</button>
      </Link>
    </div>
  );
};

export default SingleJob;
