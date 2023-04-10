import React, { useEffect, useState } from "react";
import SingleAppliedJob from "./SingleAppliedJob";
import { appliedJobData } from "../Loader/loader";
import { useLoaderData } from "react-router-dom";

const AppliedJob = () => {
  const { allJobs, matchedJob } = useLoaderData();
  console.log(matchedJob);
  return (
    <div className="mt-[65px] py-8 lg:mt-20 px-6 lg:px-16">
      <div className=" pb-8">
        <h1 className="text-3xl lg:text-4xl font-bold border-b-4 border-r border-regal-blue px-4 py-3 text-center w-fit mx-auto">
          Applied Jobs
        </h1>
      </div>
      <div>
        {matchedJob.map((singleAppliedJob) => (
          <SingleAppliedJob
            key={singleAppliedJob.id}
            singleAppliedJob={singleAppliedJob}
          ></SingleAppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;
