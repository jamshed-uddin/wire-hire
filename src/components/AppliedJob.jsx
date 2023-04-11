import SingleAppliedJob from "./SingleAppliedJob";

import { useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const AppliedJob = () => {
  const { allJobs, matchedJob } = useLoaderData();
  const [isAll, setIsAll] = useState(true);
  const [isRemote, setIsRemote] = useState(false);
  const [isOnsite, setIsOnsite] = useState(false);
  const [isClearList, setIsClearList] = useState(false);

  console.log(matchedJob);
  const remote = matchedJob.filter((job) => job.remoteOrOnsite === "Remote");

  const onsite = matchedJob.filter((job) => job.remoteOrOnsite === "Onsite");
  console.log(remote);

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
    <div className="mt-[65px] py-8 lg:mt-20  px-6 lg:px-16 h-screen">
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
          matchedJob.map((singleAppliedJob) => (
            <SingleAppliedJob
              key={singleAppliedJob.id}
              singleAppliedJob={singleAppliedJob}
            ></SingleAppliedJob>
          ))}
        {isRemote &&
          remote.map((remoteJob) => (
            <SingleAppliedJob
              key={remoteJob.id}
              singleAppliedJob={remoteJob}
            ></SingleAppliedJob>
          ))}
        {isOnsite &&
          onsite.map((onsiteJob) => (
            <SingleAppliedJob
              key={onsiteJob.id}
              singleAppliedJob={onsiteJob}
            ></SingleAppliedJob>
          ))}
      </div>
      <div className="flex justify-end items-center  mb-3 lg:mr-36 pt-3 pb-16">
        {isClearList ? (
          <p
            onClick={() => setIsClearList(false)}
            className="my-border text-green-700 font-semibold px-3 py-2 cursor-pointer w-fit"
          >
            Undo
          </p>
        ) : (
          <p
            onClick={() => setIsClearList(true)}
            className="my-border text-red-700 font-semibold px-3 py-2 cursor-pointer w-fit"
          >
            Clear List
          </p>
        )}
      </div>
    </div>
  );
};

export default AppliedJob;
