import SingleAppliedJob from "./SingleAppliedJob";

import { useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";

const AppliedJob = () => {
  const data = useLoaderData();
  const [allData, setAllData] = useState([]);
  const [allJobs, setAlljobs] = useState(data.jobs);

  const [isAll, setIsAll] = useState(true);
  const [isRemote, setIsRemote] = useState(false);
  const [isOnsite, setIsOnsite] = useState(false);
  const [isClearList, setIsClearList] = useState(false);

  const [remoteJob, setRemoteJob] = useState([]);
  const [onsiteJob, setOnsiteJob] = useState([]);

  useEffect(() => {
    const storedJob = JSON.parse(localStorage.getItem("jobId"));
    const matchedJob = [];
    if (storedJob) {
      for (const job of storedJob) {
        const appliedJob = allJobs.find(
          (singleJob) => singleJob?.id === job.id
        );
        if (appliedJob) {
          matchedJob.push(appliedJob);
        }
      }
    }

    setAllData(matchedJob);
  }, [allJobs]);

  useEffect(() => {
    if (allData) {
      const remote = allData.filter((job) => job.remoteOrOnsite === "Remote");

      const onsite = allData.filter((job) => job.remoteOrOnsite === "Onsite");

      setRemoteJob(remote);
      setOnsiteJob(onsite);
    }
  }, [allData]);

  const isRemoteHandler = () => {
    setIsRemote(true);
    setIsAll(false);
    setIsOnsite(false);
  };
  const isOnsiteHandler = () => {
    setIsOnsite(true);
    setIsAll(false);
    setIsRemote(false);
  };

  return (
    <div className="mt-[65px] py-8 lg:mt-20  px-6 lg:px-16">
      <div className=" pb-8">
        <h1 className="text-3xl lg:text-4xl font-bold border-b-4 border-r border-regal-blue px-4 py-3 text-center w-fit mx-auto">
          Applied Jobs
        </h1>
      </div>
      <div className="flex gap-2 justify-end items-center  mb-3 lg:mr-36">
        <FontAwesomeIcon className="text-3xl" icon={faFilter} />
        <p
          onClick={() => setIsAll(true)}
          className="my-border cursor-pointer w-fit px-2"
        >
          All
        </p>
        <p
          onClick={isRemoteHandler}
          className="my-border cursor-pointer w-fit px-2"
        >
          Remote
        </p>
        <p
          onClick={isOnsiteHandler}
          className="my-border cursor-pointer w-fit px-2"
        >
          Onsite
        </p>
      </div>
      <div className={`${isClearList ? "hidden" : "block"}`}>
        {isAll &&
          allData?.map((singleAppliedJob) => (
            <SingleAppliedJob
              key={singleAppliedJob.id}
              singleAppliedJob={singleAppliedJob}
            ></SingleAppliedJob>
          ))}
        {isRemote &&
          remoteJob?.map((remoteJob) => (
            <SingleAppliedJob
              key={remoteJob.id}
              singleAppliedJob={remoteJob}
            ></SingleAppliedJob>
          ))}
        {isOnsite &&
          onsiteJob?.map((onsiteJob) => (
            <SingleAppliedJob
              key={onsiteJob.id}
              singleAppliedJob={onsiteJob}
            ></SingleAppliedJob>
          ))}
      </div>
      <div className="flex gap-6 justify-end items-center  mb-3 lg:mr-36 pt-3 pb-16">
        {isClearList ? (
          <p
            onClick={() => setIsClearList(false)}
            className="my-border text-green-700 font-semibold px-4 py-2 cursor-pointer w-fit"
          >
            Undo
          </p>
        ) : (
          <p
            onClick={() => setIsClearList(true)}
            className={`my-border text-red-700 font-semibold px-4 py-2 cursor-pointer w-fit ${
              allData.length || "hidden"
            }`}
          >
            Clear List
          </p>
        )}
      </div>
    </div>
  );
};

export default AppliedJob;
