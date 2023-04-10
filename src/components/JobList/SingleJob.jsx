import {
  faCircleDollarToSlot,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { jobDetail } from "../../Loader/loader";

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

  const viewDetailHandler = (id) => {
    // console.log(id);
  };

  return (
    <div className="my-border p-6 bg-white lg:mb-0 mb-3 max-w-3xl mx-auto lg:mx-0 relative">
      <img src={companyLogo} alt="" />
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
      <Link to={`/job-detail/${id}`} className="absolute left-6 bottom-0">
        <button onClick={() => viewDetailHandler(id)} className="my-btn mt-4">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default SingleJob;
