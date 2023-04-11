import {
  faCalendar,
  faCircleDollarToSlot,
  faEnvelope,
  faLocationDot,
  faMessage,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const notify = () =>
  toast("You have applied to this job successfully!", {
    style: {},
    className: "my-border",
  });

const JobDetail = () => {
  const dynamicId = useParams();
  const singleJobId = dynamicId.jobId;
  const loadedData = useLoaderData();
  const allJobs = loadedData.jobs;

  const singleJob = allJobs.find((job) => job.id === singleJobId);

  const {
    id,
    companyLogo,
    jobTitle,
    jobDescription,
    jobResponsibility,
    educationalRequirements,
    experiences,
    companyName,
    remoteOrOnsite,
    location,
    salary,
    contactInformation,
  } = singleJob;

  const appliedJobHandler = (id) => {
    addToDb(id);
  };

  const addToDb = (id) => {
    const storedJob = JSON.parse(localStorage.getItem("jobId"));

    const savedJob = [];
    const jobId = { id };

    if (storedJob) {
      const availableId = storedJob.find((jobId) => jobId.id === id);
      if (availableId) {
        notify();
      } else {
        savedJob.push(...storedJob, jobId);
        localStorage.setItem("jobId", JSON.stringify(savedJob));
      }
    } else {
      savedJob.push(jobId);
      localStorage.setItem("jobId", JSON.stringify(savedJob));
    }
  };

  return (
    <div className="px-6 lg:px-16  lg:py-8 ">
      <div className="h-24 lg:h-36 flex justify-center items-center">
        <h1 className="text-3xl lg:text-4xl font-bold border-b-4 border-r border-regal-blue px-4 py-3 text-center">
          Job Detail
        </h1>
      </div>
      <div className="grid gap-4 lg:grid-cols-3 mt-8">
        {/* job requitments section */}
        <div className="lg:col-span-2 text-lg font-[350] space-y-3 mb-5">
          <p>
            <span className="text-xl font-semibold">Job Description:</span>
            <br />
            {jobDescription}
          </p>
          <p>
            <span className="text-xl font-semibold">Job Responsibility:</span>
            <br />
            {jobResponsibility}
          </p>
          <p>
            <span className="text-xl font-semibold">
              Educational Requirments:
            </span>
            <br />
            {educationalRequirements}
          </p>
          <p>
            <span className="text-xl font-semibold">Experiences:</span>
            <br />
            {experiences}
          </p>
        </div>

        {/* job detail sec */}
        <div className="my-border p-4 lg:w-11/12 mx-auto mb-5">
          <h1 className="text-xl py-3 font-semibold border-b border-regal-blue">
            Job Detail
          </h1>
          <p className="text-lg font-[350] pt-3 pb-1">
            <span className="font-semibold">
              <FontAwesomeIcon icon={faCircleDollarToSlot} /> Salary:
            </span>{" "}
            {salary}
          </p>
          <p className="text-lg font-[350]">
            <span className="font-semibold">
              <FontAwesomeIcon icon={faCalendar} /> Job Title:
            </span>{" "}
            {jobTitle}
          </p>
          <h1 className="text-xl py-3 font-semibold border-b border-regal-blue">
            Contact Information
          </h1>
          <p className="text-lg font-[350] pt-3 pb-1">
            <span className="font-semibold">
              <FontAwesomeIcon icon={faPhone} /> Phone:
            </span>{" "}
            {contactInformation.phone}
          </p>
          <p className="text-lg font-[350]">
            <span className="font-semibold">
              <FontAwesomeIcon icon={faEnvelope} /> Email:
            </span>{" "}
            {contactInformation.email}
          </p>
          <p className="text-lg font-[350]">
            <span className="font-semibold">
              <FontAwesomeIcon icon={faLocationDot} /> Address:
            </span>{" "}
            {location}
          </p>
          <div className="mt-4">
            <button
              onClick={() => appliedJobHandler(id)}
              className="my-btn w-full"
            >
              Apply Now
            </button>
          </div>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
